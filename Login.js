import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase.js";

const registerUser = async (email, senha) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    console.log("Usuário criado:", userCredential.user);
  } catch (erro) {
    console.error("Erro ao criar usuário:", erro.message);
  }
};
