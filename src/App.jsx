import React, { useState } from "react";
import "./App.css";

import { motion } from "framer-motion";

const App = () => {
    const [refresh, setRefresh] = useState(false);
    return (
        <motion.div
            className="box"
            initial={{opacity: 0.1}}
            whileHover={{opacity: 1}}
        >
            <div className="simple-text">Damn!</div>
        </motion.div>
    );
};

export default App;
