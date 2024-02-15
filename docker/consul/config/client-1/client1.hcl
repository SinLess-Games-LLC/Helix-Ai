node_name = "consul-client-1"

datacenter = "helix-dc-1"

# Networking settings
client_addr = "0.0.0.0"
bind_addr = "0.0.0.0" # listen on all interfaces IPv4
# bind_addr = "[::]" # listen on all interfaces IPv6
# use this instead of placing the Ip address of the server in the config
advertise_addr = "{{ GetInterfaceIP `eth0` }}" # advertise address for client connections

# This is the consul data directory and is required for consul to run
data_dir = "/consul/data"

# service Mesh
connect = {
  enabled = true
}

ports = {
  https = 8501
}

auto_config = {
  enabled = true
  intro_token_file = "/consul/token"
  server_addresses = [
    "consul-server-1",
    "consul-server-2",
    "consul-server-3"
  ]
}

# By default this is set to false and will run as a client
# This is required to run as a server
server = false # leave this, it for for consistency with the server config

# This joins the client to the server
retry_join = [
  "consul-server-1",
  "consul-server-2",
  "consul-server-3"
]

tls = {
  defaults = {
    ca_file = "/consul/config/certs/consul-agent-ca.pem"
    verify_incoming = true
    verify_outgoing = true
  }
  internal_rpc = {
    verify_server_hostname = true
  }
}

verify_incoming = false
verify_outgoing = true
verify_server_hostname = true
ca_file = "/consul/config/certs/consul-agent-ca.pem"

# Encrypt
# This must be 32-bytes that are base64-encoded
encrypt = "2dnBVvoxDe6ZwEo2KtHs3E+aRMaNguoFO31kXvCRxvQ="
