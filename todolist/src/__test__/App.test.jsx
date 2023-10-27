import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

const mockUserResponse = {
  id: 1,
  name: "Pepe",
  lastname: "pepe@gmail.com",
  password: "pepe12345",
  createdAt: "2023-10-25T13:58:09.444Z",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/758.jpg",
};

describe("Render App component", () => {
  it("Test App flow", () => {
    // llamando y ejecutando al componente
    render(<App />); // estamos en sign up
    // recordermos que screen es igual a la pantalla actual
    const title = screen.getByText("Crear Cuenta");
    const button = screen.getByLabelText("Crear cuenta");
    // debemos esperar que title exista en el document
    expect(title).toBeInTheDocument();
    // estamos dando click al boton
    fireEvent.click(button);
    // debemos verificar que existar 4 mensajes de error
    // all = todos
    const errors = screen.getAllByText("Este campo es requerido");
    expect(errors).toHaveLength(4);
  });

  it("Test SignUp", () => {
    const response = {
      json: vi.fn().mockResolvedValue(mockUserResponse),
    };

    global.fetch = vi.fn().mockResolvedValue(response);

    render(<App />);

    const inputName = screen.getByLabelText("name");
    const inputLastname = screen.getByLabelText("lastname");
    const inputEmail = screen.getByLabelText("email");
    const inputPassword = screen.getByLabelText("password");

    fireEvent.change(inputName, { target: { value: "Pepe" } });
    fireEvent.change(inputLastname, { target: { value: "Perez" } });
    fireEvent.change(inputEmail, { target: { value: "pepe@gmail.com" } });
    fireEvent.change(inputPassword, { target: { value: "pepe12345" } });

    const button = screen.getByLabelText("Crear cuenta");
    fireEvent.click(button);
  });
});
