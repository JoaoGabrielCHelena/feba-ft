import MainPageForm from "@/components/form"
import utils from "@/styles/utils.module.css"

export default function Contatenos() {
    return (
        <section className={`${utils.standardisedGrid} ${utils.bgDB} ${utils.ptL2} ${utils.pbL2} ${utils.mtL4}`}>
            <div className={`${utils.span5ML} ${utils.mt6} ${utils.span4M} ${utils.spanRowS} ${utils.mt6}`} >
                <h2 className={`${utils.demiboldFW} ${utils.colorW} ${utils.sz36ML} ${utils.sz24M}`}>Fale agora com um consultor de vendas</h2>
                <p className={`${utils.sz18} ${utils.mt3} ${utils.colorW} ${utils.thinFW}`}>tire suas duvídas e conheça de perto o seu <span className={utils.demiboldFW}>novo jeito de morar.</span></p>
                <div className={utils.mt5}>
                    <p className={`${utils.lightFW} ${utils.colorW} ${utils.sz12}`} >Consultores online</p>
                    <img src="/images/consultor1.png" alt="foto de nome 1" />
                    <img src="/images/consultor2.png" alt="foto de nome 2" />
                    <img src="/images/consultor3.png" alt="foto de nome 3" />
                </div>
            </div>
            <MainPageForm />   
        </section>
    )
}