import React, {FC} from 'react';
import classes from './Button.module.scss'

interface ButtonProps {
    border: string
    onClick: (name: string) => void
}

const Button: FC<ButtonProps> = ({border, onClick}) => {
    return (
        <button onClick={() => onClick(border)} className={classes.button}>
            {border}
        </button>
    );
};

export default Button;
