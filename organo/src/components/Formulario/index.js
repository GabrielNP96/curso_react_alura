import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className = "formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto label="Nome" placeholder = "Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder = "digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder = "digite o endereço da imagem"/>
                <ListaSuspensa itens={times} />
            </form>
        </section>
    )
}

export default Formulario