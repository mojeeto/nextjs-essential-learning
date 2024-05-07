import logoImage from "@/assets/logo.png";
import Link from "next/link";

const Logo: React.FC<{ className: string }> = ({ className }) => {
  return (
    <Link href="/" className={className}>
      <img src={logoImage.src} alt="A plate with food on it." />
      NextLevel Food
    </Link>
  );
};

export default Logo;
