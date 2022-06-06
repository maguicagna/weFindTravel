import '../styles/register.css';
import {Link} from 'react-router-dom'
import {ImCross} from 'react-icons/im'



const Register = ({handleClose, handleLoginLink}) => {
    
    return (
    
        <div className='div-form-register'>    
            <Link className='close' to="/"><ImCross /></Link>
        <h3>Crear Cuenta</h3>
        <form className='form'>
            <div className='n-a'>
                <div>
                    <label for ='nombre'>Nombre </label>
                    <input type="text"  id='nombre' />  
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" />   
                </div>
            </div>
            <section className='inputs-register'>
            <label>Correo electrónico</label> 
            <input type="email"/>
            <label>Contraseña</label> 
            <input type="password" />
            <label>Confirmar contraseña</label> 
            <input type="password"/>
            </section>
            <button className='create-register'>Crear Cuenta</button>
        </form>
        <p>¿Ya tenés una cuenta? <Link className='link-login' to='/login'>Iniciar Sesion</Link></p> 
        </div>
    )
}

export default Register;