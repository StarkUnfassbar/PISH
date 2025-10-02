"use client";

import { useState, useEffect } from 'react';

import './block_partitions.css'

export default function BlockPartitions({ isHidden }) {
    return (
        <div className={`block_partitions ${isHidden ? '_hidden' : ''}`}>
            <div className="partition">
                <h4>Биоинженерия</h4>
                <p>7 живых систем</p>
            </div>

            <div className="partition">
                <h4>Промтовары</h4>
                <p>7 живых систем</p>
            </div>

            <div className="partition">
                <h4>Продовольствие</h4>
                <p>4 живых систем</p>
            </div>

            <div className="partition">
                <h4>Наука</h4>
                <p>3 живых систем</p>
            </div>

            <div className="partition"></div>
        </div>
    );
};