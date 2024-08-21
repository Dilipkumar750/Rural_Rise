import React from "react";

export const TextInput = ({type,value, onChangeText, className, name, style}) => {
    return <input name={name} value={value} type={type} onChange={onChangeText} className={className} style={style}  />
}