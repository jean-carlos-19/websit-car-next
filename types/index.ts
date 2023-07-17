import {  MouseEventHandler } from "react";


interface CustomButtonProps {
    title:string;
    containerStyles? :string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}

interface CustomFilterProps{
    title:"year" | "fuel"
}

interface searchManuFacturerProps{
    value:string;
    handleChangue:any;
}
export type {CustomButtonProps, CustomFilterProps,searchManuFacturerProps} 