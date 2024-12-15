import React from 'react'
import { Container, Content } from './styles'
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
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="História e Cultura" />
        <SidebarItem Icon={FaChartBar} Text="Atrações Turísticas" />
        <SidebarItem Icon={FaUserAlt} Text="Gastronomia" />
        <SidebarItem Icon={FaEnvelope} Text="Hospedagem" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Saúde e Bem-Estar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Hospitais e Clínicas" />
        <SidebarItem Icon={FaRegFileAlt} Text="Escolas e Faculdades" />
        <SidebarItem Icon={FaRegSun} Text="Serviços Essenciais" />
      </Content>
    </Container>
  )
}

export default Sidebar

