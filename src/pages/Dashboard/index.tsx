import React from 'react'

import { FiPower } from 'react-icons/fi'

import { Container, Header, HeaderContainer, Profile } from './styles'

import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth()
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <img src={logoImg} alt="GoBarber Logo"/>

          <Profile>
            <img src={user.avatar_url} alt="Lucas Paulo"/>
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower/>
          </button>
        </HeaderContainer>
      </Header>
    </Container>
  )
}

export default Dashboard;