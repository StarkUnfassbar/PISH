import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';



export async function POST(request) {
    let connection;
    
    try {
        console.log('🔍 Подключение к TimeWeb MySQL...');
        console.log('📊 Проверка переменных окружения:');
        console.log('DB_HOST:', process.env.DB_HOST);
        console.log('DB_USER:', process.env.DB_USER);
        console.log('DB_NAME:', process.env.DB_NAME);
        console.log('DB_PORT:', process.env.DB_PORT);

        // Получаем данные из тела запроса
        const body = await request.json();
        const { fio, email, region } = body;

        console.log('📥 Получены данные:', { fio, email, region });

        // Валидация данных
        if (!fio || !email || !region) {
        return NextResponse.json(
            { message: 'Все поля обязательны для заполнения' },
            { status: 400 }
        );
        }

        // Подключаемся к MySQL
        const mysql = await import('mysql2/promise');
        
        console.log('🔄 Попытка SSL подключения к TimeWeb MySQL...');
        
        // Путь к SSL сертификату
        const sslCertPath = path.join(process.cwd(), 'certs', 'root.crt');
        
        console.log('📁 Путь к сертификату:', sslCertPath);
        console.log('✅ Сертификат существует:', fs.existsSync(sslCertPath));

        // Настройки подключения для TimeWeb Cloud
        const connectionConfig = {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT) || 3306, // Явно преобразуем в число
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            connectTimeout: 15000,
            acquireTimeout: 15000,
            timeout: 15000,
            // SSL настройки для TimeWeb
            ssl: {
                ca: fs.readFileSync(sslCertPath),
                rejectUnauthorized: true
            }
        };

        console.log('🔐 Конфигурация подключения:');
        console.log('- Хост:', connectionConfig.host);
        console.log('- Порт:', connectionConfig.port);
        console.log('- Пользователь:', connectionConfig.user);
        console.log('- База данных:', connectionConfig.database);

        console.log('🔐 Настройки SSL подключения готовы');
        
        // Пробуем подключиться
        connection = await mysql.createConnection(connectionConfig);
        
        console.log('✅ SSL подключение к TimeWeb MySQL установлено');

        // Автоматически создаем таблицу если её нет
        await createTableIfNotExists(connection);

        // Вставляем данные в таблицу
        const [result] = await connection.execute(
            'INSERT INTO registrations (fio, email, region) VALUES (?, ?, ?)',
            [fio, email, region]
        );

        console.log('✅ Данные успешно сохранены в TimeWeb MySQL, ID:', result.insertId);

        return NextResponse.json(
            { 
                message: 'Данные успешно сохранены в базу данных!',
                id: result.insertId 
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('❌ Ошибка при сохранении в TimeWeb MySQL:');
        console.error('Полная ошибка:', error);
        console.error('Код ошибки:', error.code);
        console.error('Сообщение ошибки:', error.message);
        console.error('Стек вызовов:', error.stack);
        
        return NextResponse.json(
            { 
                message: 'Ошибка подключения к базе данных',
                details: process.env.NODE_ENV === 'development' ? `ECONNREFUSED - проверьте хост и порт. Хост: ${process.env.DB_HOST}, Порт: ${process.env.DB_PORT}` : 'Внутренняя ошибка сервера'
            },
            { status: 500 }
        );

    } finally {
        // Закрываем соединение
        if (connection) {
            try {
                await connection.end();
                console.log('🔌 Соединение с MySQL закрыто');
            } catch (closeError) {
                console.error('Ошибка при закрытии соединения:', closeError);
            }
        }
    }
}

// Функция для создания таблицы если её нет
async function createTableIfNotExists(connection) {
    try {
        // Проверяем существование таблицы
        const [tables] = await connection.execute(
            `SELECT TABLE_NAME 
            FROM information_schema.TABLES 
            WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?`,
            [process.env.DB_NAME, 'registrations']
        );

        if (tables.length === 0) {
            console.log('🆕 Таблица "registrations" не найдена, создаем...');
            
            // Создаем таблицу
            await connection.execute(`
                CREATE TABLE registrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                fio VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                region VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);

            console.log('✅ Таблица "registrations" успешно создана');
        } else {
            console.log('✅ Таблица "registrations" уже существует');
        }

    } catch (error) {
        console.error('❌ Ошибка при создании таблицы:', error);
        throw error;
    }
}