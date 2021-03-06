import React from 'react';
import Nav from './nav';
import Rodape from '../components/Rodape';
import Fundo from '../components/Fundo'
import Login from '../components/Login';
import abelha from '../components/imagens/abelhass.png';

const Page1 = () =>{
    return(
        <div className="App" id="cor-de-fundo">
                <div>
                    <Nav />
                </div>
            <div  className="container-fluid">
                <div className="row d-flex justify-content-center mt-5">
                    <div><Login /></div>
                </div>
                <div>
                    <Fundo />
                </div>
            </div>
            <div className="fixed-bottom mb-5">
                    <img className="ml-5" id="abelhinha" src={abelha}/>
                </div>
            <div >
                <Rodape />
            </div>
        </div>   
    )
}

export default Page1;
