import React from "react";
import '../utils/style.css';

function SortFilterSidebar(props){
    const { applyFilter, applySortKey } = props;
    return(
        <div className="">
            <div className="sidebar border border-dark">
                <h2>Aplicati filtre:</h2>
                <div className="d-flex flex-column">
                    <div>
                        <input defaultChecked name="filter" id="no-filter" type="radio" value="true" onChange={(event) => applyFilter(event)}/>
                        <label htmlFor="no-filter">Niciun filtru</label>
                    </div>
                    <div>
                        <input name="filter" id="sub-2500" type="radio" value="user.salariu < 2500" onChange={(event) => applyFilter(event)}/>
                        <label htmlFor="sub-2500">Salariu sub 2500</label>
                    </div>
                    <div>
                        <input name="filter" id="2500-4000" type="radio" value="user.salariu >= 2500 && user.salariu <= 4000" onChange={(event) => applyFilter(event)}/>
                        <label htmlFor="2500-4000">Salariu intre 2500 si 4000</label>
                    </div>
                    <div>
                        <input name="filter" id="peste-4000" type="radio" value="user.salariu > 4000" onChange={(event) => applyFilter(event)}/>
                        <label htmlFor="peste-4000">Salariu peste 4000</label>
                    </div>
                </div>
                <h2>Sortati dupa:</h2>
                <div className="d-flex flex-column">
                    <div>
                        <input defaultChecked name="sortkey" id="id" type="radio" value="id" onChange={(event) => applySortKey(event)}/>
                        <label htmlFor="id">id</label>
                    </div>
                    <div>
                        <input name="sortkey" id="nume" type="radio" value="nume" onChange={(event) => applySortKey(event)}/>
                        <label htmlFor="nume">nume</label>
                    </div>
                    <div>
                        <input name="sortkey" id="prenume" type="radio" value="prenume" onChange={(event) => applySortKey(event)}/>
                        <label htmlFor="prenume">prenume</label>
                    </div>
                    <div>
                        <input name="sortkey" id="meserie" type="radio" value="meserie" onChange={(event) => applySortKey(event)}/>
                        <label htmlFor="meserie">meserie</label>
                    </div>
                    <div>
                        <input name="sortkey" id="salariu" type="radio" value="salariu" onChange={(event) => applySortKey(event)}/>
                        <label htmlFor="salariu">salariu</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortFilterSidebar;