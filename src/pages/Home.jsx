import React from "react";
import { Navbar } from "../components/Navbar";
import '../styles/Home.css';
import { New } from "../components/New";
import { Career } from "../components/Career";
import { Map } from "../components/Map";
import { Footer } from "../components/Footer";
import { Textfield } from "../components/Textfield";

export const Home = () => {
    document.title = "ITSC - Inicio";

    return (
        <>
            <Navbar />
            <section className="front-page">
                <article>
                    <h2>Donde cada experiencia se convierte en un viaje de aprendizaje</h2>
                </article>
            </section>
            <section className="news">
                <h2>Novedades</h2>
                <article className="newsArticles">
                    <New img={"https://plus.unsplash.com/premium_photo-1712128931969-5075b31d9380?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} date={new Date()} title={"NUEVOS ANALÍTICOS"} info={"Estimado/as. Llegaron a nuestro instituto una nueva tanda de ANALÍTICOS DEFINITIVOS EN PAPEL MONEDA   Los listados están publicados en el Menu - EGRESADOS de Lunes a viernes de 19:00 a 22 hs  Sede IPEM N° 6. “Juan Filloy” B ° Gral. Paz Dirección: Viamonte 1005 - B° Gral..."} eventClick={() => window.location.href = `/news/${1}`} />
                    <New img={"https://images.unsplash.com/photo-1711907392527-4a895b190b61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} date={new Date()} title={"CARRERAS CON CUPOS ANOTATE!!!"} info={"No te pierdas la oportunidad de estudiar con nosotros! Aún tenemos cupos en las Tecnicaturas Superiores de:   Administración:  Inscripción Presencial: de Lunes a viernes de 19:00 a 22 hs  Sede IPEM N° 6. “Juan Filloy” B ° Gral. Paz Dirección: Viamonte 1005 - B° Gr..."} eventClick={() => window.location.href = `/news/${2}`} />
                    <New img={"https://images.unsplash.com/photo-1711968558539-1bcc5b6222db?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} date={new Date()} title={"ATENCIÓN - TODAS LAS CARRERAS- MATRICULACIÓN 2024"} info={"Info para ENFERMERÍA y las demas carreras. Si no completaste tu matriculación definitiva en diciembre del 2023, acercate desde el lunes 19/02 a: RÍO NEGRO 77 B° ALBERDI Del 19 al 23 de Febrero del 2024 De 9 a 17 hs    Documentación a presentar ..."} eventClick={() => window.location.href = `/news/${3}`} />
                </article>
                <button type="button" className="btnNews" onClick={() => window.location.href = "/all-news"}>Ver más novedades...</button>
            </section>
            <section className="careers">
                <h2>Carreras</h2>
                <article>
                    <Career type={"Tecnicatura"} state={true} title={"Desarrollador de Software"} img={"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Combinada"} duration={"3 años"}
                        onclick={() => window.location.href = `/careers/${1}`} />
                    <Career type={"Tecnicatura"} state={false} title={"Administración"} img={"https://images.unsplash.com/photo-1632406898177-95f7acd8854f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Combinada"} duration={"2 años y medio"} />
                    <Career type={"Tecnicatura"} state={true} title={"Enfermería"} img={"https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Presencial"} duration={"3 años"} />
                </article>
                <button type="button" className="btnCareers" onClick={() => window.location.href = "/all-careers"}>Ver más carreras...</button>
            </section>
            <section className="location">
                <h2>Ubicación</h2>
                <Map />
            </section>
            <section className="consults">
                <h2>¡Escribenos tu consulta!</h2>
                <div className="box">
                    <form action="">
                        <Textfield type={"text"} placeholder={"Escribe tu nombre y apellido"} />
                        <Textfield type={"email"} placeholder={"Escribe tu email"} />
                        <Textfield type={"text"} placeholder={"Escribe el motivo"} />
                        <Textfield multiline={true} placeholder={"Escribe tu consulta"} />
                        <button type="submit">Enviar</button>
                    </form>
                    <h3>¡Si tienes alguna consulta no dudes en escribirnos!</h3>
                </div>
            </section>
            <Footer />
        </>
    );
}