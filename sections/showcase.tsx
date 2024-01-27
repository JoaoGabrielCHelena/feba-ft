import { FilterButton, FilterDropdown } from "@/components/buttons"
import Image from "next/image"
import utils from "@/styles/utils.module.css"
import "@/styles/showcase.css"

export default function Showcase() {
    // why did i make it like this? because its easier to change later
    // should i have done it like this in project? prolly not

    const majorCard = {
        "src": "/images/horizonteResidence.png",
        "name": "Horizonte Residence",
        "cidade": "Barra Velha",
        "bairro": "Tabuleiro",
        "dorms": "Apartamento com 3 dormitórios sendo 1 suite",
        "segurança": "Condomínio Fechado"
    }

    const normalCards = [
        {"name": "One Tower", "src":"/images/oneTower.png"},
        {"name": "Infinity Coast", "src":"/images/infinityCoast.png"},
        {"name": "Skyline Tower", "src":"/images/skylineTower.png"},
        {"name": "Grand Place Tower", "src":"/images/grandPlaceTower.png"},
        {"name": "Imperium Tower", "src":"/images/imperiumTower.png"},
        {"name": "Titanium Tower", "src":"/images/titaniumTower.png"},
        {"name": "Blue Cost Tower", "src":"/images/blueCostTower.png"},
        {"name": "Grand Place Tower", "src":"/images/grandPlaceTower2.png"},
    ]

    return (
        <>
            <section className={`${utils.standardisedGrid} ${utils.mtL4ML} ${utils.mtL4M} ${utils.mtL2S}`}>
               <div className={`${utils.spanRow} filterRow`}>    
                    <h2 className={`${utils.sz48ML} ${utils.sz36M} ${utils.normalFW} ${utils.rowSpan2S}`}>
                        Confira todos os 
                        <span className={`${utils.colorG1} ${utils.demiboldFW} ${utils.dB}`}> empreendimentos da Liva</span>
                    </h2>
                    <FilterButton />
                    <FilterDropdown />
                </div>
                <div className={`${utils.gridRows3ML} ${utils.gridRows2M} ${utils.gridRows4S} ${utils.spanRow} showcaseGrid`}>
                    <a href="#" className={`majorCard ${utils.span6ML} ${utils.span6M} ${utils.rowSpan2ML} ${utils.rowSpan2M} ${utils.spanRowS} ${utils.mtL1S}`}>
                        <Image src={majorCard.src} height={450} width={450} alt="" />
                        <p className={`alwaysVisible ${utils.sz18ML} ${utils.sz18M} ${utils.sz16S}`}>
                            <span className={`${utils.sz12}`}>Pré Lançamento</span>
                            {majorCard.name}
                        </p>
                        <div className="row">
                            <p>
                                <span>Cidade</span>
                                {majorCard.cidade}
                            </p>
                            <p>
                                <span>Bairro</span>
                                {majorCard.bairro}
                            </p>
                        </div>
                        <p className="dorm">{majorCard.dorms}</p>
                        <p className="sec">{majorCard.segurança}</p>
                    </a>
                    {/* ^ generates the super special card || Note: once div is set, swap fill to true*/}
                    {/* V generates the normal cards  */}
                    {
                        normalCards.map((value) => (
                            <a href="#" className={`normalCard ${utils.sz14ML} ${utils.sz14M} ${utils.sz16S} ${utils.absoluteSpan3ML} ${utils.absoluteSpan2M}
                            ${utils.spanRowS} ${utils.mtL1S}`}>
                                <Image src={value.src} width={450} height={450} alt="" />
                                <p>{value.name}</p>
                            </a>                        
                        ))
                    }
                    {/* ^ it don ✨werk✨ */}
                </div>
                <button className={`${utils.spanRow} load`}>Carregar Mais</button>
            </section>
        </>                
    )
}