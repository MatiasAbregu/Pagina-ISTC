import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Career } from "../components/Career";
import '../styles/AllCareers.css';

export const AllCareers = () => {
    return (
        <>
            <Navbar />
            <section className="allCareersSection">
                <h2>Carreras</h2>
                <article className="boxCareers">
                    <Career type={"Tecnicatura"} state={true} title={"Desarrollador de Software"} img={"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Modalidad combinada"} duration={"3 años"} 
                    onclick={() => window.location.href = `/careers/${1}`} />
                    <Career type={"Tecnicatura"} state={false} title={"Administración"} img={"https://images.unsplash.com/photo-1632406898177-95f7acd8854f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Modalidad combinada"} duration={"2 años y medio"} />
                    <Career type={"Tecnicatura"} state={true} title={"Enfermería"} img={"https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Presencial"} duration={"3 años"} />
                    <Career type={"Tecnicatura"} state={true} title={"Desarrollador de Software"} img={"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Modalidad combinada"} duration={"3 años"} />
                    <Career type={"Tecnicatura"} state={false} title={"Administración"} img={"https://images.unsplash.com/photo-1632406898177-95f7acd8854f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Modalidad combinada"} duration={"2 años y medio"} />
                    <Career type={"Tecnicatura"} state={true} title={"Enfermería"} img={"https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} mode={"Presencial"} duration={"3 años"} />
                </article>
            </section>
            <Footer />
        </>
    );
}