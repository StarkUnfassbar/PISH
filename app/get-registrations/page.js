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
        await downloadExcel(data);
        
        } catch (error) {
        console.error('❌ Ошибка:', error.message);
        alert('Ошибка при получении данных: ' + error.message);
        }
    }

    function downloadExcel(data) {
        if (data.length === 0) {
            alert('📭 В таблице нет данных для экспорта');
            return;
        }

        // Создаем CSV содержимое (простой формат, который открывается в Excel)
        let csvContent = 'ID;ФИО;Email;Регион;Дата регистрации\n';
        
        data.forEach(item => {
        const row = [
            item.id,
            `"${item.fio}"`, // Оборачиваем в кавычки на случай если есть запятые
            `"${item.email}"`,
            `"${item.region}"`,
            `"${new Date(item.created_at).toLocaleString('ru-RU')}"`
        ].join(';');
        
        csvContent += row + '\n';
        });

        // Создаем Blob и ссылку для скачивания
        const blob = new Blob(['\uFEFF' + csvContent], { 
            type: 'text/csv;charset=utf-8;' 
        });
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        
        link.href = url;
        link.setAttribute('download', `registrations_${timestamp}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        console.log(`📊 Скачан файл с ${data.length} записями`);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
            <h1>🔒 Страница скачивания данных регистраций</h1>
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
                📊 Скачать данные в Excel
            </button>
            
            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                <p style={{ margin: 0, color: '#374151' }}>
                💡 <strong>Инструкция:</strong> Нажмите кнопку чтобы скачать все данные регистраций в формате Excel (CSV)
                </p>
                <ul style={{ margin: '10px 0 0 20px', color: '#374151' }}>
                    <li>Файл будет скачан в формате CSV</li>
                    <li>CSV файлы открываются в Excel, Google Sheets и других табличных редакторах</li>
                    <li>Файл содержит все поля: ID, ФИО, Email, Регион, Дата регистрации</li>
                </ul>
            </div>
        </div>
    );
}