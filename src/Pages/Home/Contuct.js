import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contuct = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        // const subject = e.target.subject.value
        // const email = e.target.email.value
        // const message = e.target.message.value
        // console.log(name, subject, email, message)


        emailjs.sendForm('service_8bunyf6', 'template_skygu7q',form.current, 'Gn2-5o5glHEX5jIgH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
        toast('Email send')
    }
    return (
        <div for='contact' className='text-center my-10 lg:px-20  '>
        <p className=''>Feel Free to Contact </p>
        <p className='my-5 text-3xl mb-10'>Get In Touch </p>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
            <div className='  p-2 shadow-xl rounded-xl'>
                <p className='text-xl'>Contact Form</p>
                <div >

                    <form ref={form} class=" text-center flex flex-col justify-center items-center gap-2 " onSubmit={sendEmail}>
                        
                        <input  placeholder="Name" class="input input-bordered w-full max-w-xs mt-3" type="text" name="user_name" />
                       
                        <input  required placeholder="Email" class="input input-bordered w-full max-w-xs mt-3" type="email" name="user_email" />
                        <input  placeholder="Subject" class="input input-bordered w-full max-w-xs mt-3" type="text" name="subject" />
                       
                  
                        <textarea required placeholder="Message..." class="input input-bordered w-full max-w-xs mt-3" name="message" />
                        <input type="submit"  className='btn my-3' value='send message' />
                    </form>
                    {/* <form onSubmit={sendEmail} class=" text-center flex flex-col justify-center items-center gap-2 " action="">
                        <input type="text" placeholder="Name" name='name' class="input input-bordered w-full max-w-xs mt-3" />
                        <input type="email" placeholder="Email" name='email' class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Subject" name='subject' class="input input-bordered w-full max-w-xs" />
                        <textarea type="text" placeholder="Message..." name='message' class="input input-bordered w-full max-w-xs" />

                        <input type="submit" className='btn my-3' value='send message' />
                    </form> */}
                </div>

            </div>
            <div className='flex flex-col items-start gap-3 pl-10  justify-center mt-5'>
                <p><span><i class="fa-solid fa-user-large"></i></span>  Muslim Ahmed Khan</p>

                <p><span><i class="fa-solid fa-phone"></i></span> +88 01613900027</p>
                <p> <span><i class="fa-solid fa-envelope"></i></span> letsmailmak@gmail.com</p>
                <p> <span><i class="fa-solid fa-location-dot"></i></span> Uttara , Dhaka-1230</p>

            </div>
        </div>
       
    </div>
    );
};

export default Contuct;