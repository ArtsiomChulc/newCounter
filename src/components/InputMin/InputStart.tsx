import React, {ChangeEvent} from 'react';
import s from "./InputStart.module.css";

type InputMinPropsType ={
    valueInputStart: string
    setValueInputStart: (valueInputStart: string) => void
    titleMin: string
    valueInput: string
}

export const InputStart = (props:InputMinPropsType) => {
    const styleInputStart =  `${+props.valueInputStart >= +props.valueInput ? s.inputStartError : ''}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            return
        } else {
            props.setValueInputStart(e.currentTarget.value)
        }
    }

    return (
        <div className={s.input}>
            <p>{props.titleMin}</p>
            <input className={styleInputStart} type={"number"} value={props.valueInputStart ? props.valueInputStart : 0} onChange={onChangeHandler}/>
        </div>
    );
};

