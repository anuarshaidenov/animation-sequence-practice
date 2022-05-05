import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-[95%] max-w-6xl mx-auto py-10">
      <Link href="/">
        <a className="relative block w-32 h-10">
          <Image
            src="https://assets.codepen.io/2621168/logo_1.svg"
            alt="logo"
            layout="fill"
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
