# trainingbackend

## Project setup

rename **.env.template** to **.env** in root folder, /microservices/auth and /microservices/main

```
docker-compose build
```

### Run migrations

```
docker exec -it trainingbackend_main_1 npm run migration:latest
docker exec -it trainingbackend_auth_1 npm run migration:latest
```

### Seed

```
docker exec -it trainingbackend_main_1 npm run seed:run
```

### Run in watch mode

```
docker-compose up --force-recreate
```
