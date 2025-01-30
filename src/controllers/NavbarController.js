// src/controllers/NavbarController.js
import { navbarLinks } from "../models/NavbarModel";
import { useLocation } from "react-router-dom";

export const useNavbarController = () => {
  const location = useLocation();
  
  // Aktif link kontrolü
  const isActive = (path) => location.pathname === path;

  return { links: navbarLinks, isActive };
};