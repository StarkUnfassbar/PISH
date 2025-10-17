'use client';

import { useEffect } from 'react';

export default function GetRegistrationsPage() {
    // Динамически устанавливаем title страницы
    useEffect(() => {
        document.title = 'Private Data';
        
        // Добавляем meta тег для запрета индексации
        const metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        metaRobots.content = 'noindex, nofollow, noarchive';
        document.head.appendChild(metaRobots);

        // Очистка при размонтировании
        return () => {
        document.head.removeChild(metaRobots);
        };
    }, []);

    async function handleGetData() {
        try {
        console.log('🔄 Запрос данных из MySQL...');
        
        const response = await fetch('/api/get-data');
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Ошибка при получении данных');
        }
        
        const data = await response.json();
        console.log('✅ Данные успешно получены из MySQL');
        
        // Создаем Excel файл и скачиваем
        downloadExcel(data);
        
        } catch (error) {
        console.error('❌ Ошибка:', error.message);
        alert('Ошибка при получении данных: ' + error.message);
        }
    }

    function downloadExcel(data) {
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        
        // Проверяем, есть ли данные для экспорта
        const hasRegistrations = data.registrations && data.registrations.length > 0;
        const hasVisits = data.visits && data.visits.length > 0;
        
        if (!hasRegistrations && !hasVisits) {
            alert('📭 В базе данных нет данных для экспорта');
            return;
        }

        // Создаем CSV содержимое с двумя таблицами
        let csvContent = '';

        // Заголовок для таблицы регистраций
        csvContent += 'РЕГИСТРАЦИИ;;;;;\n';
        csvContent += 'ID;ФИО;Email;Регион;Дата регистрации;\n';
        
        // Данные регистраций
        if (hasRegistrations) {
            data.registrations.forEach(item => {
                const row = [
                    item.id,
                    `"${item.fio}"`,
                    `"${item.email}"`,
                    `"${item.region}"`,
                    `"${new Date(item.created_at).toLocaleString('ru-RU')}"`,
                    '' // Пустая ячейка для выравнивания
                ].join(';');
                csvContent += row + '\n';
            });
        }

        // Пустые строки для разделения таблиц
        csvContent += ';\n;\n';

        // Статистика посещений по типам страниц
        csvContent += ';;СТАТИСТИКА ПОСЕЩЕНИЙ;;\n';
        csvContent += ';;Тип страницы;Количество посещений;\n';
        
        // Подсчитываем статистику
        const museumCount = data.visits ? data.visits.filter(v => v.page_type === 'museum').length : 0;
        const videoLessonsCount = data.visits ? data.visits.filter(v => v.page_type === 'video_lessons').length : 0;
        
        // Данные статистики (с отступом в 2 ячейки)
        csvContent += `;;"Страница музея";${museumCount};\n`;
        csvContent += `;;"Страница видеоуроков";${videoLessonsCount};\n`;

        // Пустые строки для разделения таблиц
        csvContent += ';\n;\n';

        // Детальная таблица посещений (с отступом в 2 ячейки)
        csvContent += ';;ДЕТАЛЬНЫЕ ДАННЫЕ ПОСЕЩЕНИЙ;;\n';
        csvContent += ';;ID;Тип страницы;Дата посещения;\n';
        
        // Данные посещений (с отступом в 2 ячейки)
        if (hasVisits) {
            data.visits.forEach(item => {
                // Преобразуем тип страницы на русский
                let pageTypeRussian = '';
                if (item.page_type === 'museum') {
                    pageTypeRussian = 'Страница музея';
                } else if (item.page_type === 'video_lessons') {
                    pageTypeRussian = 'Страница видеоуроков';
                } else {
                    pageTypeRussian = item.page_type; // Оставляем как есть, если неизвестный тип
                }
                
                const row = [
                    '', // Пустая ячейка для отступа
                    '', // Пустая ячейка для отступа
                    item.id,
                    `"${pageTypeRussian}"`,
                    `"${new Date(item.created_at).toLocaleString('ru-RU')}"`,
                    '' // Пустая ячейка для выравнивания
                ].join(';');
                csvContent += row + '\n';
            });
        }

        // Создаем Blob и ссылку для скачивания
        const blob = new Blob(['\uFEFF' + csvContent], { 
            type: 'text/csv;charset=utf-8;' 
        });
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        link.href = url;
        link.setAttribute('download', `museum_data_${timestamp}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        console.log(`📊 Скачан файл с ${hasRegistrations ? data.registrations.length : 0} регистрациями и ${hasVisits ? data.visits.length : 0} посещениями`);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1>🔒 Страница скачивания данных</h1>
            <p style={{ color: '#666' }}>Эта страница не отображается в поисковиках</p>
            
            <button 
                onClick={handleGetData}
                style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '20px',
                fontWeight: 'bold'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
            >
                📊 Скачать все данные в Excel
            </button>
            
            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                <p style={{ margin: 0, color: '#374151' }}>
                💡 <strong>Информация:</strong> Будет скачан один файл с тремя таблицами
                </p>
                <ul style={{ margin: '10px 0 0 20px', color: '#374151' }}>
                    <li><strong>museum_data_дата.csv</strong> - единый файл с данными</li>
                    <li>Слева - таблица регистраций (ФИО, Email, Регион)</li>
                    <li>Справа - статистика посещений по типам страниц</li>
                    <li>Справа - детальная таблица всех посещений</li>
                    <li>Файл открывается в Excel, Google Sheets и других табличных редакторах</li>
                </ul>
            </div>
        </div>
    );
}