FROM node:16 as build-stage

# Creating my app directory
WORKDIR '/app'

# Copying and installing app dependecies
COPY package.json ./

# COPY yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

# Exposing port
# EXPOSE 80

# Starting service
# CMD ["yarn","start"]    

# Building project for production
RUN yarn run build

# Production with nginx
FROM nginx 

# Set working directory to nginx resource directory
WORKDIR /usr/share/nginx/html

# Removing default nginx static resource
RUN rm -rf ./*

# Copy build files from build-stage to nginx
COPY --from=build-stage /app/build .

# Copy default config files from nginx to container
# COPY default.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]


# Exposing port
# EXPOSE 80