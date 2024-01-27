'use client'

import { ChangeEvent, useState } from "react"
import utils from "@/styles/utils.module.css"
import "@/styles/form.css"

export default function MainPageForm() {
    const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

    const [formSuccess, setFormSuccess] = useState("false")
    async function formHandleSim(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setFormSuccess("processing")
        await delay(5000)
        return setFormSuccess("true") 
    }
    // simulates a form, returning positive after a second 

      
    // handles the formating of the phone number
    const update:any = (event:Event) => {
        let input = event.target as HTMLInputElement
        input.value = format(input.value)
    }
    
    const format = (value:string) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    }
    
    return (
        <>
            <form data-success={formSuccess} action="" onSubmit={formHandleSim} 
            className={`${utils.span5ML} ${utils.gridStart7ML} ${utils.span5M} ${utils.gridStart5M} ${utils.spanRowS} ${utils.bgW} ${utils.bdrs}`}>
                <div className="success">
                    <div>
                        <img src="/icons/check.svg" alt="" />
                        <p className={`${utils.demiboldFW} ${utils.colorG1}`}>Mensagem enviada com sucesso!</p>
                        <p className={utils.mt1}>Aguarde que em instantes entraremos em contato.</p>
                    </div>
                </div>
                <fieldset className={`${utils.flexColumnML} ${utils.sz18ML}`}>
                    <legend>Fale agora mesmo com a liva</legend>
                    <div className={`nameInput ${utils.width100}`}>
                        <input placeholder={" "} required name="name" id="name" type="text" />
                        <label htmlFor="name">Nome</label>
                    </div>
                    <div className={`${utils.relative}`}>
                        <input className={`commonInput ${utils.width100}`} placeholder={"Telefone"} onChange={update} required name="telephone" minLength={14} maxLength={15} id="telephone" type="tel" />
                        <img src="/icons/tick.svg" alt="" />
                        <p>*por favor, preencher corretamente</p>
                    </div>
                    <div className={`${utils.relative}`}>
                        <input className={`commonInput ${utils.width100}`} placeholder={"E-mail"}  required name="email" id="email" type="email" />
                        <img src="/icons/tick.svg" alt="" />
                        <p>*por favor, preencher corretamente</p>
                    </div>
                    <textarea className={`${utils.width100}`} placeholder={"Mensagem"} required name="message" id="message" cols={30} rows={6}></textarea>
                    <input className={`${utils.textUppercase} ${utils.bgG1} ${utils.colorW} ${utils.btnPadding}
                    ${utils.bdrs} ${utils.sz16} ${utils.width100}`} type="submit" 
                    value={formSuccess == "false" ? "Enviar Mensagem" : formSuccess == "true" ? "Mensagem enviada" : "Enviando Mensagem"}   />
                </fieldset>
            </form>       
        </>
    
    )
}