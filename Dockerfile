FROM node:latest
RUN mkdir /app

LABEL AUTHOR="Marcelo Janke <marcelojanke@live.com>"

WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app

RUN \
  apt-get update && \
  apt-get install -y python3 python3-dev python3-pip python3-virtualenv && \
  rm -rf /var/lib/apt/lists/*

RUN pip3 install biosppy

EXPOSE 3333
CMD ["node", "Node_src/server.js"]