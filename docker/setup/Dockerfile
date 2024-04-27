FROM python:3.12.3-slim

# Install required packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget curl git make sudo openssl zip m4 autoconf automake jq bash dnsutils && \
    rm -rf /var/lib/apt/lists/*

# Install Python3 packages
RUN pip3 install --upgrade pip yq shyaml

# Create user "docker" with sudo powers
RUN adduser --uid 1000 --disabled-password --gecos "" docker && \
    adduser docker sudo && \
    echo '%sudo ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Set up the working directory and permissions
WORKDIR /home/docker/data
RUN chown -R docker:docker /home/docker

# Set environment variables
ENV LC_ALL=C.UTF-8 LANG=C.UTF-8 HOME=/home/docker USER=docker PATH=/home/docker/.local/bin:$PATH

# Avoid first use of sudo warning
RUN touch $HOME/.sudo_as_admin_successful

COPY ./setup/scripts/security/certs.sh /home/docker/config/certs.sh
RUN chmod +x /home/docker/config/certs.sh


# Set the default command
CMD ["/bin/bash"]
