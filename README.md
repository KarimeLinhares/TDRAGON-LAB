O TDragon é um projeto que implementa uma aplicação de tela de login integrada ao AWS Cognito e S3, com foco em segurança e modelagem de vulnerabilidades. Seu objetivo principal é atuar como um ambiente de testes para identificar e mitigar possíveis falhas em processos de autenticação e armazenamento de dados.

## Funcionalidades Principais:
* Autenticação com AWS Cognito: Utiliza o Cognito para gerenciar usuários, autenticação e autorização de forma segura e escalável.
* Armazenamento de Logs no AWS S3: Todos os eventos e logs gerados pela aplicação são armazenados no Amazon S3, permitindo auditoria e monitoramento.
* Persistência de Dados com Docker: Os dados do usuário são armazenados utilizando volumes do Docker, garantindo portabilidade e isolamento do ambiente.

## Objetivo:
O TDragon foi desenvolvido para simular um cenário real de aplicação, sendo utilizado como ferramenta de testes para modelagem de vulnerabilidades. Ele permite que equipes de segurança analisem pontos críticos na autenticação, armazenamento e gerenciamento de logs, além de explorar possíveis vetores de ataque em um ambiente controlado.

## Tecnologias Utilizadas:
* Frontend: Tela de login responsiva e simples para interação do usuário.
* Backend: Integração com AWS Cognito e comunicação segura com S3 para armazenar logs.
* Infraestrutura: Containerização com Docker e Dockerfile para garantir a padronização e isolamento do ambiente.

O TDragon serve como uma base para experimentos e aprimoramento contínuo em segurança da informação, promovendo boas práticas no desenvolvimento de sistemas.
