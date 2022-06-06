import '../styles/login.css';
import {Link} from 'react-router-dom'
import {ImCross} from "react-icons/im"



const Login = ({handleClose, handleRegisterLink}) => {
    
    return (
    
        <div className='div-form'>
            <Link className='close' to="/"><ImCross /></Link>
            <h4>Iniciar Sesión</h4>
        <form className='form'>
            <section className='inputs'>
            <label>Correo electrónico</label>    
            <input type="email"  />
            <label>Contraseña</label> 
            <input type="password" />
            </section>
            <button className='submit'>Ingresar</button>
        </form>
        <p>¿Aún no tenes cuenta? <Link className='link-registro' to='/registro'>Registrate</Link></p> 
        </div>
    )
}

export default Login;