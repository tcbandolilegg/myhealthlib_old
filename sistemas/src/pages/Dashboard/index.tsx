import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Container, TableContainer, Title } from './styles';

interface Usuarios {
  id: number;
  cpf: number;
  nome: string;
  dataNascimento: string;
  tipoLogradouro: string;
  enderecoLogradouro: string;
  enderecoNumero: number;
  enderecoComplemento: string;
  enderecoBairro: string;
  codEstado: number;
  codCidade: number;
  userDependente1: number;
  userDependente2: number;
  userDependente3: number;
  userDependente4: number;
  userDependente5: number;
}

const Dashboard: React.FC = () => {
  const { logOut } = useAuth();
  const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
  const token = localStorage.getItem('@CadastroDeUsuarios:token');

  useEffect(() => {
    async function loadUsuarios(): Promise<void> {
      try {
        const response = await api.get('/usuarios/listar', {
          params: {
            token,
          },
        });
        setUsuarios(response.data);
      } catch (err) {
        logOut();
      }
    }
    loadUsuarios();
  }, [token, logOut]);

  return (
    <>
      <Container>
        <Title>Dados Cadastrados</Title>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
              </tr>
            </thead>
            <tr>
              <th>CPF:</th>
            </tr>
            <tr>
              <th>Nome:</th>
            </tr>
            <tr>
              <th>Data nascimento:</th>
            </tr>
            <tr>
              <th>Endereço:</th>
            </tr>
            <tr>
              <th>Bairro:</th>
            </tr>
            <tr>
              <th>Estado:</th>
            </tr>
            <tr>
              <th>Dependente 1:</th>
            </tr>
            <tr>
              <th>Dependente 2:</th>
            </tr>
            <tr>
              <th>Dependente 3:</th>
            </tr>
            <tr>
              <th>Dependente 4:</th>
            </tr>
            <tr>
              <th>Dependente 5:</th>
            </tr>
            <tbody>
              {usuarios.map(usuarios => (
                <tr key={usuarios.id}>
                  <td>{usuarios.id}</td>
                  <td>{usuarios.cpf}</td>
                  <td>{usuarios.nome}</td>
                  <td>{usuarios.dataNascimento}</td>
                  <td>
                    {usuarios.tipoLogradouro} {usuarios.enderecoLogradouro}
                    {usuarios.enderecoNumero} {usuarios.enderecoBairro}
                  </td>
                  <td>{usuarios.codEstado}</td>
                  <td>{usuarios.codCidade}</td>
                  <td>{usuarios.userDependente1}</td>
                  <td>{usuarios.userDependente2}</td>
                  <td>{usuarios.userDependente3}</td>
                  <td>{usuarios.userDependente4}</td>
                  <td>{usuarios.userDependente5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
