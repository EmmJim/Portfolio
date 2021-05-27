import Layout from '../components/Layout';
import {motion} from 'framer-motion';
import Image from 'next/image';
import AnimationScreen from '../components/AnimationScreen';

export default function Home() {
  return (
    <>
    <div>
      <Layout>
      <AnimationScreen>
          <main class="container">
              <div class="row my-5 mx-2 mx-md-0">
                  <div class="col-lg-6 card-me">
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
                      <h2>About Me</h2>
                    </motion.div>
                      <p class="mt-4">My name is Emmanuel Said Jimenez Oliva, I'm currently studying the eighth semester of Intelligent Computation Engineer in the UAA. </p>
                      <p> My focus in college is Algorithms and IA, but lately i've been studying Web Development on the side. I really enjoy learning new things, and besides programming, i enjoy working out.
                      </p>
                      <p> I'm currently working at SOLGEEK, which is a software development company that works with some technologies like React, and ReactNative on the app development side
                      </p>
                      <div class="imagen-logo contenedor text-center">
                          <Image src="/LogoEmmJim.png" alt="Logo EmmJim " width={80} height={80} />
                      </div>
                  </div>
                  <div class="col-lg-6 text-center imagen-said">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 2,
                        transition: {
                          duration: .3
                        }
                      }}
                    >
                      <Image src="/pp2.jpeg" alt=" " width={500} height={500} className="rounded"/>
                    </motion.div>
                  </div>
              </div>
          </main>
          <div className="container">
          <div className="row">
            <div className="col my-5 d-flex justify-content-center">
              <a 
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c41d9.appspot.com/o/CurriculumAct.pdf?alt=media&token=c9405c25-4ecc-4147-b461-cc97846af89c"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >Visualizar Curriculum</a>
            
            </div>
          </div>
        </div>
        </AnimationScreen>
      </Layout>
    </div>

    
    </>
  )
}
