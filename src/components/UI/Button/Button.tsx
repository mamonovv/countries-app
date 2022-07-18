import React, {FC} from 'react';
import classes from './Button.module.scss'

interface ButtonProps {
    border: string
}

const Button: FC<ButtonProps> = ({border}) => {
    return (
        <button className={classes.button}>
            {border}
        </button>
    );
};

export default Button;
