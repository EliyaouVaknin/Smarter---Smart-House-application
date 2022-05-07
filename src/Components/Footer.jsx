import React,{useState} from 'react'
import '../Styles/Footer.css'
import ToggleSwitch from '../Components/ToggleSwitch'

export default function Footer(props) {
    return (
        <div>
            <p id='FooterP'>Powerd by EVDesign Co. 2022.</p>
            <span id='ToggleSwitchSpan'>
                <ToggleSwitch DarkModFunc={props.DarkModFunc} />
            </span>
        </div>
    )
}
