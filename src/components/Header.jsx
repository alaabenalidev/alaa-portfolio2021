import { MoonIcon, MenuAlt3Icon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>
                    <span className="font-semibold text-blue-700 text-xl tracking-tight">Alaa Eddine Ben Ali</span>
                </div>
                <div className="flex lg:hidden">
                    <MoonIcon className="h-6 w-6 text-gray-500 hover:text-blue-700 cursor-pointer m-2"/>
                    <MenuAlt3Icon className="h-6 w-6 text-gray-500 hover:text-blue-700 cursor-pointer m-2"/>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
                    <div className="text-sm lg:flex-grow">
                        <a href="javascript:void(0);"
                           className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="javascript:void(0);"
                           className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="javascript:void(0);"
                           className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a>
                    </div>
                    <div>
                        <MoonIcon className="h-6 w-6 text-gray-500 hover:text-blue-700 cursor-pointer"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
