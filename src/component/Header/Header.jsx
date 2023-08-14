import { HeadContainer, Image } from "./Header.styles";
import icon from "../../assets/Icons.png"
const Header = () => {
  return (
    <HeadContainer>
      <Image src={icon} alt="Icon" />
      <h1>DEMO</h1>
    </HeadContainer>
  );
};

export default Header;
