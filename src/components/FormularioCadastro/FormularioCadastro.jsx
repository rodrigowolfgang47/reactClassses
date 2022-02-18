import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  };

  _handleMudancadeTitulo(event){
    this.titulo = event.target.value;
    console.log(this.titulo)
  };

  _handleMudancadeTexto(event){
    this.texto = event.target.value
    console.log(this.texto)
  };

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this)
  };



  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}
      >
        
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancadeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancadeTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
