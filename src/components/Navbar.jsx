import React, { useEffect } from "react";
import Logo from '../img/Logo.png';
import '../styles/Navbar.css';

// Crear algoritmo para medir la longitud de la navbar expandible, max de 3 columnas y que el usuario pueda crear tantas novedades como quiera
// Crear algoritmo de busqueda en el sitio

export const Navbar = () => {

    useEffect(() => {
        if (document.getElementsByClassName("containerDropdown").length == 1) {

        } else if (document.getElementsByClassName("containerDropdown").length == 2) {

        } else if (document.getElementsByClassName("containerDropdown").length == 3) {
            const dropdown = document.getElementById("drop1").querySelector(".dropdown-menu"); //.dropdown-menu.show
            dropdown.sty
        }
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex justify-content-center align-items-center" href="/">
                        <img src={Logo} alt="Logo" width="60" height="70" className="imgLogo" /> &nbsp;
                        <h1 className="title"> ITSC - Instituto Técnico <br /> Superior Córdoba</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    <i className="bi bi-house"></i>
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item dropdown" id="drop1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-info-circle"></i>
                                    Sobre nosotros
                                </a>
                                <ul className="dropdown-menu">
                                    <div className="containerDropdown">
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-info-circle iconDrop"></i>
                                            Nosotros
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-easel iconDrop"></i>
                                            Oferta educativa 2024
                                        </a></li>
                                        <li><a className="dropdown-item" href="/all-careers">
                                            <i className="bi bi-mortarboard iconDrop"></i>
                                            Carreras
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-layout-text-sidebar-reverse iconDrop"></i>
                                            Planes de estudios
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-people iconDrop"></i>
                                            Estudiantes
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-mortarboard iconDrop"></i>
                                            Egresados
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi-piggy-bank iconDrop"></i>
                                            Cooperadora
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-calendar-event iconDrop"></i>
                                            Exámenes 2023
                                        </a></li>
                                    </div>
                                    <div className="containerDropdown">
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-calendar-event iconDrop"></i>
                                            Exámenes 2024
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-newspaper iconDrop"></i>
                                            Resoluciones
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-person-rolodex iconDrop"></i>
                                            Ser técnico
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-images iconDrop"></i>
                                            Fotogalería
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-download iconDrop"></i>
                                            Material para descargar
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-patch-question iconDrop"></i>
                                            Preguntas frecuentes
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-person-plus iconDrop"></i>
                                            Convocatorias VIGENTES
                                        </a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-person-x-fill iconDrop"></i>
                                            Convocatorias NO VIGENTES
                                        </a></li>
                                    </div>
                                    <div className="containerDropdown">
                                        <li><a className="dropdown-item" href="#">
                                            <i className="bi bi-book-half iconDrop"></i>
                                            ACTAS DICTÁMEN
                                        </a></li>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    <i className="bi bi-person"></i>
                                    Contacto
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Ingrese lo que desee buscar en el sitio..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="button"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}