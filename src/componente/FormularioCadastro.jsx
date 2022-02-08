import { Component } from "react/cjs/react.development"

export class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="Titulo" placeholder='Titulo' />
                <textarea name="Nota" id="" cols="30" rows="10" placeholder='Escreva sua nota'></textarea>
                <button>Criar nota</button>
            </form>
        );
    };
}