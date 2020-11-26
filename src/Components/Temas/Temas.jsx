// import React, { Fragment } from 'react';
import React from "react";
import Logo from "../img/logo.png";
import add from "../img/Home/add.png";
import avatar from "../img/Home/avatar-01.png";
import card from "../img/Home/card.png";
import home from "../img/Home/home.png";
import mdi_search from "../img/Home/mdi_search.png";
import search from "../img/Home/search.png";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Temas/Temas.css";

const Temas = () => {
  return (
    <Fragment>
      <section className="animsition">
        <div className="page-wrapper">
          <div className="page-container">
            <header className="header-desktop">
              <div className="logo">
                <img src={Logo} />
              </div>
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <div className="header-wrap">
                    <form className="form-header" action="" method="POST">
                      <input
                        className="au-input au-input--xl"
                        type="text"
                        name="search"
                        placeholder="Buscar.."
                      />
                      <button className="au-btn--submit" type="submit">
                        <img src={mdi_search} />
                      </button>
                    </form>
                    <div className="header-button">
                      <div className="account-wrap">
                        <div className="account-item">
                          <div className="image">
                            <img src={avatar} />
                          </div>
                          <div className="content">Rodrigo Perez</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </section>

      <div className="select">
        <select>
          <option value=""></option>
          <option value="temas">Temas</option>
        </select>
        <select>
          <option value=""></option>
          <option value="tipos entregables">Tipos entregables</option>
        </select>
        <select>
          <option value=""></option>
          <option value="areas">Áreas</option>
        </select>
        <select>
          <option value=""></option>
          <option value="tipos de opciones">Tipos de opciones</option>
        </select>
        <select>
          <option value=""></option>
          <option value="nivel autorizacion">Nivel autorización</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tema</th>
            <th scope="col">Area cliente</th>
            <th scope="col">Area relacionada</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">25/11/2020</th>
            <td>Permisos ambientales para proyecto de desaladora</td>
            <td>Ambiental, Proyectos</td>
            <td>Gerencia de Energías Renovables</td>
          </tr>
          <tr>
            <th scope="row">25/11/2020</th>
            <td>Permisos ambientales para proyecto de desaladora</td>
            <td>Ambiental, Proyectos</td>
            <td>Gerencia de Energías Renovables</td>
          </tr>
          <tr>
            <th scope="row">25/11/2020</th>
            <td>Permisos ambientales para proyecto de desaladora</td>
            <td>Ambiental, Proyectos</td>
            <td>Gerencia de Energías Renovables</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
export default Temas;
