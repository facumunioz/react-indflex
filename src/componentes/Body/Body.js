import Portada from "../../assets/portada.png";
import IconEnvio from "../../assets/iconos-07.png";
import IconoAtn from "../../assets/iconos-08.png";
import IconStock from "../../assets/iconos-10.png";
import IconCalidad from "../../assets/iconos-09.png";
import './styles.css';

const Body = () => {
    return <body>
        <div>
         <img 
           src={Portada}
           alt="foto portada Indflex" 
           class="banner_inicio"
          />
        </div>
    
        <div class="grid">
            <h1 >¿Por qué IndFlex?</h1>
            <p >La calidad de las etiquetas tiene un rol muy importante en la vida útil de tu impresora 
                ya que logra menor fricción entre el cabezal y el material a imprimir.</p>
        
        </div>


        <h2>Comprar</h2>
        <p>Podes adquirir nuestros productos de dos maneras, por unidad o comprando de manera mayorista de a 3 rollos.</p>
        {/* Seccion ecomerce */}


        <div class="grid_medidas02">
         <div class="flex_medidas">
             <p>Envios gratis a todo el pais</p>
              <img src={IconEnvio} alt="Envios gratis a todo el pais" class="img-fluid"/>
         </div>
         <div class="flex_medidas">
             <p>Atencion personalizada 24hs</p>
             <img src={IconoAtn} alt="Atención personalizada 24hs" class="img-fluid"/>
         </div>
         <div class="flex_medidas">
             <p>Stock permanente</p>
             <img src={IconStock} alt="Stock permanente" class="img-fluid"/>
         </div>
         <div class="flex_medidas">
             <p>100% calidad</p>
             <img src={IconCalidad} alt="calidad" class="img-fluid"/>
        </div>
     </div>
    </body>
}

export default Body