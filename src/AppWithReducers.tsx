// import React, {useEffect, useReducer, useState} from 'react';
// import s from './App.module.css';
// import {Display} from "./components/Display/Display";
// import {InputMax} from "./components/InputMax/InputMax";
// import {InputStart} from "./components/InputMin/InputStart";
// import {SuperButton} from "./components/SuperButton/SuperButton";
// import {countReducer, IncrAC, ResetAC} from "./state/countReducer";
// // import {IsHiddenAC, isHiddenReducer} from "./state/isHiddenReducer";
//
//
// function AppWithReducers() {
//
//     let [valueInputMax, setValueInputMax] = useState<string>('')
//     const [valueInputStart, setValueInputStart] = useState<string>('')
//     const [isHidden, dispatchIsHidden] = useReducer(isHiddenReducer, true)
//
//     useEffect(() => {
//         let newCountStartString = localStorage.getItem('setValueInputStart')
//         if (newCountStartString) {
//             setValueInputStart(JSON.parse(newCountStartString))
//             let newValue = +JSON.parse(newCountStartString)
//             // setCount(newValue)
//             dispatchCount({type: "RESET", valueInputStart: newValue})
//         }
//     }, [])
//
//     useEffect(() => {
//         let inputMaxGetLS = localStorage.getItem("inputMax")
//         if (inputMaxGetLS) setValueInputMax(JSON.parse(inputMaxGetLS))
//     }, [])
//
//
//     let newCountString = localStorage.getItem('inputMax')
//
//     // let [count, setCount] = useState(0)
//     let [count, dispatchCount] = useReducer(countReducer, 0)
//
//     const countIncrHandlerCB = () => {
//         // setCount(count++)
//         dispatchCount(IncrAC())
//     }
//
//     const countResetHandlerCB = () => {
//         let newValue = +valueInputStart
//         dispatchCount({type: "RESET", valueInputStart: newValue})
//     }
//
//     const setSettingsCount = () => {
//         dispatchIsHidden(IsHiddenAC())
//         // setIsHidden(!isHidden)
//         localStorage.setItem('setValueInputStart', JSON.stringify(valueInputStart))
//         localStorage.setItem("inputMax", JSON.stringify(valueInputMax))
//         let newValue = +valueInputStart
//         dispatchCount(ResetAC(newValue))
//         // setCount(+valueInputStart)
//     }
//
//     return (
//         <div className={s.wrapCounter}>
//             <div className={s.Counter}>
//                 <Display
//                     valueInput={valueInputMax}
//                     valueInputStart={valueInputStart}
//                     count={count}
//                     newCountString={newCountString}
//                 />
//                 {isHidden && <div className={s.inputs}>
//                     <InputMax
//                         title={'Max'}
//                         valueInput={valueInputMax}
//                         setValueInput={setValueInputMax}
//                         valueInputStart={valueInputStart}
//                     />
//                     <InputStart
//                         titleMin={'Start'}
//                         valueInputStart={valueInputStart}
//                         setValueInputStart={setValueInputStart}
//                         valueInput={valueInputMax}
//                     />
//                 </div>}
//
//
//                 <div className={s.wrapBTN}>
//                     {!isHidden && <>
//                         {/*<Button*/}
//                         {/*    size={"small"}*/}
//                         {/*    variant={"outlined"}*/}
//                         {/*    onClick={countIncrHandlerCB}*/}
//                         {/*>Incr</Button>*/}
//                         {/*<Button*/}
//                         {/*    disabled*/}
//                         {/*    size={"small"}*/}
//                         {/*    endIcon={<RestartAltIcon/>}*/}
//                         {/*    variant={"outlined"}*/}
//                         {/*    onClick={countResetHandlerCB}*/}
//                         {/*>Reset</Button>*/}
//                         <SuperButton
//                             disabled={+valueInputMax === count}
//                             name={'Incr'}
//                             callBack={countIncrHandlerCB}
//                         />
//                         <SuperButton
//                             disabled={+valueInputStart === count}
//                             name={'Reset'}
//                             callBack={countResetHandlerCB}
//                         />
//                     </>}
//                     {/*<Button*/}
//                     {/*    endIcon={<TuneIcon/>}*/}
//                     {/*    size={"small"}*/}
//                     {/*    onClick={setSettingsCount}*/}
//                     {/*    variant={"contained"}*/}
//                     {/*>Set</Button>*/}
//                     <SuperButton
//                         disabled={+valueInputMax <= +valueInputStart}
//                         name={'Set'}
//                         callBack={setSettingsCount}
//                     />
//                 </div>
//             </div>
//         </div>
//
//     );
// }
//
// export default AppWithReducers;
export {}