default: up

up:
	docker-compose up -d
	cd frontend && yarn run start

down:
	docker-compose down

init: build bundle db_init

build:
	docker-compose build  --no-cache

bundle:
	docker-compose run --rm rails bundle install
	docker-compose run --rm rails yarn install

db_init:
	docker-compose run --rm rails bundle exec rake db:create
	docker-compose run --rm rails bundle exec rake db:migrate