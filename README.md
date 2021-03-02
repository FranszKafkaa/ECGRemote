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
    <ul><li>Instalar docker  <a href="https://www.docker.com/products/docker-desktop">https://www.docker.com/products/docker-desktop</a></li><li>na pasta do projeto faca o build do mesmo<code> docker build -t "nome da imagem" . ; docker run -d -p 3333:3333 "nome da imagem"</code></li>
      <li>o projeto esta rodando na porta 3333 <a href="http://localhost:3333/">http://localhost:3333/</a></li>
    </ul>
    </li>
</ul>

<hr>
<h2>Events</h2>
<h3>saveReq:</h3> salva as requisicoes feitas e gera um txt para download nas rotas:<code>/demo, /savelog, /remove e na rota raiz /</code> 
<hr>

<h2>Rotas</h2>
<ul>
<li><code>POST /Demo</code>: Rota de testes para puxar os dados de ECG. <br> Dados de Retorno: <code> status code: 200 [{time: tempo em ms, filtered: dados filtrados do biosspy, test: dados do desenho do ecg}]</code></li>
<br>
<li><code>POST /savelog</code>: Salva as requisicoes que irao aparecer no <a href="http://tsi.charqueadas.ifsul.edu.br/~ecgremoto/">http://tsi.charqueadas.ifsul.edu.br/~ecgremoto/</a> <br>modo de envio {data: your_data} <br> data de retorno: <code>status code: 200 [{data: datetime, ip: ip do usuario que fez a requisição, json: dados que o usuario mandou na requisição}]</code></li>
<br>
<li><code>delete /remove</code>: deleta todas os dados armazenados gerado pela rota <code>/savelog</code><br>
retorno:<code>status code: 200 {res: log deletado}</code>
</li>
<br>
<li><code>get /see</code>: mostra dos dados gerado pela rota <code>/savelog</code><br>dados de retorno<code>[{data: datetime, ip: ip do usuario, json: dados enviados do usuario}]</code></li>
<br>
<li><code>get /gettxt</code>: faz o download do txt gerado pelo evento <code>saveReq</code></li>
<br>
<li><code>get /seetxt</code>: mostra os dados gerado pelo evento <code>saveReq</code><br>dados de retorno <code>[{nome_arquivo: nome do txt gerado, link: link para download do txt,caminho_arquivo:caminho do arquivo,json_data: dados enviados pelo usuario,rota: rota utilizada na requisição, method: metodo da requisicao }]</code></li>
<br>
<li><code>GET /</code>: a rota raiz, somente mostra o status code: <code>status code: 200{req: 200}</code></li>
</ul>
<hr>

Versão Cloud:
<ul>
    <li>Frontend Removido - será colocado em outro repositório</li>
    <li>Integracao completa com o Docker</li>
</ul>   
