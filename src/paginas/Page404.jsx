

import Img from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Page404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={Img} alt="" />
            <p className="naoencontrado-texto">Ops, essa página não existe</p>
        </main>
    )
}
export default Page404