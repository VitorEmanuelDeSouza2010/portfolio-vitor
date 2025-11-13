import styles from './App.module.css'
import perfil from '/FotoG.webp'
import facebookIcon from '/Facebook.webp'
import instagramIcon from '/Instagram.webp'
import linkedinIcon from '/Linkedin.webp'
import whatsappIcon from '/WhatsApp.png'

import { useEffect, useState } from 'react'
import { Card } from './components/card'

function App() {

  const [dados, setDados] = useState([])

  useEffect(() => {
      fetch('/cardsInfo.json').then(response => response.json()).then(data => {
          setDados(data)
          console.log(data)
        })
  }, [])

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
            {dados.map((item) => {
              return(
                <div key={item.id}>
                <Card tec={item.tecnologia} image={item.imagem} text={item.texto}/>
                </div>
              )
            })}
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