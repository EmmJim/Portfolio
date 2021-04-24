import Link from 'next/link';
import { useRouter } from "next/router";

const Navegacion = () => {

    const router = useRouter();

    return (  
        <nav className="my-3 my-md-0">
                <Link href="/projects">
                    <a className={router.pathname == "/projects" ? "me-3 border-bottom border-white": "me-3"}>Projects</a>
                </Link>
                <Link href="/skills">
                    <a className={router.pathname == "/skills" ? "me-3 border-bottom border-white": "me-3"}>Skills</a>
                </Link>
                <Link href="/contact">
                    <a className={router.pathname == "/contact" ? "me-3 border-bottom border-white": "me-3"}>Contact</a>
                </Link>
        </nav>
    );
}
 
export default Navegacion;