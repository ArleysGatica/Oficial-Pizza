import React from 'react';
import './header.css';
import Logo from '../../asset/Logo.png'

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="container_img">
                    <img src= {Logo} alt="" />
                </div>
                <ul className="nav_ul">
                    <li>Cursos</li>
                    <li>Proyectos</li>
                    <li>Comunidad</li>
                    <li>Precios</li>
                </ul>
            </nav>
            <nav className="nav_buttons">
                <ul className="nav_buttons_ul">
                    <button className = "btn_register">Registro</button>
                    <button className="btn_login">Iniciar Seccion</button>
                </ul>
            </nav>
        </header>

    );
}