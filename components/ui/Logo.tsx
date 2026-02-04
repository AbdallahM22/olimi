import Image from "next/image";
import logo from "../../public/olimi-logo.png";

const Logo = () => {
  return <Image src={logo} width={100} height={50} alt="olimi-logo" />;
};

export default Logo;
