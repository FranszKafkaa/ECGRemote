<h1><i>Projeto de ECG remoto</i></h1>

![alt text](img.png)

<p>Requisitos para rodar na própria máquina </p>
<ul>   
    <li>NodeJS</li>
    <li>Python 3.x</li>
    <li>Biblioteca Python biosppy</li>
</ul>

<br>
<hr>

<h2>Instalação</h2>

<ul>   
    <li>Codigo Fonte com Nodejs e Python</li>
    <ul><li>Instalar NodeJS: <a href="https://nodejs.org/en/">https://nodejs.org/en/</a></li>
    <li>Com NodeJS Instalar yarn pkg com o Comando
    <code>npm install --global yarn</code>
    </li>
    <li>usando o terminal, vá ate a pasta do projeto : <code>cd EcgRemote-master/</code></li>
    <li>na pasta do projeto instale os pacotes: <code>yarn install</code></li>
    <li>Com Python Instalar pip: <code>curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py ; python get-pip.py</code></li>
    <li>instalar biosspy: <code>pip install biosspy</code></li>
    <li>e rodar o comando <code>yarn dev</code></li>
    <li>o projeto esta rodando na porta 3333 <a href="http://localhost:3333/">http://localhost:3333/</a></li>
    </ul>
    <li>Baixar a imagem direto do docker
    <ul><li>Instalar docker  <a href="https://www.docker.com/products/docker-desktop">https://www.docker.com/products/docker-desktop</a></li>
    <li>no terminal, baixar a imagem: <code>docker pull marcelojanke/ecg_remoto ; docker run -d -p 3333:3333 marcelojanke/ecg_remoto</code></li>
    <li>o projeto esta rodando na porta 3333 <a href="http://localhost:3333/">http://localhost:3333/</a></li>
    </ul>
    </li>
    <li>Rodar o projeto Com o codigo fonte mais Docker
    <ul><li>na pasta do projeto faca o build do mesmo<code> docker build -t "nome da imagem" . ; docker run -d -p 3333:3333 "nome da imagem"</code></li>
      <li>o projeto esta rodando na porta 3333 <a href="http://localhost:3333/">http://localhost:3333/</a></li>
    </ul>
    </li>
</ul>


<hr>


Versão Cloud:
<ul>
    <li>Frontend Removido - será colocado em outro repositório</li>
    <li>Integracao completa com o Docker</li>
</ul>   
