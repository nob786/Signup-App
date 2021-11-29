FROM node:16

# Create my app directory
WORKDIR '/app'

# Install and copying app dependencies
COPY package.json ./

# COPY lock.json ./

RUN yarn install

# Bundle app source
COPY . .

# Exposing port
EXPOSE 4000

# Starting service
# ENTRYPOINT [ ". docker-entrypont.sh" ]
# RUN ["./docker-entrypont.sh"]
# ENTRYPOINT [ "./entrypoint.sh" ]
CMD ["yarn","test"]
