import { FaBars, FaRegUserCircle } from "react-icons/fa";
export function Header(){
    return(
            <header className=" w-full h-16 bg-white-700 flex items-center justify-around mx-auto text-black ">
                <div id="menu">
                    <FaBars className="size-5" />
                </div>
                <div id="aba" className="text-gray-500">Inicio / Financeiro / Contas a pagar</div>
                <div id="profile">
                    <FaRegUserCircle className="size-9"  />
                </div>
            </header>
    )
}