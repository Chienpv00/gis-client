import React from 'react';
import './style.scss';

type Props = {
    children?: any;
};

const GlobalStyles = ({ children }: Props) => {
    return children;
};

export default GlobalStyles;
