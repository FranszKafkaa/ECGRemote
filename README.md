<h1><i>Projeto de ECG remoto</i></h1>

![alt text](img.png)

<p>Requisitos para rodar na própria máquina </p>
<ul>   
    <li>NodeJS</li>
    <li>Python 3.x</li>
    <li>Biblioteca Python biosppy</li>
</ul>

rode o comando
<br>

```bash
    #rodar o codigo fonte juntamente com o docker 
    git clone https://github.com/MarceloSkank/ECGRemote.git
    docker build -t "<nome da imagem>" ./

    docker run "<nome da imagem>"

    #rodar somente a imagem 
    docker pull marcelojanke/ecg_remoto
    docker run -p 3333:3333 marcelojanke/ecg_remoto

    #rodar localmente (sem o docker) 
    npm install ou yarn install
    
    pip3 install biosppy 
```
Versão Cloud:
<ul>
    <li>Frontend Removido - será colocado em outro repositório</li>
    <li>Integracao completa com o Docker</li>
</ul>   
