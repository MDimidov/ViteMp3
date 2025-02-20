import { Menus } from "../../utils/utils.js";
import Logo from "../../assets/sound-icon.svg";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import SearchBar from "./SearchBar.jsx";

export default function Header() {
    return (
        <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A] mb-16">
            <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
                <a href="#" className="flex-center gap-x-3 z-[999] relative">
                    <img src={Logo} alt="" className="size-8 .logo" />
                    <h3 className="text-lg font-semibold">ViteMp3</h3>
                </a>
                <ul className="gap-x-1 lg:flex hidden">
                    {Menus.map((menu) => (
                        <DesktopMenu menu={menu} key={menu.name} />
                    ))}
                </ul>
                <div className="flex-center gap-x-5">
                    <SearchBar classParameter="md:block" />

                    <button
                        aria-label="sign-in"
                        className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center min-w-[73px] text-center"
                    >
                        Sign In
                    </button>
                    <div className="lg:hidden">
                        <MobMenu Menus={Menus} />
                    </div>
                </div>
            </nav>
        </header>
    )
}