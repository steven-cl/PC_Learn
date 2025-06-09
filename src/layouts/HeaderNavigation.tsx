import logo from '@assets/logo.png'
import { Link } from 'react-router-dom'

const HeaderNavigation = () => {
    return (
        <div className="bg-black navBar items-center">
            <div className="flex-1/4">
                <Link to="/" className="flex flex-row justify-self-center ">
                    <img src={logo} alt="Logo" className="h-10 logo" />
                </Link>
            </div>
            <div className="flex-3/4">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row flex-1/4 justify-end">
                        <Link to="/" className="basis-1/12">Home</Link>
                        <Link to="/about" className="basis-1/12 pr-20">About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavigation
