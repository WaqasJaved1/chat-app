import React from 'react';
import { IconProps } from './type';

function AddIcon(props: IconProps) {
    const { size, color, className } = props;
    return (
        <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width={size}
            height={size}
            className={className ? className : ''}
        >
            <g>
                <circle fill={color} cx="256" cy="256" r="236.17" />
                <path
                    fill={color}
                    d="M256,512C114.853,512,0,397.167,0,256C0,114.853,114.853,0,256,0c141.167,0,256,114.853,256,256
		C512,397.167,397.167,512,256,512z M256,39.659C136.705,39.659,39.659,136.705,39.659,256S136.705,472.341,256,472.341
		S472.341,375.275,472.341,256C472.341,136.705,375.295,39.659,256,39.659z"
                />
            </g>
            <g>
                <path
                    fill="#3996fb"
                    d="M256,373.193c-10.946,0-19.83-8.864-19.83-19.83V155.067c0-10.946,8.884-19.83,19.83-19.83
		c10.946,0,19.83,8.884,19.83,19.83v198.296C275.83,364.329,266.946,373.193,256,373.193z"
                />
                <path
                    fill="#3996fb"
                    d="M355.148,274.045H156.852c-10.946,0-19.83-8.884-19.83-19.83c0-10.946,8.884-19.83,19.83-19.83
		h198.296c10.966,0,19.83,8.884,19.83,19.83C374.978,265.161,366.114,274.045,355.148,274.045z"
                />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
        </svg>
    );
}
export default AddIcon;
