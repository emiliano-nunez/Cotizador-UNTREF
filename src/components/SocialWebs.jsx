import React from 'react'
import '../App.css'

function SocialWebs() {
    return (
        <section className='socialWebs'>
            <div className='segmento'>
                <img src="./src/assets/yourprop-bg.ico" alt="logo" />
                <h2>Somos YourProp</h2>
                <p>Descubre nuestras propiedades. Cotiza tu propiedad. Nuestra web es tu mejor aliado al momento de sumergirse al mundo de la inversión de propiedades.</p>
                <p>Con 22 años de experiencia en el rubro. ayudamos a más de 500 personas por día a cotizar propiedades.</p>
                <br />
                <p className='webs'>Siguenos en nuestras redes. Y descubre nuevas oportunidades de inversión</p>
                <div>
                    <a href="https://www.facebook.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 54 54">
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                        </svg>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width="30" height="30" viewBox="0 0 54 54">
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SocialWebs
