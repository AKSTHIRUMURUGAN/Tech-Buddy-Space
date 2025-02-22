"use client";
import React, { useEffect, useState} from "react";
import {
  FaHome,
 FaQuestion,
  FaUsers,
  FaRegListAlt
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
import { MdEmail } from "react-icons/md";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [logo,setLogo]=useState("./logo2.png")
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(); // State for tracking active menu item
  
  useEffect(()=>{
    setTheme(localStorage.getItem("theme"));
    setLogo((localStorage.getItem("theme")=="dark"?"./logo2.png" : "./logo1.png"));
  },[])

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Features", icon: <FaRegListAlt />, path: "/features" },
    { name: "Why Us", icon: <FaQuestion />, path: "/why-us" },
    // { name: "Team Page", icon: <FaUsers />, path: "/team" },
    { name: "Contact Us", icon: <MdEmail />, path: "/contact_us" },
  ];

  const handleNavigation = (path, index) => {
    setActiveIndex(index); // Set the active index when a menu item is clicked
    router.push(path);
  };

  // Load theme from localStorage
  // useEffect(() => {
  //   setLogo(localStorage.getItem("theme")=="dark"?"./logo2.png" : "./logo1.png"); // Default to light if not set
  // }, []);

  // Function to handle theme change
  const handleThemeChange = () => {
    localStorage.setItem("theme",localStorage.getItem("theme")=="dark"?"light":"dark")
    setLogo(localStorage.getItem("theme")=="dark"?"./logo2.png" : "./logo1.png");
  };


  return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* Image updates based on theme */}
            <Link onClickCapture={()=>{router.push("/")}}>
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
            <Link onClickCapture={()=>{router.push("/")}}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link onClickCapture={()=>{router.push("/features")}}>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link onClickCapture={()=>{router.push("/why-us")}}>
              Why us?
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link onClickCapture={()=>{router.push("/contact_us")}}>
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          {/* Call theme change function */}
          <NavbarItem onClick={handleThemeChange} className="lg:flex">
            <ThemeToggle theme={theme}/>
          </NavbarItem>
          {/* <NavbarItem>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </NavbarItem> */}
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
  );
}