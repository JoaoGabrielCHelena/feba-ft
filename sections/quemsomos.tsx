import utils from "@/styles/utils.module.css"

export default function QuemSomos() {
    return (
        <>
            <section className={`${utils.standardisedGrid} ${utils.mtL4ML} ${utils.mtL4M} ${utils.mtL2}`}>
                <img className={`${utils.span5ML} ${utils.span4M} ${utils.noneS} ${utils.width100}`} src="/images/quemsomos.png" height="auto" width="auto" alt="" />
                <div className={`${utils.gridStart7ML} ${utils.span6ML} ${utils.gridStart5M} ${utils.span6M} ${utils.spanRowS} ${utils.mt2}`}>
                    <h2 className={`${utils.normalFW} ${utils.colorDB} ${utils.sz48ML} ${utils.sz32M} ${utils.sz28S}`}>
                        Construimos confiança e
                        <span className={`${utils.demicboldFW} ${utils.colorG1}`}> realizamos sonhos</span>
                    </h2>
                    <p className={`${utils.thinFW} ${utils.colorGray1} ${utils.sz18ML} ${utils.sz16M} ${utils.sz14S} ${utils.mt3} ${utils.paragraphLH}`}>
                        Na Liva, cada projeto é planejado para facilitar a vida dos moradores, trazendo uma sensação máxima de bem-estar.
                         Espaços que abrigam histórias de vida e que são desenvolvidos para que você viva momentos incríveis ao lado da sua família.</p>
                    <a href="#" className={`${utils.borderB} ${utils.colorB} ${utils.bdrs} ${utils.sz16ML} ${utils.sz16M} ${utils.sz14S} 
                    ${utils.textUppercase} ${utils.hoverBgB} ${utils.btnPadding} ${utils.dIN} ${utils.mt6} ${utils.hoverColorW}`}>
                    Saiba Mais</a>
                </div>
            </section>
        </>
    )
} 