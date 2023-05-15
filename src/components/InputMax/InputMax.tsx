import React, {ChangeEvent} from 'react';
import s from './InputMax.module.css'



type SuperInputPropsType = {
    valueInput: string
    setValueInput: (valueInput: string) => void
    title: string
    valueInputStart: string
}

export const InputMax = (props: SuperInputPropsType) => {
    const styleInputMax =  `${+props.valueInputStart >= +props.valueInput ? s.inputMaxError : ''}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            return
        } else {
            props.setValueInput(e.currentTarget.value)
        }
    }

    return (
        <div className={s.input}>
            <p>{props.title}</p>
            <input className={styleInputMax} type={"number"} value={props.valueInput ? props.valueInput : 0} onChange={onChangeHandler}/>
        </div>
    );
};

