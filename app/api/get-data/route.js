import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';



export async function GET() {
    let connection;
    
    try {
        console.log('🔍 Подключение к TimeWeb MySQL для получения данных...');
        
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
            port: parseInt(process.env.DB_PORT) || 3306,
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

        // Проверяем существование таблицы
        const [tables] = await connection.execute(
            `SELECT TABLE_NAME 
            FROM information_schema.TABLES 
            WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?`,
            [process.env.DB_NAME, 'registrations']
        );

        if (tables.length === 0) {
        console.log('❌ Таблица "registrations" не найдена');
        return NextResponse.json(
            { 
                error: 'Таблица registrations не найдена',
                data: []
            },
            { status: 404 }
        );
        }

        console.log('✅ Таблица "registrations" существует, получаем данные...');

        // Получаем все данные из таблицы в хронологическом порядке (старые сверху)
        const [rows] = await connection.execute(
            'SELECT * FROM registrations ORDER BY created_at ASC'
        );

        console.log(`✅ Успешно получено ${rows.length} записей из MySQL`);

        return NextResponse.json(rows);

    } catch (error) {
        console.error('❌ Ошибка при получении данных из TimeWeb MySQL:');
        console.error('Полная ошибка:', error);
        console.error('Код ошибки:', error.code);
        console.error('Сообщение ошибки:', error.message);
        
        return NextResponse.json(
            { 
                error: 'Ошибка подключения к базе данных',
                details: process.env.NODE_ENV === 'development' ? error.message : 'Внутренняя ошибка сервера',
                data: []
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