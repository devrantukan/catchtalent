FROM node
ENV NPM_CONFIG_LOGLEVEL warn
EXPOSE 3001
WORKDIR /usr/src/app
ADD package.json /usr/src/app
ADD . /usr/src/app
RUN ls -al && sh -c pwd && yarn install && yarn build
ENTRYPOINT ["npm", "start"]