import React from 'react';
import { Container, Content } from './styles';
import { 
  FaTimes, 
  FaHome,
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa';
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
          <SidebarItem Icon={FaHome} Text="História e Cultura" />
        </Link>
        <Link to="/atracoes" onClick={closeSidebar}>
          <SidebarItem Icon={FaChartBar} Text="Atrações Turísticas" />
        </Link>
        <Link to="/gastronomia" onClick={closeSidebar}>
          <SidebarItem Icon={FaUserAlt} Text="Gastronomia" />
        </Link>
        <Link to="/hospedagem" onClick={closeSidebar}>
          <SidebarItem Icon={FaEnvelope} Text="Hospedagem" />
        </Link>
        <Link to="/saude" onClick={closeSidebar}>
          <SidebarItem Icon={FaRegCalendarAlt} Text="Saúde e Bem-Estar" />
        </Link>
        <Link to="/hospitais" onClick={closeSidebar}>
          <SidebarItem Icon={FaIdCardAlt} Text="Hospitais e Clínicas" />
        </Link>
        <Link to="/escolas" onClick={closeSidebar}>
          <SidebarItem Icon={FaRegFileAlt} Text="Escolas e Faculdades" />
        </Link>
        <Link to="/servicos" onClick={closeSidebar}>
          <SidebarItem Icon={FaRegSun} Text="Serviços Essenciais" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
