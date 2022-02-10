import React, { Component } from "react";
import CardDeNotas from "./CardDeNotas/CardDeNotas";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of('Trabalho', 'Estudos', 'Faculdade').map((categoria, index) => {
                    return (
                        <li key={index}>
                            <div>{categoria}</div>
                            <CardDeNotas />
                        </li>
                    )
                })}
            </ul>
        );
    };
}

export default ListaDeNotas