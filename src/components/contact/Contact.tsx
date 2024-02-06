import useScrollVisibility from '../../hooks/useScrollVisibility';
import MyButton from '../button/MyButton'
import './contact.css'

const Contact = () => {
  const isVisible = useScrollVisibility('contact', 0.5);

  return (
    <div className={`contact-div pt-5 pb-5 overflow-x-hidden ${isVisible ? 'isVisible' : ''}`} id='contact'>
        <div className='p-4'>
            <h2 className="text-center">CONTACT</h2>
            <div className="line m-auto"></div>
            <p className='text-center mt-3'>
                Feel free to Contact me by submitting 
                the form below and I will get back to you
                as soon as possible
            </p>
        </div>
        <div className='form-div m-auto'>
            <form>
               <div className='p-3'>
                 <label htmlFor="name">name</label><br />
                 <div className='border-div mt-2'>
                  <input type="text" placeholder='Enter Your Name'/>
                 </div>
               </div>
               <div className='p-3'>
                <label htmlFor="email">email</label><br />
                <div className='border-div mt-2'>
                  <input type="text" placeholder='Enter Your Email'/>
                </div>
               </div>
               <div className='p-3'>
                <label htmlFor="message">message</label><br />
                <div className="border-div text-area mt-2">
                <textarea name="" placeholder='Enter Your Message' className='pt-3'></textarea>
                </div>
               </div>
               <div className='w-100 d-flex justify-content-end pe-3 pt-2'>
                <div onClick={(e) => e.preventDefault()}>
                  <MyButton text={'SUBMIT'} width={'9rem'} padding='0.7rem'/>
                </div>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Contact