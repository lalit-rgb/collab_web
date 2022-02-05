import './navigation.css'
import logo from '../assets/mannobgbig.png'
const Navigation =() => {
    return(
        <div class='nav-wrapper'>
            <nav>
                <img src={logo} alt="" height={40} width={40}/>
                <a href="">Why My Art Nation?</a>
                <a href="">Explore</a>
            </nav>
            <div class="sign">
                <div class='signup' ><text id='sup'>Sign In</text></div>
                <div class='signin' ><text id='sin'>Sign In</text></div>
            </div>
        </div>
    )
}

export default Navigation;