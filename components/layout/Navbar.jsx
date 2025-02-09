"use client";
import React, { useEffect, useState} from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  FaHome,
  FaHandsHelping,
  FaMotorcycle,
  FaUserCircle,
  FaCoins,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import ThemeToggle from "../Theme";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("");
  const [logo,setLogo]=useState("")
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(); // State for tracking active menu item

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Features", icon: <FaHandsHelping />, path: "/features" },
    { name: "Why Us", icon: <FaMotorcycle />, path: "/why-us" },
    { name: "Team Page", icon: <FaUsers />, path: "/team" },
    { name: "Contact Us", icon: <FaEnvelope />, path: "/contact_us" },
  ];

  const handleNavigation = (path, index) => {
    setActiveIndex(index); // Set the active index when a menu item is clicked
    router.push(path);
  };

  // Load theme from localStorage
  useEffect(() => {
    setLogo(localStorage.getItem("theme")=="dark"?"./logo2.png" : "./logo1.png"); // Default to light if not set
  }, []);

  // Function to handle theme change
  const handleThemeChange = () => {
    setTheme(localStorage.getItem("theme")=="dark"?"light":"dark")
    setLogo(theme=="dark"?"./logo1.png" : "./logo2.png"); // Update state
  };


  return (
    <ClerkProvider>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* Image updates based on theme */}
            <Link href="/">
            <Image
              src={logo}
              width={90}
              height={100}
              alt="Tb Space"
            />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/features">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="/why-us">
              Why us?
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact_us">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {/* Call theme change function */}
          <NavbarItem onClick={handleThemeChange} className="lg:flex">
            <ThemeToggle />
          </NavbarItem>
          <NavbarItem>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
         {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={activeIndex === index ? "primary" : "foreground"} // Apply primary color to the active item
              className="w-full flex items-center cursor-pointer"
              onClick={() => handleNavigation(item.path, index)}
              size="lg"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </ClerkProvider>
  );
}
