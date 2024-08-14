import React from 'react';
import './/config.css'

const ConfigPage = () => {
    return (
        <div className={'config-container'}>
            <h1>Configurações</h1>
            <div className={'button-container'}>
                <a href="https://www.tudocelular.com/Apple/fichas-tecnicas/n6509/Apple-iPhone-12.html" target="_blank" rel="noopener noreferrer">
                    <button className={'button'}>Iphone 12</button>
                </a>
                <a href="https://www.tudocelular.com/Samsung/fichas-tecnicas/n8442/Samsung-Galaxy-S23.html" target="_blank" rel="noopener noreferrer">
                    <button className={'button'}>Samsung S23</button>
                </a>
                <a href="https://www.tudocelular.com/Apple/fichas-tecnicas/n8132/Apple-iPhone-14.html" target="_blank" rel="noopener noreferrer">
                    <button className={'button'}>Iphone 14</button>
                </a>
                <a href="https://www.tudocelular.com/Samsung/fichas-tecnicas/n7452/Samsung-Galaxy-S22.html" target="_blank" rel="noopener noreferrer">
                    <button className={'button'}>Samsung S22</button>
                </a>
            </div>
        </div>
    );
};

export default ConfigPage;