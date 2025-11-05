import styles from './App.module.css'
import perfil from '../public/FotoG.webp'
import facebookIcon from '../public/facebook.webp'
import instagramIcon from '../public/instagram.webp'
import linkedinIcon from '../public/linkedin.webp'
import whatsappIcon from '../public/whatsapp.png'
import HtmlImg from '/HTML.webp'
import CssImg from '/CSS.png'
import JavaSImg from '/JAVAS.webp'
import ViteImg from '/VITE.png'
import VercelImg from '/VERCEL.webp'
import ReactImg from '/REACT.png'

function App() {

  //javascript

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>

        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={perfil} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Vitor Emanuel</h2>
            <p className={styles.paragraph}>
              Aluno do colegio Nirlei Medeiros, aluno do SENAI, tenho dificuldades para controlar minhas emoções, mas sempre tento me manter calmo e neutro em situações complicadas mesmo que nem sempre eu consiga, tenho interesse em programação de sites e jogos, desenvolvimentos de sistemas e desenhos, tenho altismo leve</p>
          </div>
        </section>

        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            <div className={styles.card}>
                <img width={100} src={HtmlImg} alt="HTML" />
                <h3>HTML</h3>
                <p>HTML (Linguagem de Marcação de Hipertexto) é a linguagem utilizada para estruturar e organizar o conteúdo de páginas web. Ela define a estrutura básica de um site, permitindo que o conteúdo seja apresentado em parágrafos, listas, imagens e tabelas.</p>
            </div>

            <div className={styles.card}>
                <img width={100} src={CssImg} alt="CSS" />
                <h3>CSS</h3>
                <p>CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos escritos em HTML ou XML.</p>
            </div>

            <div className={styles.card}>
                <img width={100} src={JavaSImg} alt="JS" />
                <h3>JS</h3>
                <p>JavaScript é uma linguagem de programação de alto nível, interpretada e amplamente utilizada para criar páginas web interativas.</p>
            </div>

            <div className={styles.card}>
                <img width={100} src={ViteImg} alt="VITE" />
                <h3>VITE</h3>
                <p>Vite é uma ferramenta de build e bundler de aplicações front-end criada por Evan You, o mesmo criador do Vue.js. Ela foi projetada para otimizar o processo de desenvolvimento, proporcionando uma inicialização rápida e tempos de compilação ágeis.</p>
            </div>

            <div className={styles.card}>
                <img width={100} src={ReactImg} alt="REACT" />
                <h3>REACT</h3>
                <p>O React é uma biblioteca JavaScript criada pelo Facebook em 2011, projetada para o desenvolvimento de interfaces de usuário (UI) em aplicações web.</p>
            </div>

            <div className={styles.card}>
                <img width={100} src={VercelImg} alt="VERCEL" />
                <h3>VERCEL</h3>
                <p>Vercel é uma plataforma de software como serviço (SaaS) que permite aos desenvolvedores criar, implantar e escalar sites e aplicativos de forma rápida e eficiente.</p>
            </div>

          </div>
        </section>

        <section id='s3'>
          <h2>sessao 3</h2>
        </section>

        <section id='s4'>
          <h2>sessao 4</h2>
        </section>  
      </main>
      <footer className={styles.rodape}>
        <a href="https://www.facebook.com" target='blank' rel='noopener noreferrer'> <img width={70} src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.instagram.com" target='blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /></a>
        <a href="https://www.linkedin.com" target='blank' rel='noopener noreferrer'> <img width={70} src={linkedinIcon} alt="Linkedin" /></a>
        <a href="https://www.whatsapp.com" target='blank' rel='noopener noreferrer'> <img style={{marginLeft: '15px'}} width={40} src={whatsappIcon} alt="WhatsApp" /></a>
      </footer>
    </>
  )
}

export default App