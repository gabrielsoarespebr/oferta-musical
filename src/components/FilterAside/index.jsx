import style from './style.module.css'
import { category } from '../../services/categoryIcon'
import { useState } from 'react'

export function FilterAside({ categorySelected, handleCategoryClick, priceMin, priceMax, setPriceMin, setPriceMax, stateAbbreviaton, setStateAbbreviaton }) {

    // Handle local price interval
    const PRICE_MIN_DEFAULT = 0;
    const PRICE_MAX_DEFAULT = 30000;

    const [localPriceMin, setLocalPriceMin] = useState(PRICE_MIN_DEFAULT);
    const [localPriceMax, setLocalPriceMax] = useState(PRICE_MAX_DEFAULT);

    const priceOnChange = priceInput => {
        if (priceInput.target.id === "priceMin") setLocalPriceMin(priceInput.target.value)
        if (priceInput.target.id === "priceMax") setLocalPriceMax(priceInput.target.value)
    }

    const handlePriceClick = () => {
        setPriceMin(localPriceMin);
        setPriceMax(localPriceMax);
    }

    const resetPrice = () => {
        setPriceMin(PRICE_MIN_DEFAULT);
        setPriceMax(PRICE_MAX_DEFAULT);
    }

    // Handle states abbreviation filter
    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    const handleStateFlagClick = stateFlag => {
        setStateAbbreviaton(stateFlag.target.title);
        console.log(stateFlag)
    }

    return (
        <aside className={`${style.searchSidebar} fw-semibold p-3 d-flex flex-column gap-4 mb-auto`}>
            <div>
                <p className={`${style.filterTitle} text-green-light fw-bold m-0`}>Filtros aplicados</p>
                <div className='d-flex'>
                    <button className={`${style.resetFilterBtn} btn col-6`} onClick={resetPrice}>R${priceMin} - R${priceMax}</button>

                    <button className={`${style.resetFilterBtn} btn col-3`} onClick={handleCategoryClick}>
                        {
                            (categorySelected === "") ? "Categoria (Todas)" : (<img className='col-8' src={`https://img.icons8.com/fluency-systems-filled/48/${category[categorySelected]}`} alt={category} />)
                        }
                    </button>

                    <button className={`${style.resetFilterBtn} btn col-3`} onClick={handleStateFlagClick}>
                        {(stateAbbreviaton === "") ? "Estado (Todos)" : (<img className='shadow-sm' src={`https://github.com/bgeneto/bandeiras-br/blob/master/imagens/${stateAbbreviaton}.png?raw=true`} alt="State flag" />)}
                    </button>
                </div>
            </div>

            <section>
                <p className={`${style.filterTitle} fw-bold m-0`}>Preço</p>
                <div className="input-group">
                    <input id="priceMin" type="number" className="form-control" placeholder="Mínimo" aria-label="Barra de preço mínimo" min={0} max={30000} value={localPriceMin} onChange={priceOnChange} />
                    <input id="priceMax" type="number" className="form-control" placeholder="Máximo" aria-label="Barra de preço máximo" min={0} max={30000} value={localPriceMax} onChange={priceOnChange} />

                    <div className={`${style.okBtn} input-group-append rounded`}>
                        <button className="btn text-white fw-semibold" type="button" onClick={handlePriceClick}>OK</button>
                    </div>
                </div>
            </section>

            <dl className='m-0'>
                <dt className={style.filterTitle}>Categoria</dt>
                {
                    Object
                        .entries(category)
                        .map((keyValueArray, reactKey) => {
                            return (<dd key={reactKey} className='m-0 cursor-pointer' title={keyValueArray[0]} onClick={handleCategoryClick}>
                                <img className='col-1 me-1' src={`https://img.icons8.com/fluency-systems-filled/48/${keyValueArray[1]}`} alt={keyValueArray[0]} />

                                {/* Capitalize category name */}
                                {keyValueArray[0][0].toUpperCase() + keyValueArray[0].slice(1)}
                            </dd>)
                        })
                }
            </dl>

            <section>
                <p className={`${style.filterTitle} fw-bold m-0`}>Estados</p>
                <dl className='d-flex flex-wrap gap-2'>
                    {states.map(state => {
                        return <dd key={state} className='col-2'>
                            <img title={state} className='shadow-sm cursor-pointer' onClick={handleStateFlagClick} src={`https://github.com/bgeneto/bandeiras-br/blob/master/imagens/${state}.png?raw=true`} alt="State flag" />
                        </dd>
                    })}
                </dl>
            </section>
        </aside >
    )
}