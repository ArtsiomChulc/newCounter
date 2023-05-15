import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display/Display";
import {InputMax} from "./components/InputMax/InputMax";
import {InputStart} from "./components/InputMin/InputStart";
import {SuperButton} from "./components/SuperButton/SuperButton";


function App() {

    let [valueInput, setValueInput] = useState<string>('')
    const [valueInputStart, setValueInputStart] = useState<string>('')
    const [isHidden, setIsHidden] = useState<boolean>(true)

    useEffect(() => {
        let newCountStartString = localStorage.getItem('setValueInputStart')
        if (newCountStartString) {
            setValueInputStart(JSON.parse(newCountStartString))
            let newValue = +JSON.parse(newCountStartString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        let inputMaxGetLS = localStorage.getItem("inputMax")
        if (inputMaxGetLS) setValueInput(JSON.parse(inputMaxGetLS))
    }, [])


    let newCountString = localStorage.getItem('inputMax')

    let [count, setCount] = useState<number>(0)

    const countIncrHandlerCB = () => {
            setCount(++count)
    }

    const countResetHandlerCB = () => {
        setCount(+valueInputStart)
    }

    const setSettingsCount = () => {
        setIsHidden(!isHidden)
        localStorage.setItem('setValueInputStart', JSON.stringify(valueInputStart))
        localStorage.setItem("inputMax", JSON.stringify(valueInput))
        setCount(+valueInputStart)
    }

    return (
        <div className={s.wrapCounter}>
            <div className={s.Counter}>
                <Display
                    valueInput={valueInput}
                    valueInputStart={valueInputStart}
                    count={count}
                    newCountString={newCountString}
                />
                {isHidden && <div className={s.inputs}>
                    <InputMax
                        title={'Max'}
                        valueInput={valueInput}
                        setValueInput={setValueInput}
                        valueInputStart={valueInputStart}
                    />
                    <InputStart
                        titleMin={'Start'}
                        valueInputStart={valueInputStart}
                        setValueInputStart={setValueInputStart}
                        valueInput={valueInput}
                    />
                </div>}


                <div className={s.wrapBTN}>
                    {!isHidden && <>
                        {/*<Button*/}
                        {/*    size={"small"}*/}
                        {/*    variant={"outlined"}*/}
                        {/*    onClick={countIncrHandlerCB}*/}
                        {/*>Incr</Button>*/}
                        {/*<Button*/}
                        {/*    disabled*/}
                        {/*    size={"small"}*/}
                        {/*    endIcon={<RestartAltIcon/>}*/}
                        {/*    variant={"outlined"}*/}
                        {/*    onClick={countResetHandlerCB}*/}
                        {/*>Reset</Button>*/}
                        <SuperButton
                            disabled={+valueInput === count}
                            name={'Incr'}
                            callBack={countIncrHandlerCB}
                        />
                        <SuperButton
                            disabled={+valueInputStart === count}
                            name={'Reset'}
                            callBack={countResetHandlerCB}
                        />
                    </>}
                    {/*<Button*/}
                    {/*    endIcon={<TuneIcon/>}*/}
                    {/*    size={"small"}*/}
                    {/*    onClick={setSettingsCount}*/}
                    {/*    variant={"contained"}*/}
                    {/*>Set</Button>*/}
                    <SuperButton
                        disabled={+valueInput <= +valueInputStart}
                        name={'Set'}
                        callBack={setSettingsCount}
                    />
                </div>
            </div>
        </div>

    );
}

export default App;
