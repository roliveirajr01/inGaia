import {React, useEffect, useState } from 'react';
import { ThumbDesktop, ThumbTablet, ThumbMobile, ContainerThumbs } from './Style'
import IconDesktop from '../../img/icon-desktop.png';
import IconMobile from '../../img/icon-mobile.png';
import IconTablet from '../../img/icon-tablet.png';

const images = {
    desktop: IconDesktop,
    mobile: IconMobile,
    tablet: IconTablet
}
const ThumbnailsContain = function (props) {
    const [showInfo, setshowInfo] = useState(false)
    const buttonHandle = function() {
        setshowInfo(current => !current)
    }

    const [showPopup, setShowpopup] = useState(false)
    const popupShow = function() {
        setShowpopup(current => !current)
    }
    return (
        <ContainerThumbs>
            <ThumbDesktop>
                <div className="top-thumb">
                    <img src={images.desktop} />
                    <h3>Site Responsivo DESKTOP</h3>
                </div>
                <div className={`description-thumb ${showInfo ? 'show' : 'hide'}`}>
                    <p>Quando pressionado o botão Leia mais... o restante da informação
                    deverá aparecer em scroll down. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin semper at enim eget suscipit. Sed congue nisi ac
                    purus placerat maximus sit amet molestie neque. Suspendisse imperdiet
                    velit sit amet erat vestibulum varius. Pellentesque rhoncus pretium neque,
                    volutpat molestie nibh hendrerit sit amet. Vestibulum id justo a enim maximus
                    fermentum eget nec libero. Morbi tempus, lacus in molestie posuere, justo metus
                    accumsan sapien, vitae tincidunt purus neque quis dolor. Sed hendrerit arcu a diam
                    porttitor sagittis. Sed faucibus ligula in lorem aliquet, at condimentum est gravida.
                    Nullam tempor lacinia metus, id mattis lectus posuere ut. Vivamus vel nisi nec leo
                    fermentum mollis. In fringilla eget mauris ut porttitor.</p>
                </div>
                <div className="button">
                    <button onClick={buttonHandle} type="button">{showInfo ? 'Ler menos...' : 'Ler mais...'}</button>
                </div>
            </ThumbDesktop>

            <ThumbTablet>
                <div className="top-thumb">
                    <img src={images.tablet} />
                    <h3>Site Responsivo TABLET</h3>
                </div>
                <div className="description-thumb">
                    <p></p>
                </div>
                <div className="button">
                    <button onClick={popupShow}>Leia mais...</button>
                </div>

                
            </ThumbTablet>

            <ThumbMobile>
                <div className="top-thumb">
                    <img src={images.mobile} />
                    <h3>Site Responsivo MOBILE</h3>
                </div>
                <div className="description-thumb">
                    <p></p>
                </div>
                <div className="button">
                    <button href="#">Alterar tema</button>
                </div>
            </ThumbMobile>
        </ContainerThumbs>
    )
}

export default ThumbnailsContain;