import { useEffect } from "react";

export const Timer = (props) => {
    const value = props.value;
    const idClass = props.label.toLowerCase().replace(' ', '-');
    
    useEffect(() => {
      
        console.log('render', {idClass})
        const $counterValue = document.querySelector(`.countdown__counter--${idClass} .countdown__counter__value`);
        $counterValue.classList.add('flip');
        setTimeout(() => {
            $counterValue.classList.remove('flip');
        }, 750)

    }, [value])
    
    return (
        <div className={`countdown__counter countdown__counter--${idClass}`} key={idClass}>
            <div className="countdown__counter__value">
                <div className="countdown__counter__value-wrapper">{(value.toString().length) < 2 ? 0 : ''}{value}</div>
            </div>
            <div className="countdown__counter__label">{props.label}</div>
        </div>
    );
}