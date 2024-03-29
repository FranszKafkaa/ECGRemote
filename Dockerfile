FROM node:latest
RUN mkdir /app

LABEL AUTHOR="Marcelo Janke <marcelojanke@outlook.com>"

WORKDIR /app
COPY package.json /app

RUN yarn install
COPY . /app

RUN \
  apt-get update && \
  apt-get install -y python3 python3-dev python3-pip python3-virtualenv && \
  rm -rf /var/lib/apt/lists/*

RUN  apt-get update -y; apt-get install -y libhdf5-dev; apt install pkg-config libhdf5-dev ; \
pip3 install --no-binary=h5py h5py

RUN pip3 install biosppy

RUN cp .env.example .env

RUN pip3 install pymongo[tls] ; pip3 install python-dotenv ;\
 pip3 install dnspython ; pip3 install certifi ; pip3 install requests


EXPOSE 3333
CMD ["yarn", "start"]