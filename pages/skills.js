import Layout from '../components/Layout';
import {motion} from 'framer-motion';
import AnimationScreen from '../components/AnimationScreen';


const Skills = () => {
  return (
    <>
    <div>
      <Layout>
        <AnimationScreen>
          <div className="container">
            <div className="row my-5">
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
              <h2 class="text-center">Skills</h2>
            </motion.div>
              <div className="col mt-5">
                <ul className="text-center">
                  <li>HMTL</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>React Native</li>
                  <li>Node.js</li>
                  <li>SQL</li>
                  <li>Java</li>
                </ul>
                <div className="imagenes d-xl-flex justify-content-center text-center">
                  <i className="fab fa-html5 icono"></i>
                  <i className="fab fa-css3-alt icono"></i>
                  <i className="fab fa-bootstrap icono"></i>
                  <i className="fab fa-js icono"></i>
                  <i className="fab fa-react icono"></i>
                  <i className="fab fa-node icono"></i>
                  <i className="fas fa-database icono"></i>
                  <i className="fab fa-java icono"></i>
                </div>
                
              </div>
            </div>
          </div>
        </AnimationScreen>
      </Layout>
    </div>

    
    </>
  )
}

export default Skills;
