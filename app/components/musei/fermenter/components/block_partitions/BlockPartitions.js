"use client";

import { useState, useEffect } from 'react';

import './block_partitions.css';

export default function BlockPartitions({ isHidden, onPartitionSelect }) {
    const [selectedPartition, setSelectedPartition] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handlePartitionClick = (partitionKey) => {
        setSelectedPartition(partitionKey);
        setShowDetails(true);
        
        // Передаем выбранный раздел в родительский компонент
        if (onPartitionSelect) {
            onPartitionSelect(partitionKey);
        }
    };

    const handleBackButton = () => {
        if (showDetails) {
            setShowDetails(false);
            setSelectedPartition(null);
        }
    };

    return (
        <div className={`block_partitions ${isHidden ? '_hidden' : ''}`}>
            {/* Блок выбора раздела */}
            <div className={`block_selection_partitions ${showDetails ? '_hidden' : ''}`}>
                <div className="partition" onClick={() => handlePartitionClick('bioengineering')}>
                    <h4>Биоинженерия</h4>
                    <p>7 живых систем</p>
                </div>

                <div className="partition" onClick={() => handlePartitionClick('industrial_goods')}>
                    <h4>Промтовары</h4>
                    <p>7 живых систем</p>
                </div>

                <div className="partition" onClick={() => handlePartitionClick('food')}>
                    <h4>Продовольствие</h4>
                    <p>4 живых систем</p>
                </div>

                <div className="partition" onClick={() => handlePartitionClick('science')}>
                    <h4>Наука</h4>
                    <p>3 живых систем</p>
                </div>

                <div className="partition"></div>
            </div>
        </div>
    );
};