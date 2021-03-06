import React, { useState } from 'react';
import iconAngleLeft from '../images/icon-angle-left.svg';
import iconAngleRight from '../images/icon-angle-right.svg';
import data from '../slider.json';

const Header = () => {
    const [current, setCurrent] = useState(0);
    const [headerSlides] = useState(data);

    const prev = () => {
        setCurrent(current === 0 ? headerSlides.length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current != headerSlides.length - 1 ? current + 1 : 0)
    }

    return (
        <div className="header">
            <div className="header__image__container">
                <img src={require(`../images/desktop-` + headerSlides[current].image)} alt="Contemporary furniture" className="image" />
                <img src={require(`../images/mobile-` + headerSlides[current].image)} alt="Contemporary furniture" className="image image--mobile" />
            </div>

            <div className="header__textbox">
                <div className="header__pagination__arrows">
                    <button aria-label="Go to previous slide" onClick={prev}>
                        <img src={iconAngleLeft} alt="Angle left icon" />
                    </button>
                    <button aria-label="Go to next slide" onClick={next}>
                        <img src={iconAngleRight} alt="Angle right icon" />
                    </button>
                </div>
                <h1 className="header__textbox__heading">{headerSlides[current].heading}</h1>
                <p className="header__textbox__subheading">{headerSlides[current].subheading}</p>
                <a href="#" className="header__textbox__link">
                    <span>Shop Now</span> 
                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Header;