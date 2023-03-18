import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./Button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props :ButtonProps) => {
    return (
        <ButtonStyle className="button" {...props} />
    )
}