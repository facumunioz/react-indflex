import React from 'react';
import './styles.css';

const NavBar = () => {
    return (
    <div className="navegador">
        
        <nav class="navbar navbar-expand-lg navbar-light light">
            <div class="container-fluid">
              <a class="navbar-brand VelozIn" id='colorlogo' href="index.html">Indflex</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
{/*                  <ul class="navbar-nav">
                     <li class="nav-item">
                         <a class="nav-link active" aria-current="page" href="./paginas/nosotros.html">Nosotros</a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="./paginas/envios.html">Envios</a>
                     </li>
                     <li class="nav-item">
                          <a class="nav-link" href="./paginas/medidas.html">Medidas</a>
                     </li>
                     <li class="nav-item">
                          <a class="nav-link" href="./paginas/contacto.html">Contacto</a>
                     </li>
                 </ul> */}
              </div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
              </svg>
            </div>
        </nav>


        
    
     

    </div>
    );
};

export default NavBar;