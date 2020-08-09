import React from "react";

import "./styles.css";
import Header from "../../components/Header";
import { TeacherItem } from "../../components/TeacherItem";


const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week-days">Dia da semana</label>
            <input type="text" id="week-days" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
        <TeacherItem></TeacherItem>
      </main>
    </div>
  );
};

export default TeacherList;
