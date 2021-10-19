import React from 'react';
import Porta from './Porta.js';
import Janela from './Janela.js';

class Casa extends React.Component {
    render(){
        return(
            <div>
                <h1>Eu sou uma casa</h1>
                <Janela />
                <Porta />
            </div>

        )
    }
}

export default Casa;