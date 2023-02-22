import style from './style.module.css'
import { category } from '../../services/categoryIcon'

export function FilterAside({ handleCategoryClick }) {

    return (
        <aside className={`${style.searchSidebar} fw-semibold p-2`}>
            <dl>
                <dt className=''>Categorias</dt>
                {
                    Object
                        .entries(category)
                        .map((keyValueArray, reactKey) => {
                            return (<dd key={reactKey} className='m-0' title={keyValueArray[0]} onClick={handleCategoryClick}>
                                <img className='col-1 me-1' src={`https://img.icons8.com/fluency-systems-filled/48/${keyValueArray[1]}`} alt={keyValueArray[0]} />

                                {/* Capitalize category name */}
                                {keyValueArray[0][0].toUpperCase() + keyValueArray[0].slice(1)}
                            </dd>)
                        })
                }
            </dl>
        </aside >
    )
}