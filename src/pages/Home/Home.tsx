import illustrationImg from "../../assets/images/Illustration.svg"
import logoImg  from "../../assets/images/logo.svg"
import googleIconImg from "../../assets/images/google-icon.svg"
import { HomeStyle } from "./Home.styles"
import { Button } from "../../components/Button/Button"

export const Home = () => {
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
                    <button className="create-room">
                        <img src={googleIconImg} alt="Google logo" />
                        Crie sua sala com o Google
                    </button>
                    <p className="separator">ou entre em uma sala</p>
                    <form>
                        <input type="text" placeholder="Digite o código da sala"/>
                        <Button type="submit" children="Entrar na sala"/>
                    </form>
                </div>
            </main>
        </HomeStyle>
    )
}