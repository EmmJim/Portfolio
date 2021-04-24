import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';

const DivRedes = styled.div`
    background-color: rgba(44,62,80);
`;

const DivParrafo = styled.div`
    background-color: rgb(34,44,55);
`;

const Footer = () => {
    return (  
        <div className="container-fluid">
            <DivRedes className="row text-white pt-1">
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://github.com/EmmJim" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github fs-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/emmanuel-jimenez-87bb44157/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin fs-2"></i>
                    </a>
                    <a href="https://www.facebook.com/EmmJim10/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook fs-2"></i>
                    </a>
                </div>
            </DivRedes>
            <DivParrafo className="row text-white py-3">
                <div className="d-flex justify-content-center align-items-center">
                    <p className="m-0 text-center">EmmJim - Software Developer &copy; 2021</p>
                </div>
            </DivParrafo>
        </div>
    );
}
 
export default Footer;