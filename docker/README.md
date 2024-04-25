# launch order

---

1. `docker-compose -f ./docker/mysql.yaml up -d`
2. `docker-compose -f ./docker/redis.yaml up -d`
3. `docker-compose -f ./docker/kafka.yaml up -d`
4. `docker-compose -f ./docker/lavalink.yaml up -d`
5. `docker-compose -f ./docker/featbit.yaml up -d`
