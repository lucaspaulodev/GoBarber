import React, {useCallback} from 'react';
import { FiMail, FiUser, FiArrowLeft, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup';


import { Container, Content, Background } from './styles' 
import logoImg from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

const SignUp: React.FC = () => {

    const handleSubmit = useCallback(async (data: object) => {
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
                password: Yup.string().min(6, 'A senha deve ter no mínimo 6 digitos'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })
        } catch(err) {
            console.log(err);
        }
    }, [])

    return(
        <Container>
            <Background/>
            <Content>
                <img src={logoImg} alt="GoBarber"/>
    
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
    
                    <Input name="email" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="Email"/>
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="login">
                    <FiArrowLeft/>
                    Voltar para logon
                </a>
    
            </Content>
        </Container>
    );
}

export default SignUp;
