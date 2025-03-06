import { Menus } from "../../utils/utils.js";
import Logo from "../../assets/sound-icon.svg";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import SearchBar from "./SearchBar.jsx";
import { useTheme } from "../../hooks/useTheme";
import { MoonIcon, SunIcon, Volume2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Header() {

    const { theme, setTheme } = useTheme();

    function setThemeHandler() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    return (
        <>
            <header className="h-16 text-[15px] w-screen fixed z-999 inset-0 flex-center bg-(--bg-light-header) dark:bg-(--bg-dark-header) ring shadow-xl ring-gray-900/5">
                <nav className=" px-3.5 flex-center justify-around w-full mx-auto">
                    <Link to="/" className="flex-center gap-x-3 z-[999] relative">
                        <Volume2Icon className="size-8 .logo" />
                        <h3 className="text-lg font-semibold">ViteMp3</h3>
                    </Link>
                    <ul className="gap-x-1 lg:flex hidden">
                        {Menus.map((menu) => (
                            <DesktopMenu menu={menu} key={menu.name} />
                        ))}
                    </ul>
                    <div className="flex-center gap-x-5">
                        <SearchBar classParameter="md:block" />

                        <button
                            aria-label="sign-in"
                            className="dark:bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center min-w-[73px] text-center cursor-pointer active:bg-black/5 dark:active:bg-white/1"
                        >
                            <Link to='/login'>Sign In</Link>
                        </button>

                        <div className={`w-[5rem] h-[2.4rem] bg-[#747476] flex rounded-full p-[0.2rem] cursor-pointer ${theme === "dark" ? 'justify-end' : 'justify-start'}`} onClick={setThemeHandler}>
                            <motion.div className={`w-[2rem] h-[2rem] bg-gray-200 dark:bg-gray-800 cursor-pointer active:bg-black/5 dark:active:bg-white/1 rounded-full flex`} layout transition={spring}>
                                {theme !== "dark" ? <SunIcon className="m-auto" /> : <MoonIcon className="m-auto" />}
                            </motion.div>
                        </div>

                        {/* <button
                            onClick={setThemeHandler}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer active:bg-black/5 dark:active:bg-white/1"
                        >
                            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button> */}
                        <div className="lg:hidden">
                            <MobMenu Menus={Menus} />
                        </div>
                    </div>
                </nav>
            </header>
            <div id="" className="mb-16 h-0 w-0 relative -z-10"></div>
        </>

    )
}