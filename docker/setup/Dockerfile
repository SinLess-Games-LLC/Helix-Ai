FROM python:3.12.3-alpine

# Install required packages
RUN apk update && apk upgrade 
RUN apk --no-cache add wget curl git make sudo openssl zip m4 autoconf automake jq bash bind-tools

# Install Python3 packages
RUN pip3 install --upgrade pip yq shyaml

# Create user "docker" with sudo powers
RUN adduser -D -u 1000 docker && \
    addgroup docker wheel && \
    echo '%wheel ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Set up the working directory and permissions
WORKDIR /home/docker/data
RUN chown -R docker:docker /home/docker

# Set environment variables
ENV LC_ALL=C.UTF-8 LANG=C.UTF-8 HOME=/home/docker USER=docker PATH=/home/docker/.local/bin:$PATH

# Avoid first use of sudo warning
RUN touch $HOME/.sudo_as_admin_successful

CMD [ "/bin/bash", "-c" ]
