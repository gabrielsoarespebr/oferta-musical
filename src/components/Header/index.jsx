import style from './style.module.css'
import { FaSearch } from 'react-icons/fa'


export function Header() {
    return (
        <header className={`${style.header} d-flex justify-content-around align-items-center`}>
            <img className={style.logo} src="src/assets/logo/ofertamusicalLOGO.png" alt="Logotipo" />

            <div className="input-group w-50">
                <input type="text" className="form-control" placeholder="Pesquise por um instrumento (Ex: Guitarra Les Paul)" aria-label="Barra de pesquisa de instrumento" />
                <div className={`${style.searchBtn} input-group-append rounded`}>
                    <button className="btn text-white" type="button"><FaSearch /></button>
                </div>
            </div>
        </header>
    )
}