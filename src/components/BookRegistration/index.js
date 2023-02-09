import PropTypes from "prop-types";
import React from "react";
import { Formik, Form, Field } from "formik";
import api from "../../services/api";
import styles from "./styles.css";

const BookRegistration = ({ handleSubmit, initialValues }) => {
  <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
    <Form className={"Form"} onSubmit={handleSubmit}>
      <h1 className={"Form-Titulo"}>Cadastro de Livros</h1>

      <div className="Form-Group">
        <Field
          className="Form-Field"
          type="text"
          name="title"
          placeholder="Título"
        />
      </div>

      <div className="Form-Group">
        <Field
          className="Form-Field"
          type="text"
          name="author"
          placeholder="Autor"
        />
      </div>

      <div className="Form-Group">
        <Field
          className="Form-Field"
          type="text"
          name="publisher"
          placeholder="Editora"
        />
      </div>

      <div className="Form-Group">
        <Field
          className="Form-Field"
          type="text"
          name="edition"
          placeholder="Edição"
        />
      </div>

      <div className="Form-Group">
        <Field
          className="Form-Field"
          type="text"
          name="genre"
          placeholder="Gênero"
        />
      </div>

      <button className="Form-Btn" type="submit">
        Cadastrar
      </button>
    </Form>
  </Formik>;
};

BookRegistration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default BookRegistration;
