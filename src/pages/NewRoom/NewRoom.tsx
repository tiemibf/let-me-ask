import illustrationImg from "../../assets/images/Illustration.svg"
import logoImg  from "../../assets/images/logo.svg"
import googleIconImg from "../../assets/images/google-icon.svg"

import { Button } from "../../components/Button/Button"
import { HomeStyle } from "../Home/Home.styles"

const NewRoom = () => {
    return (
        <HomeStyle>
            <aside>
                <img src={illustrationImg} alt="Q&A illustration"  />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask logo" />
                    <h2>Crie uma nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da sala"/>
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? Clique <a href="#">aqui</a></p>
                </div>
            </main>
        </HomeStyle>
    )
}

export default NewRoom;