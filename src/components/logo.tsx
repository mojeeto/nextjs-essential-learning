import logoImage from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC<{ className: string }> = ({ className }) => {
  return (
    <Link href="/" className={className}>
      <Image src={logoImage} alt="A plate with food on it." priority />
      NextLevel Food
    </Link>
  );
};

export default Logo;
