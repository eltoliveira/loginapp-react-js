import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o email do usuário
  const [password, setPassword] = useState(""); // Estado para armazenar a senha do usuário

  const onSubmit = (e) => {
    e.preventDefault(); // Prevenir o envio padrão do formulário

    // Enviar dados do usuário para o servidor
    const data = {
      email: email, // Obter o email do estado
      password: password, // Obter a senha do estado
    };
  

    fetch("/login", {
      method: "POST", // Realizar uma solicitação POST para a rota "/login"
      body: JSON.stringify(data), // Enviar os dados do usuário como JSON
    })
      .then((response) => response.json()) // Analisar a resposta como JSON
      .then((data) => {
        // Verificar se o login foi bem-sucedido
        if (data.success) {
          // Iniciar uma sessão para o usuário
          sessionStorage.setItem("user_id", data.user_id);

          // Redirecionar o usuário para a página principal
          window.location.href = "/";
        } else {
          // Exibir uma mensagem de erro se o login falhar
          alert(data.error);
        }
      });
  };

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
