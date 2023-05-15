import React from 'react';

type SuperButtonPropsType = {
    disabled?: boolean
    name: string
    callBack: () => void
}

export const SuperButton = (props:SuperButtonPropsType) => {



    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <>
            <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
        </>
    );
};

