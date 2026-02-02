# clone-tabnews.com.br

Projeto de clone da plataforma tabnews para o curso.dev

## Guia de Inicialização

1. `npm i`
2. `npm run dev`

# Aprendizados

- `node_modules` é a pasta onde ficam todas as dependências do projeto Node.js (bibliotecas, sub-bibliotecas, versões específicas, etc.).
  - `package.json` define quais dependências o projeto precisa
  - `package-lock.json` é o arquivo que define exatamente as versões de cada dependência que foi instalada.
- `git commit --amend` usando a flag `--amend` eu posso acoplar uma modificação ao commit anterior, sem fazer um novo commit
  - Por baixo dos panos o git apaga o commit anterior e cria um novo commit
  - Caso tenha feito o `git push` para o repositório remoto, deve ser necessário fazer `git push --force` ou `git push -f` para subir a alteração feita com `--amend`
- Proxy é um servidor intermediário na relação entre um cliente e um servidor
- Deploy/Implantação: Enviar arquivos da sua máquina local ou do git para um servidor que irá hospedá-los (abrigá-los) e irá 'servir' o site para a internet. Protocolo FTP é comumente utilizado para fazer esse envio de arquivos
  - Windows Server ou SSH para acessar a máquina à distância e mexer nela
  - Local vs Remoto
  - C.I.: Continous Integrator (máquina intermediária que executa testes e automações e decide se pode mergear ou não)
  - Build: Construir uma versão otimizada e pronta para ser executada no servidor
  - **Principle of Least Privilege** ou **Princípio do Menor Privilégio** ou **Princípio do Privilégio Mínimo**: Para maior segurança dos sistemas construídos é recomendável sempre atribuir a menor quantidade de acesso, credenciais, privilégios que uma conta pode ter dentro de um sistema.
  - Tecnologia e Negócio andam juntos, devemos ver os dois.
