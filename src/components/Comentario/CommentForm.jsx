// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import "./CommentForm.css"; // Importa o arquivo CSS
// //import { PiTextAlignCenter } from "react-icons/pi";
// //import { FaAlignCenter } from "react-icons/fa";

// const CommentForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     comment: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_gojaqvz", // Substitua pelo Service ID do EmailJS
//         "template_5xpwkdl", // Substitua pelo Template ID criado
//         formData, // Dados do formulário
//         "lRu-66eRKwjBoCl9y" // Substitua pela Public Key do EmailJS
//       )
//       .then(
//         (result) => {
//           alert("Comentário enviado com sucesso!");
//           setFormData({ name: "", email: "", comment: "" }); // Limpa o formulário
//         },
//         (error) => {
//           alert("Ocorreu um erro ao enviar o comentário. Tente novamente.");
//         }
//       );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <p style={{textAlign: 'center', marginBottom: '4px'}}><strong>Deixe aqui seu comentário e sugestão</strong></p>
//         <label>Nome:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>E-mail:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Comentário:</label>
//         <textarea
//           name="comment"
//           value={formData.comment}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//   );
// };

// export default CommentForm;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./CommentForm.css";
const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_gojaqvz",
        "template_5xpwkdl",
        {
          name: formData.name,
          email: formData.email,
          comment: formData.comment,
        },
        "lRu-66eRKwjBoCl9y"
      )
      .then(() => {
        alert("Comentário enviado com sucesso!");
        setFormData({ name: "", email: "", comment: "" });
      })
      .catch((error) => {
        console.error("Erro EmailJS:", error);
        alert("Erro ao enviar. Verifique o console.");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <p style={{ textAlign: "center" }}>
        {" "}
        <strong>Deixe aqui seu comentário e sugestão</strong>{" "}
      </p>{" "}
      <label>Nome:</label>{" "}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />{" "}
      <label>E-mail:</label>{" "}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />{" "}
      <label>Comentário:</label>{" "}
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        required
      />{" "}
      <button type="submit">Enviar</button>{" "}
    </form>
  );
};
export default CommentForm;
