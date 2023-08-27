import RegisterAndLoginForm from "./pages/RegisterAndLoginForm";
import {useContext} from "react";
import {UserContext} from "./UserContext";
import Chat from "./pages/Chat";

export default function Routes() {
  const {username, id} = useContext(UserContext);

  if (username) {
    return <Chat />;
  }

  return (
    <RegisterAndLoginForm />
  );
}