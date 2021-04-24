import Navegacion from './Navegacion';
import Link from 'next/link';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const HeaderStyles = styled.header`
    background-color: rgba(44,62,80);
`;

const HeaderLogo = styled.a`
    color: #FFF;
    text-decoration: none;
    border: none;

    &:hover {
        border: none;
        color: #FFF;
        cursor: pointer;
    }
`;

const Header = () => {
    return (  
        <div className="container-fluid">
        <HeaderStyles 
            className="row text-white p-3" 
            css={css`
                
            `}
        >
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
                <Link href="/">
                    <HeaderLogo>
                        <h1>EmmJim</h1>
                    </HeaderLogo>
                </Link>
                <Navegacion />
            </div>
        </HeaderStyles>
        </div>
    );
}
 
export default Header;