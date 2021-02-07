import React from 'react';
import styles from './spinner.module.scss';
import cx from 'classnames';
interface SpinnerProps {
    size: 's' | 'm' | 'l' | 'xl';
    theme: 'dark' | 'light';
    className?: string;
}

function Spinner(Props: SpinnerProps) {
    const { size, theme, className } = Props;

    return (
        <div className={cx(styles[theme], styles['lds-dual-ring'], size ? styles[size] : styles.m, className)}></div>
    );
}

export default Spinner;
