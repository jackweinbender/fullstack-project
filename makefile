default: up

up:
	docker-compose up

down:
	docker-compose down

init: build init_backend init_frontend

init_backend: bundle db_init

init_frontend: yarn

build:
	docker-compose build  --no-cache

bundle:
	docker-compose run --rm rails bundle install
	docker-compose run --rm rails yarn install

db_init:
	docker-compose run --rm rails bundle exec rake db:create

yarn:
	docker-compose run --rm react yarn install