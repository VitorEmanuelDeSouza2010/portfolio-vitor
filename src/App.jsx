import styles from './App.module.css'
import perfil from '/FotoG.webp'
import facebookIcon from '/Facebook.webp'
import instagramIcon from '/Instagram.webp'
import linkedinIcon from '/Linkedin.webp'
import whatsappIcon from '/WhatsApp.png'
import HtmlImg from '/HTML.webp'
import CssImg from '/CSS.png'
import JavaSImg from '/JAVAS.webp'
import ViteImg from '/VITE.png'
import VercelImg from '/VERCEL.webp'
import ReactImg from '/REACT.png'

import { useState } from 'react'

function App() {

  const defaultPhoneNunber ='5541999802818'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  //console.log(formData)

  const handleZap = () => {
    const {name, email, message} = formData

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNunber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZap, "_blank")
  }

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

        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
            <label htmlFor="email">Informe seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>  

        <section id='s5' className={styles.s5}>
        <h2>REPOSITORIOS</h2>
        <h3>Atividade JSON</h3>
        <a href="https://github.com/VitorEmanuelDeSouza2010/JSON-atividade.git" target='blank'>https://github.com/VitorEmanuelDeSouza2010/JSON-atividade.git</a>
        <h3>localStorage-Forja-Manha</h3>
        <a href="https://github.com/VitorEmanuelDeSouza2010/localStorage-Forja-Manha.git" target='blank'>https://github.com/VitorEmanuelDeSouza2010/localStorage-Forja-Manha.git</a>
        <h3>app-forja-manha-treinos</h3>
        <a href="https://github.com/VitorEmanuelDeSouza2010/app-forja-manha-treinos.git" target='blank'>https://github.com/VitorEmanuelDeSouza2010/app-forja-manha-treinos.git</a>

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