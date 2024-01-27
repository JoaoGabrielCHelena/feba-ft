'use client'

import styles from "@/styles/carousel.module.css"
import { useEffect, useState } from "react"
import utils from "@/styles/utils.module.css"

const carouselItems = [
    {
        "id": 1,
        "url": "/images/banner1.png"
    },
    {
        "id": 2,
        "url": "/images/banner2.png"
    },
    {
        "id": 3,
        "url": "/images/banner3.png"
    }
]


function change(input:number) {
    var ids:number[] = [] // plural of id btw
    // gets all ids
    carouselItems.forEach(element => {
        ids.push(element.id)
    });

    // romoves the id of the current item (the one that will be swapped to)
    ids = ids.filter(number => number != input)

    // make the current item visible
    const currentItem = document.getElementById(`${input}`) as HTMLElement
    currentItem.style.opacity = "1"
    
    // make all others transparent
    ids.forEach(element => {
        document.getElementById(`${element}`)!.style.opacity = "0"
    });
}


export default function Banner() {
    function changeHandler(input:number, ) {
        let newValue = currentImage + input == 0 ? 3 : currentImage + input == 4 ? 1 : currentImage + input
        setcurrentImage(newValue)
        change(newValue)
    }

    const [currentImage, setcurrentImage] = useState(0)

    useEffect(() => {
        changeHandler(1)
    }, [])

    return (
        <>
        <section className={`${styles.section} ${utils.relative}`}>
            {/* houses everything over the images */}
            <div className={`${utils.standardisedGrid} ${styles.controlTextWrapper}`}>
                <button className={`${styles.BtnR}`} onClick={() => {changeHandler(-1)}}>
                    <img src="./icons/arrowR.svg" alt="" />
                </button>
                <button className={`${styles.BtnL}`} onClick={() => {changeHandler(1)}}>
                    <img src="./icons/arrowR.svg" alt="" />
                </button>
                <div className={`${utils.span5ML} ${utils.gridStart2ML} ${utils.span5M} ${utils.gridStart2M} ${utils.spanRowS} ${utils.colorW}`}>
                    <p className={`${utils.sz14ML} ${utils.sz14M} ${utils.sz12S}`}>Pré lançamento</p>
                    <p className={`${utils.sz80ML} ${utils.sz42M} ${utils.sz32S} ${utils.boldFW}`}>
                    Barra View
                    <span 
                    className={`${utils.dB} ${utils.maxContent} ${utils.bdrs} ${utils.btnHalfPadding} ${utils.bgG3}
                    ${utils.normalFW} ${utils.colorDB} ${utils.sz18ML} ${utils.sz18M} ${utils.sz12S}`}>
                    Apartamento com 3 dormitórios sendo 1 suite</span>
                    </p>
                    <a href="#"
                    className={`${utils.borderW} ${utils.colorW} ${utils.bdrs} ${utils.sz16ML} ${utils.textUppercase}
                    ${utils.hoverBgW} ${utils.btnPadding} ${utils.dIN} ${utils.mt6} ${utils.hoverColorB} ${utils.sz16ML} ${utils.sz16M} ${utils.sz14S}`}>
                    Saiba Mais</a> {/* this should probably be a <Link /> */}
                </div>
            </div>

            {/* houses the images */}
            <div className={styles.imageWrapper}>
                {/* would've prefered to use <Image /> but it was being dumb and saying "Unable to optimize image and unable to fallback to upstream image" */}
                <>
                    {carouselItems.map((value:{id:number, url:string}) => <img id={`${value.id}`} key={value.id} src={value.url} alt="" />)}
                </>
                
            </div>
        </section>
        </>
    )    
}


