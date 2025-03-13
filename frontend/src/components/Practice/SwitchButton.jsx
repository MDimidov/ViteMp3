import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { MoonIcon, SunIcon } from "lucide-react";

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

export default function SwitchButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={`w-[5rem] h-[2.4rem] bg-[#747476] flex rounded-full p-[0.2rem] cursor-pointer ${isOn ?  'justify-end' : 'justify-start'}`} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className={`w-[2rem] h-[2rem] bg-gray-200 dark:bg-gray-800 cursor-pointer active:bg-black/5 dark:active:bg-white/1 rounded-full flex`} layout transition={spring}>
        {isOn ? <SunIcon className="m-auto"/> : <MoonIcon className="m-auto" /> }
      </motion.div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 20
};
