import React, { Component } from "react";
import "./estilo.css"


class CardDeNotas extends Component {
    render() {
        return (
            <section className="carde-de-notas">
                <header>
                    <h3>
                        Título
                    </h3>
                </header>
                <p>Escrever sua nota</p>
            </section>
        );
    };
};

export default CardDeNotas