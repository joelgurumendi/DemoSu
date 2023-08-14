import { Link } from "react-router-dom";
import { Button, HeadContainer, MainContainer } from "./Inicio.styles";
import { Footer, Header } from "../../component";

const Inicio = () => {
  return (
    <MainContainer>
      <HeadContainer>
        <Header />
      </HeadContainer>
      <Link to="/home">
        <Button>!COMENCEMOS</Button>
      </Link>
      <Footer />
    </MainContainer>
  );
};

export default Inicio;
