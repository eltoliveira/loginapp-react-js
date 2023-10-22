import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import firebase from "./firebase"
import "./teste"




const uniqueId = uuidv4();


const Login = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o email do usuário
  const [password, setPassword] = useState(""); // Estado para armazenar a senha do usuário


  const onSubmit = (e) => {
    e.preventDefault(); // Prevenir o envio padrão do formulário

    // Enviar dados do usuário para o servidor
    const data = {
      email: email, // Obter o email do estado
      password: password, // Obter a senha do estado
      userId: uniqueId, // Adicione o ID único aos dados

    };

    // Enviar dados para o Firestore
    const firestore = firebase.firestore();
    firestore.collection("users").doc(uniqueId).set(data, { merge: true });
    let userList;


      // Exibir a lista de usuários
      return (
        <div className="centered">
          <h1>Usuários registrados</h1>
          <ul>
            {userList.map((user) => (
              <li key={user.userId}>{user.email}</li>
            ))}
          </ul>
          <Button variant="primary" onClick={() => window.location.href = "teste.jsx"}>
            Logoff
          </Button>
        </div>
      );
    }


return (
<div className="centered"> {/* Aplicar a classe 'centered' para centralizar o conteúdo */}
<Form onSubmit={onSubmit}>
    <Form.Group controlId="email">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Insira seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
    {/* Um campo de entrada de email controlado que atualiza o estado 'email' */}
    </Form.Group>
    <Form.Group controlId="password">
    <Form.Label></Form.Label>
    <Form.Control type="password" placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
    {/* Um campo de entrada de senha controlado que atualiza o estado 'password' */}
    </Form.Group>
    <Button type="submit">Logar</Button>
    <Button variant="secondary" className="group1">Registrar</Button>
</Form>
</div>
)
};
export default Login;
