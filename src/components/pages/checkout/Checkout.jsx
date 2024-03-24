import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Checkout.css";

const Checkout = ({ envioDeFormulario, orderId }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Los apellidos solo pueden contener letras")
      .required("Los apellidos son obligatorios"),
    phone: Yup.string()
      .matches(/^\d+$/, "El teléfono solo puede contener números")
      .required("El teléfono es obligatorio"),
    email: Yup.string()
      .email("Email inválido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: Yup.string()
      .required("Confirma tu contraseña")
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir"),
  });

  return (
    <div className="checkout-container">
      {orderId ? (
        <div>
          <h1>Gracias... tu número es {orderId} </h1>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            envioDeFormulario(values);
            resetForm();
          }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name" className="label">
                Nombre
              </label>
              <Field type="text" name="name" className="input-field" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="label">
                Apellidos
              </label>
              <Field type="text" name="lastName" className="input-field" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="label">
                Teléfono
              </label>
              <Field type="text" name="phone" className="input-field" />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <Field type="email" name="email" className="input-field" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <Field type="password" name="password" className="input-field" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="label">
                Confirmar Contraseña
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="input-field"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" className="submit-btn">
              Comprar
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default Checkout;
