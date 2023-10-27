PROJECT_NAME=cupcakes

define run
	docker-compose -f $1 -p $2 $3 $4
endef

define create-images
	docker build . -f $1 -t $2
endef

dev:
	$(call run,./docker-compose.yml,${PROJECT_NAME},up)
dev-rebuild:
	$(call run,./docker-compose.yml,${PROJECT_NAME},up,--build)
all::
	echo "finished?"
default:
	echo "nothing"