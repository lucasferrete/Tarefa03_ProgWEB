import React from 'react';

class Cachorro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nome: "Jorge"};
    }

    render(){
        return <h2>Eu sou um Cachorro e meu nome é {this.state.nome}</h2>;
    }
}

export default Cachorro;