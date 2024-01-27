'use client'

import Link from "next/link"
import utils from "@/styles/utils.module.css"
import { navLinks } from "./header"
import "@/styles/footer.css"
import { SocialCircles, WhatsappButton } from "./buttons"
// ^ the links and funcare an object in the header.tsx
// V although it is the same function as the one in header.tsx, these will have different stylings
function generateLinks(input:linkList) {
    return input.map((value:{name:string, path:string}) => <Link className={`${utils.sz12} ${utils.mt2} ${utils.colorW}`} href={value.path}>{value.name}</Link>)
}
type linkList = {name:string, path:string}[]

export default function Footer(){
    return (
        <footer className={`${utils.mtL6ML} ${utils.mtL6M} ${utils.mtL2S} ${utils.bgB} ${utils.ptL3} ${utils.colorW}`}>
            <div className={utils.standardisedGrid}>
                <div className={`${utils.span3ML} ${utils.span2M} ${utils.span3S}`}>
                    <img src="/images/livaGrayscale.png" height={50} width="auto" alt="liva" />
                    <p className={utils.sz12}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    {/* yes, i am pedantic enough to copy the lorem ipsum */}
                </div>
                <nav className={`${utils.span2ML} ${utils.gridStart5ML} ${utils.flexColumnML} ${utils.span2M} ${utils.gridStart3M}
                ${utils.flexColumnM} ${utils.flexColumnS} ${utils.textUppercase} ${utils.span3S}`}>
                    <p className={`${utils.span3ML} ${utils.sz14} ${utils.demiboldFW} ${utils.colorG1}`}>Navegue no site</p>
                    <>
                        {generateLinks(navLinks)}
                    </>
                </nav>
                <div className={`${utils.sz12} ${utils.mtL3ML} ${utils.mtL3M} ${utils.mt5S} ${utils.span2ML} ${utils.gridStart8ML} ${utils.span1M} 
                ${utils.gridStart6M} ${utils.span3S} ${utils.fillW}`}>
                    <p>acompanhe nas redes</p>
                    <div className={`${utils.mt3ML} ${utils.mt3M} ${utils.mt1S}`}>
                        <SocialCircles />                        
                    </div>
                </div>
                <div className={`contactInfo ${utils.flexColumn} ${utils.span3ML} ${utils.gridStart10ML} ${utils.span3M} 
                ${utils.gridStart7M} ${utils.span3S} ${utils.sz12} ${utils.mt5S}`}>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    <p className={`${utils.mt2} ${utils.demiboldFW}`}>(11) 9909-9091</p>
                    <a className={`${utils.colorW} ${utils.mt1}`} href="mailto:contato@liva.com.br">contato@liva.com.br</a>
                    <WhatsappButton/>
                </div>
            </div>
            <div className={`febaRow ${utils.mt3}`}>
                <div className={`${utils.flexRowML} ${utils.flexRowM} ${utils.flexColumnS}`}>
                    <p>Liva © 2022 Todos os direitos reservados.</p>
                    <img src="/icons/logoFeba.svg" alt="Feba Capital" />
                </div>
            </div>
        </footer>
    )
}