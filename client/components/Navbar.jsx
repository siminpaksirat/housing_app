
import './NavStyle.css'

const NavBar = () => {
    return (
        <>

        <div className="nav-wrapper">

            <div className="nav-button">
                <button>
                    <a href="/">Home</a>
                </button>
            </div>

            <div className="nav-button">
                <button>
                   <a href="/properties">Properties</a>
                </button>
            </div>

            <div className="nav-button">
                <button>
                    <a href="/about">About</a>
                </button>
            </div>




        </div>


        </>
    )
}


export default NavBar;
