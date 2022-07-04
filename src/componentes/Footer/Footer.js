import Logo from "../../assets/Logo-02.svg"
import Facebook from "../../assets/redes-sociales01.png"
import Instagram from "../../assets/redes-sociales02.png"
import WhatsApp from "../../assets/redes-sociales03.png"
import './styles.css';

const Footer = () => {
    return <footer>
        <div class="">
            <img src={Logo} alt="Logo footer" class="logofooter"/>
        </div>

        <div class="grid_footer">
            <h3 class="">Redes Sociales</h3>
            <ol class="iconos">
             <li>
                 <a href="https://www.facebook.com/" target="_blank">
                     <img class="icono-footer" src={Facebook} alt="Facebook"/>
                 </a>
             </li>
             <li>
                 <a href="https://www.instagram.com/" target="_blank">
                     <img class="icono-footer" src={Instagram} alt="Instagram"/>
                 </a>
             </li>
              <li>
                 <a href="">
                     <img class="icono-footer" src={WhatsApp} alt="WhatsApp"/>
                 </a>
                </li>
            </ol>
        </div>

    </footer>
}

export default Footer