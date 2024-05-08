import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import '../styles/DetailedNew.css';
import Dates from '../functions/Dates';

export const DetailedNew = () => {
    return (
        <>
            <Navbar />
            <section className="detailedNew">
                <article>
                    <h1>Titulo de la noticia</h1>
                    <p className="dateP">Fecha de creación: {Dates.getDate(new Date())}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero ex nobis rem, culpa non? Quam at in facere quod illum consequatur veritatis pariatur, eius dolore excepturi fuga fugit delectus, repudiandae tenetur adipisci vel atque quo enim inventore explicabo impedit laboriosam. Praesentium sed saepe repellat ea officia ab possimus molestias odio consequuntur provident voluptatum minima vero totam tempora beatae commodi, optio sint sunt, esse qui illo. Voluptatem non, ut quam facere, quis commodi fugiat quasi distinctio obcaecati facilis nobis. Neque quaerat, blanditiis explicabo nobis porro id iste, ipsa impedit reiciendis unde nulla nesciunt harum ducimus quibusdam necessitatibus itaque? Porro, distinctio.</p>
                    <a href="">Hacia: www.com</a>
                    <img src="https://images.unsplash.com/photo-1712781797301-ec9ee12b52b4?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </article>
            </section>
            <Footer />
        </>
    );
}