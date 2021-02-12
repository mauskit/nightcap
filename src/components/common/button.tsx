/* eslint-disable react/jsx-indent */
import React from 'react';

type Props = {
    text1 : string,
    text2 : string,
}

const Button: React.FC<Props> = (props) => {
    const p = props
    const text = p.text1;
    return(
        <div>{text}</div>
    );
}

export default Button;