const Header = () => {
  return (
    <nav className="w-screen selection:bg-accent selection:text-background fixed h-20 flex px-16 sm:justify-between justify-center items-center bg-foreground">
      <p className=" text-background bg-[url('/favicon.svg')] bg-cover pantonbold uppercase font-extrabold text-2xl">
        Hasan Ali
      </p>
    </nav>
  );
};

export default Header;
