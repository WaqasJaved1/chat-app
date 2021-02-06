import React from 'react';
import { IconProps } from './type';

function HistoryIcon(props: IconProps) {
    const { size, color, className } = props;
    return (
        <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 551.13 551.13"
            width={size}
            height={size}
            className={className ? className : ''}
        >
            <path
                fill={color}
                d="m275.531 172.228-.05 120.493c0 4.575 1.816 8.948 5.046 12.177l86.198 86.181 24.354-24.354-81.153-81.136.05-113.361z"
            />
            <path
                fill={color}
                d="m310.011 34.445c-121.23 0-221.563 90.033-238.367 206.674h-71.644l86.114 86.114 86.114-86.114h-65.78c16.477-97.589 101.355-172.228 203.563-172.228 113.966 0 206.674 92.707 206.674 206.674s-92.707 206.674-206.674 206.674c-64.064 0-123.469-28.996-162.978-79.555l-27.146 21.192c46.084 58.968 115.379 92.808 190.124 92.808 132.955 0 241.119-108.181 241.119-241.119s-108.164-241.119-241.119-241.12z"
            />
        </svg>
    );
}
export default HistoryIcon;
