import Layout from '../components/Layout';
import {motion} from 'framer-motion';
import {db} from '../firebase/firebase';
import AnimationScreen from '../components/AnimationScreen';
import { useState } from 'react';

const Contact = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [error, setError] = useState(false);


  const {name, email, phone, message} = values;

  const handleOnChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    //Validar
    if(name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === ''){
      setError(true);
      return;
    }
    //Si no hay errores
    setError(false);

    //Firebase collection
    db.collection('contacts').add(values)
      .then(() => {
        alert('Message has been submitted, Thanks!');
      })
      .catch(error => {
        alert(error.message);
      });
    
    //Resetear el objeto
    setValues({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  } 

  

  return (
    <>
    <div>
      <Layout>
        <AnimationScreen>
          <div className="container">
          <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .8
                  }
                }
              }}
          >
            <h2 className="text-center my-5">Contact Me</h2>
          </motion.div>
            <div className="row my-5">
              <div className="col">
                {error ? <p className="alert alert-danger text-center">Todos los campos son obligatorios</p> : null}
                <form
                  onSubmit={handleOnSubmit}
                >
                  <div className="mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name Here"
                      name="name"
                      value={name}
                      onChange={e => handleOnChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Here"
                      name="email"
                      value={email}
                      onChange={e => handleOnChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone Here"
                      name="phone"
                      value={phone}
                      onChange={e => handleOnChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message Here"
                      name="message"
                      value={message}
                      onChange={e => handleOnChange(e)}
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary d-block w-100">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimationScreen>
      </Layout>
    </div>

    
    </>
  )
}

export default Contact;
