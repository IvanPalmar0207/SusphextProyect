/*React-router-dom*/
import { useNavigate } from "react-router-dom";
/*React-hook-form*/
import { useForm } from "react-hook-form";
/*Images*/
import ImageForm from './imgs/ContactUs/ImageForm.jpg';
/*Alerts*/
import Swal from 'sweetalert2'
/*Functionality*/
import emailjs from '@emailjs/browser'

export function FormContact(){

    const {register, handleSubmit, formState: errors} = useForm()

    const navigate = useNavigate()

    const sendForm = handleSubmit(async (data) => {

        let validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        let lower = /[a-z]/g

        let upper = /[A-Z]/g

        if(!validateEmail.test(data.emailUser)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El correo electronico es incorrecto, intenta nuevamente',
                confirmButtonText: "Reenviar",
                allowEnterKey:true,
                allowOutsideClick:false,
                confirmButtonColor:"red"
                }
            )
            return false  
        }

        else if(data.phoneContact.match(lower) || data.phoneContact.match(upper)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El telefono de contacto no puede contener letras',
                confirmButtonText: "Reenviar",
                allowEnterKey:true,
                allowOutsideClick:false,
                confirmButtonColor:"red"
                }
            )
            return false   
        }

        else if(data.phoneContact.length > 10 || data.phoneContact.length < 10){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El telefono de contacto debe ser de 10 caracteres',
                confirmButtonText: "Reenviar",
                allowEnterKey:true,
                allowOutsideClick:false,
                confirmButtonColor:"red"
                }
            )
            return false   
        }

        else if(data.description.length == 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La sugerencia no puede estar vacia',
                confirmButtonText: "Reenviar",
                allowEnterKey:true,
                allowOutsideClick:false,
                confirmButtonColor:"red"
                }
            )
            return false   
        }

        else{
        
            const emailData = {
                names : data.names,
                surname : data.surname,
                phoneContact : data.phoneContact,
                emailUser : data.emailUser,
                description : data.description
            }

            emailjs.send('service_4drt7ht','template_5vlz926',emailData,'kUQOOceO9Xf0JH5bn')

            Swal.fire({
                icon: "success",
                title: "Correo enviado exitosamente",
                confirmButtonColor:'#3ed634',                
                confirmButtonText : 'Siguiente',
                text: "La sugerencia se ha enviado correctamente",                            
            });         

            navigate('/')
    
    }

    })

    return(
        <div className="formContact">
        <form className="containerFormContact" onSubmit={sendForm}> 
        
            <input className="fields" type="text" placeholder="Nombres" {...register('names',{required : true})}/>    

            <br />
        
            <input className="fields" type="text" placeholder="Apellidos" {...register('surname',{required : true})}/>            

            <br />
                            
            <input className="fields" type="text" placeholder="Numero de telefono" {...register('phoneContact',{required : true})}/>            

            <br />
        
            <input className="fields" type="email" placeholder="Email" name = 'emailUser' {...register('emailUser',{required : true})}/>            

            <br />

            <textarea className='fieldsArea' {...register('description',{required : true})} rows={8} cols={40} placeholder="Escribe tu mensaje"></textarea>                                

            <br />                    

            <div className="containerButtons">
                <input className="buttonContact" type="reset" value="Borrar"/>
                <input className='buttonContact' type="submit" value="Enviar"/>
            </div>

        </form>

        <img className="modelImage" src={ImageForm} alt="imageForm" />

    </div>
    )
}