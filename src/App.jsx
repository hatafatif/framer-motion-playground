import React, { useState } from "react";
import "./App.css";

import { motion } from "framer-motion";

const App = () => {
    const [refresh, setRefresh] = useState(false);
    return (
        <motion.div
            className="box"
            initial={{opacity: 0}}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag={true}
            dragConstraints={{ left: -100, right: 100}}
            whileInView={{opacity: 1}}
        >
            <div className="simple-text">Damn!</div>
        </motion.div>
    );
};

export default App;
