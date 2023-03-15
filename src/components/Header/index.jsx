import style from './style.module.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
import logo from '../../assets/logo/ofertamusicalLOGO.png';

export function Header({ setSearchValue }) {

    const [inputValue, setInputValue] = useState('');

    const inputOnChange = e => setInputValue(e.target.value);

    const handleInput = input => {
        setSearchValue(input);
    }

    const handleKeyDown = key => {
        if (key.key === 'Enter') handleInput(inputValue)
    }

    return (
        <header className={`${style.header} d-flex justify-content-around align-items-center`}>
            <img className={`${style.logo} cursor-pointer`} src={logo} alt="Logotipo" onClick={()=>history.go(0)} />

            <div className="input-group w-50">
                <input type="text" className="form-control" placeholder="Pesquise por um instrumento (Ex: Guitarra Les Paul)" aria-label="Barra de pesquisa de instrumento" value={inputValue} onChange={inputOnChange} onKeyDown={handleKeyDown} />
                <div className={`${style.searchBtn} input-group-append rounded`}>
                    <button className="btn text-white" type="button" onClick={() => handleInput(inputValue)}><FaSearch /></button>
                </div>
            </div>
        </header>
    )
}