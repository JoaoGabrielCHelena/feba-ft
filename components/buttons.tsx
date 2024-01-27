'use client'

import { useState } from "react"
import utils from "@/styles/utils.module.css"


export function WhatsappButton() {
    return (
        <a className={`whatsapp ${utils.p2} ${utils.sz12} ${utils.colorW} ${utils.fillW} ${utils.bgG1} ${utils.textUppercase} 
        ${utils.bdrs} ${utils.hoverBgG2}`} href="#">
            <svg style={{translate: "0px 1px", scale: "150%", marginRight: "6px"}} width="12" height="12" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <use href="./icons/whatsappIcon.svg#icon" ></use>    
            </svg>    
            Whatsapp
        </a>
    ) 
}

export function FilterButton() {

    const [expanded, setExpanded] = useState(0)
    const changeExpanded = () => {
        setExpanded(expanded == 1 ? 0 : 1)
    }

    return (
        <button className={`${utils.mt2S} ${utils.width100S}`} data-expanded={expanded} onClick={changeExpanded}>
            <svg id='icon' width="17" height="17" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                <use href={expanded == 0 ? "/icons/filter.svg#icon" : "/icons/x.svg#icon"}></use>
            </svg>
            Filtro
        </button>
    )
}

export function FilterDropdown() {

    const placeholderInfo = [
        {
            "name": "opção 1",
            "value": "opção 1",
        },
        {
            "name": "opção 2",
            "value": "opção 2",
        },
        {
            "name": "opção 3",
            "value": "opção 3",
        }
    ]
    const inputInfo:any = {
        "estágio": {"text": "Estágio do empreendimento", "information": placeholderInfo},
        "local": {"text": "Localização", "information": placeholderInfo},
        "tipo": {"text": "Tipo do Imóvel", "information": placeholderInfo}
    } 

    const [expanded, setExpanded] = useState<any>({});

    const expand = (key:string) => {
        setExpanded((prev:any) => ({ ...prev, [key]: !prev[key] }));
    };

    function createListItems(input:{information:[]}, parentValue:string) {
        let info = input.information
        return info.map((element:{name:string}) => (
            <li 
            key={element.name}
            tabIndex={0} 
            onClick={() => {changeHandler(element.name, parentValue)}} 
            role="option"
            onKeyDown={(e) => {if (e.key == 'Enter'){ changeHandler(element.name, parentValue)}}}>
            {element.name}
            </li>
        ))
    }

    function changeHandler(input:string, parentId:string) {

        var parentObject:HTMLElement = document.querySelector(`[data-value="${parentId}"]`) as HTMLElement
        if (parentObject.textContent == input) {
            parentObject.textContent = inputInfo[parentId].text
        } else {
            parentObject.textContent = input
        }
        expand(parentId)
        return
    }

    return  (
        <div className={`filterBtn ${utils.flexRowML} ${utils.flexRowM} ${utils.flexColumnS} ${utils.mt1S}`}>
            {Object.keys(inputInfo).map((value) => {
                return (
                <div key={value}>
                    <button className={`${utils.sz16ML} ${utils.sz12M} ${utils.mt2S}`} data-value={value} data-expanded={expanded[value] ? 1 : 0} onClick={() => expand(value)}>
                        {inputInfo[value].text}
                    </button>    
                    <ul className={`${utils.sz16ML} ${utils.sz12M} ${utils.sz14S}`} role="listbox">
                        <>
                            {createListItems(inputInfo[value], value)}
                        </>
                    </ul>
                </div>           
                )
            })}
        </div>
)
}

export function SocialCircles() {
    return (
        <div style={{gap: "10px"}} className={`${utils.flexRow}`}>
            <a aria-label="Link to Facebook" href="#">
                <svg id="icon" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <use href="./icons/facebookIcon.svg#icon"></use>
                </svg>
            </a>
            <a href="#">
                <svg width="26" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg"> 
                    <use href="./icons/instagramIcon.svg#icon"></use>
                </svg>
            </a>
        </div>
    )
}