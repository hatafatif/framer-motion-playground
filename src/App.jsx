import React, { useState } from "react";
import "./App.css";

import { motion } from "framer-motion";

const navbarVariant = {
    hiddenTop: { y: "-10vh" },
    slideDown: { y: 0, 
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.5,
            
        }
},
};

const App = () => {
    return (
        <motion.div
            className="navbar"
            animate={"slideDown"}
            initial={"hiddenTop"}
            variants={navbarVariant}
        >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </motion.div>
    );
};

export default App;
