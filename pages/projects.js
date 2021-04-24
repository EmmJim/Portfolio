import Image from 'next/image';
import Layout from '../components/Layout';
import {motion} from 'framer-motion';
import AnimationScreen from '../components/AnimationScreen';

const Projects = () => {
  return (
    <>
    <div>
      <Layout>
        <AnimationScreen>
          <section class="container my-5">

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
            <h2 class="text-center">Projects</h2>
          </motion.div>
          
          <div class="row my-5">
              <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-4 px-5 px-md-4 px-sm-2">
                  <div class="card">
                      <Image 
                          src="/LogoGymJazar.png" 
                          alt="Logo Gym Gazar" 
                          class="card-img-top"
                          width={300}
                          height={300} 
                      />
                      <div class="card-body">
                        <h5 class="card-title">Gym&Fitness Jazar</h5>
                        <p class="card-text">Página para un gimnasio ubicado en la ciudad de Aguascalientes</p>
                        <a href="https://confident-brahmagupta-19a4b3.netlify.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-4 px-5 px-md-4 px-sm-2">
                  <div class="card">
                      <Image 
                          src="/LogoLaundryHome.png" 
                          alt="Logo Gym Gazar" 
                          class="card-img-top"
                          width={300}
                          height={300} 
                      />
                      <div class="card-body">
                        <h5 class="card-title">LaundryHome</h5>
                        <p class="card-text">Página para una lavandería en la ciudad de Aguascalientes</p>
                        <a href="https://elastic-aryabhata-f6e1e8.netlify.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-4 px-5 px-md-4 px-sm-2">
                  <div class="card">
                      <Image 
                          src="/cryptomonedas.png" 
                          alt="Logo Gym Gazar" 
                          class="card-img-top"
                          width={300}
                          height={300} 
                      />
                      <div class="card-body">
                        <h5 class="card-title">Cotizador de Criptomonedas</h5>
                        <p class="card-text">Proyecto Personal en ReactJS consumiendo una API Externa</p>
                        <a href="https://brave-shaw-fc3b4d.netlify.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-4 px-5 px-md-4 px-sm-2">
                  <div class="card">
                      <Image 
                          src="/mern.png" 
                          alt="Logo Gym Gazar" 
                          class="card-img-top"
                          width={300}
                          height={300} 
                      />
                      <div class="card-body">
                        <h5 class="card-title">Administrador de Usuarios</h5>
                        <p class="card-text">Mini Proyecto Full Stack con Mongo, Express, Node.js y ReactJS</p>
                        <a href="https://infallible-hodgkin-932712.netlify.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-4 px-5 px-md-4 px-sm-2">
                  <div class="card">
                      <Image 
                          src="/logo.png" 
                          alt="Logo Gym Gazar" 
                          class="card-img-top"
                          width={300}
                          height={300} 
                      />
                      <div class="card-body">
                        <h5 class="card-title">Movies API</h5>
                        <p class="card-text">Proyecto personal consumiendo una API con ReactJS</p>
                        <a href="https://focused-goldstine-cdbd3e.netlify.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center my-4 px-5 px-md-4 px-sm-2">
                  <div class="card">
                      <Image 
                          src="/citas.png" 
                          alt="Logo Gym Gazar" 
                          class="card-img-top"
                          width={300}
                          height={300} 
                      />
                      <div class="card-body">
                        <h5 class="card-title">Administrador de Pacientes</h5>
                        <p class="card-text">Pequeño administrador de pacientes con ReactJS</p>
                        <a href="https://brave-visvesvaraya-1ce9b4.netlify.app/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Visitar</a>
                      </div>
                  </div>
              </div>
          </div>
          
      
          </section>
        </AnimationScreen>
      </Layout>
    </div>

    
    </>
  )
}

export default Projects;
