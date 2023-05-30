import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

function Navbar() {
  return (
    <header className="fixed z-10 w-full border-b-[1px] bg-white py-4 shadow-sm">
      <Container
        className=" flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0"
      >
        <Logo />
        <Search />
        <UserMenu />
      </Container>
    </header>
  );
}

export default Navbar;
