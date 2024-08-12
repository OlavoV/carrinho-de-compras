import React from 'react';
import { useRouter } from 'next/router'; // Importar useRouter para navegação
import './/config.css'

const ConfigPage = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path); // Navega para a página especificada
    };

    return (
        <div className='config-container'>
            <h1>Configurações</h1>
            <div className='button-container'>
                <button onClick={() => handleNavigation('https://www.tudocelular.com/Apple/fichas-tecnicas/n8132/Apple-iPhone-12.html')}>Iphone 12</button>
                <button onClick={() => handleNavigation('https://www.tudocelular.com/Samsung/fichas-tecnicas/n8442/Samsung-Galaxy-S23.html')}>Samsung S23</button>
                <button onClick={() => handleNavigation('https://www.tudocelular.com/Apple/fichas-tecnicas/n8132/Apple-iPhone-14.html')}>Iphone 14</button>
                <button onClick={() => handleNavigation('https://www.tudocelular.com/Samsung/fichas-tecnicas/n7452/Samsung-Galaxy-S22.html')}>Samsung S22</button>
            </div>
        </div>
    );
};

export default ConfigPage;