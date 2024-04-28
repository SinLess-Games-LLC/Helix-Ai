############################################################################################################
# Build stage
############################################################################################################

FROM python:3.12.3-slim AS builder

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget curl git make sudo openssl zip m4 autoconf automake jq bash dnsutils dos2unix && \
    rm -rf /var/lib/apt/lists/*

# Install Python3 packages
RUN pip install --upgrade pip yq shyaml

# Copy your source code
COPY ./setup /app/data
WORKDIR /app

# Copy the certs.sh script to the app directory
RUN chmod +x /app/data/scripts/security/certs.sh
RUN dos2unix /app/data/scripts/security/certs.sh


############################################################################################################
# Runtime stage
############################################################################################################

FROM python:3.12.3-slim

# Copy built files from the previous stage
COPY --from=builder /app /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget curl git make sudo openssl zip m4 autoconf automake jq bash dnsutils dos2unix && \
    rm -rf /var/lib/apt/lists/*

# Create user "docker" with sudo powers
RUN adduser --uid 1000 --disabled-password --gecos "" docker && \
    adduser docker sudo && \
    echo '%sudo ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Set up the working directory and permissions
WORKDIR /app/data
RUN chown -R docker:docker /app

# Set environment variables
ENV LC_ALL=C.UTF-8 LANG=C.UTF-8 HOME=/app USER=docker PATH=/app/.local/bin:$PATH

# Avoid first use of sudo warning
RUN touch $HOME/.sudo_as_admin_successful

USER docker

# Set the default command
CMD ["/bin/bash"]