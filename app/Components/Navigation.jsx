import React from "react"

const Navigation = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="space-x-6 hidden md:flex">
          <NavItem link="#" name="Pricing" />
          <NavItem link="#" name="About" />
          <NavItem link="#" name="Catalog" />
        </div>
        <Button />
      </div>
    </nav>
  )
}

const Logo = () => (
  <div className="navbar-logo">
    <span className="text-primary">Hasan</span>
    <span className="text-primary/40">Ali</span>
  </div>
)

const NavItem = ({ link, name }) => (
  <a href={link} className="navbar-item">
    {name}
  </a>
)

const Button = () => (
  <a
    href="#"
    className="hidden p-3 px-6 pt-2 text-primary bg-accent rounded-full md:flex"
  >
    Hire Me
  </a>
)

export default Navigation
