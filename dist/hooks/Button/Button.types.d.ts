import { ReactElement } from "react";
/**
 * Defines the props interface
 */
export interface ButtonProps {
    type?: "button" | "submit";
    fullWidth?: boolean;
    className?: string;
    variant: "primary" | "secondary" | "default" | "edit" | "delete" | "create";
    label?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    loading?: boolean;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    children?: ReactElement | ReactElement[];
}
