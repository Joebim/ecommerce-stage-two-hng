import { useState } from "react"
import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg'


export default function Dropdown({ text, Vector, menuOptions }) {
    const [toggleDropdown, setToggleDropdown] = useState(false)

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-[10px] cursor-pointer"
                onClick={() => { setToggleDropdown(!toggleDropdown) }}
            >
                <Vector />
                <p className="md:block hidden">{text}</p>
                <ArrowDown className="md:block hidden" />
            </div>

            <div className={`z-10 ${toggleDropdown ? "block" : "hidden"} mt-[20px] bg-white absolute divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                    {menuOptions?.map((option,id) => (
                        <li key={id}>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-primary dark:hover:text-white">{option.option}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
