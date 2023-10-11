import { useState } from 'react';

import './index.css';


import usuarioService from '../../service/usuario-service';

function Login() {

const [email, setemail] = useState('admin@admin.com');
const [senha, setsenha] = useState('123456');

const logar = () => {

    if (!email || !senha){
        alert ("Preencha todos os dados!");
    return;
    }

alert(email + "\n" + senha)


//Me comunicar com a API e fazer a autenticação 
usuarioService.autenticar(email, senha)
.then(response => {
usuarioService.salvarToken(response.data.token);
usuarioService.salvarUsuario(response.data.usuario);

window.location='/';

})
.catch(erro => {

    console.log(erro)
})
};

    return (
        <div className="box-login">


                {/* Título da tela de login  */}
                <div className="titulo-login">
                    <h1>LOGIN</h1>
                    
                </div>
                {/* Grupo do e-mail */}
                <div className="grupo">
                    <label for="e-mail">E-mail</label> <br />
                    <input id="e-mail" value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="exemplo@email.com" />
                </div>

                {/* Grupo da senha  */}
                <div className="grupo">
                    <label for="senha">Senha</label> <br />
                    <input id="senha" value={senha} onChange={(e) => setsenha(e.target.value)} type="password" placeholder="*****" />
                </div>

                {/* Link para recuperar senha  */}
                <div className="esqueci-minha-senha">
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button id="botão-de-entrar" onClick={logar}> ENTRAR</button>

            </div >


    )
}

export default Login;