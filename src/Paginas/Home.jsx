import { Link } from "react-router-dom";

export default function Home() {


    return (
        <main>
            <h1>Essa é a pagina home do NikeShoes. efetue o login para continuar</h1>
            <Link to="/login">Login</Link>
        </main>
    )

}