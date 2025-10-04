import Button from '../UI/Button/Button'
import './ContactSection.css'

const ContactSection = () => {
    return (
        <section>
            <div className="container">
                <div className='contact_title'>
                    <h1 className='title'>
                        Get In <span>Touch</span>
                    </h1>
                    <p className='title_desc'>
                        Have a project in mind or want to 
                        collaborate? Feel free to reach out. 
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="contact_info">
                    <form className="contact_form">
                        <h1>Send a Message</h1>
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input 
                                type="text" 
                                id='name' 
                                placeholder='write your name' 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input 
                                type="text" 
                                id='email' 
                                placeholder='write your email'
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea name="" id="message"></textarea>
                        </div>
                        <Button>
                            Send Message
                        </Button>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default ContactSection