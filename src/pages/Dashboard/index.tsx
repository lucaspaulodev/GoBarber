import React, { useState } from 'react'

import { FiPower, FiClock } from 'react-icons/fi'

import { Container, Header, HeaderContainer, Profile, Content, Schedule, Calendar, NextAppointment, Section, Appointment } from './styles'

import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  
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

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Hoje</span>
            <span>Hoje</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="" alt=""/>
              <strong>Lucaas Paulo</strong>
              <span>
                <FiClock/>
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock/>
                08:00
              </span>

              <div>
                <img src="" alt=""/>
                <strong>Lucas Paulo</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock/>
                08:00
              </span>

              <div>
                <img src="" alt=""/>
                <strong>Lucas Paulo</strong>
              </div>
            </Appointment>
          </Section>

        </Schedule>

        <Calendar/>
      </Content>
    </Container>
  )
}

export default Dashboard;