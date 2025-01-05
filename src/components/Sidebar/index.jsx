import React from 'react';
import { Container, Content } from './styles';
import { FaTimes } from 'react-icons/fa';
import { MdMuseum } from "react-icons/md";
import { PiBinocularsFill } from "react-icons/pi";
import { IoRestaurant } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import SidebarItem from '../SidebarItem';
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to="/" onClick={closeSidebar}>
          <SidebarItem Icon={MdMuseum} Text="História e Cultura" />
        </Link>
        <Link to="/atracoes" onClick={closeSidebar}>
          <SidebarItem Icon={PiBinocularsFill} Text="Atrações Turísticas" />
        </Link>
        <Link to="/gastronomia" onClick={closeSidebar}>
          <SidebarItem Icon={IoRestaurant} Text="Gastronomia" />
        </Link>
        <Link to="/hospedagem" onClick={closeSidebar}>
          <SidebarItem Icon={FaHotel} Text="Hospedagem" />
        </Link>
        <Link to="/saude" onClick={closeSidebar}>
          <SidebarItem Icon={MdOutlineSportsGymnastics} Text="Saúde e Bem-Estar" />
        </Link>
        <Link to="/hospitais" onClick={closeSidebar}>
          <SidebarItem Icon={FaRegHospital} Text="Hospitais e Clínicas" />
        </Link>
        <Link to="/escolas" onClick={closeSidebar}>
          <SidebarItem Icon={IoSchool} Text="Escolas e Faculdades" />
        </Link>
        <Link to="/servicos" onClick={closeSidebar}>
          <SidebarItem Icon={AiFillMedicineBox} Text="Serviços Essenciais" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
