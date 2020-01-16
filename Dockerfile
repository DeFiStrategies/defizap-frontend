FROM nikolaik/python-nodejs:python3.8-nodejs12
LABEL MAINTAINER="James Richards <heiho1@yahoo.com>"
RUN mkdir /home/app
ADD . /home/app
WORKDIR /home/app
RUN yarn install
CMD tail -f /dev/null

# Copy cache contents (if any) from local machine
# ADD .yarn-cache.tgz /

# Install packages
# ADD package.json yarn.lock /tmp/
# RUN cd /tmp && yarn
# RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
# ADD . /opt/app
# WORKDIR /opt/app
# CMD ["yarn", "start"]
