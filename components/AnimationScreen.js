import React from 'react';
import {motion} from 'framer-motion';

const AnimationScreen = (props) => {
    return (  
            <motion.div
            initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0,
                scale: 0.5,
            },
            pageAnimate: {
                opacity: 1,
                scale: 1,
                transition: {
                type: "spring", stiffness: 80, delay: 0.3,
                }
            }
            }}
        >
            {props.children}
        </motion.div>
    );
}

export default AnimationScreen;