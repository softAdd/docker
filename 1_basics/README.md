## Введение

docker - программное обеспечение для запуска приложений в изолированной среде - контейнере.<br>
docker-compose позволяет управлять группой таких контейнеров.

Преимущества использования докер:
1. Контейнеры совместно используют ресурсы основной ОС, что повышает их эффективность, а накладные расходы приэтом минимальны.
2. Докер может упростить жизненный цикл разработки, позволяя запускать приложения в одинаковой среде на любых устройствах. Благодаря этой особенности решается проблема переносимости приложения - разработчики избавляются от ошибок, вызванных изменениями рабочей среды.
3. Простая сущность контейнеров позволяет запускать сразу десятки контейнеров - то есть количество, явно большей, чем если бы вы использовали виртуальные машины.
4. При развертывании приложения на сервере/в облаке разработчики могут тратить большое количество времени на конфигурирование. Докер решает эту проблему, позволяя настроить конфигурацию один раз и использовать ее в дальнейшем, как на сервере, так и во время разработки.

**OC Linux - рекомендуется для использования совместно с docker.**

## Установка

* [docker](https://docs.docker.com/get-docker/)
* [docker-compose](https://docs.docker.com/compose/install/)

Проверить установку можно командой:<br>
`docker version`

Для запуска Docker требуются права суперпользователя (команда sudo в Linux). Чтобы постоянно не использовать sudo, можно добавить пользователя в группу docker:<br>
`sudo usermod -aG docker YOUR_USERNAME` - для Ubuntu

## Управление сервисом Docker

`sudo service docker start|stop|restart|status`

## Запуск докер-образа

Для запуска введите:
`docker run debian echo "Test phrase"`

Если вы первый раз запускаете докер, то, вероятнее всего, образа "debian" у вас еще нет, поэтому произойдет следующее:
1. Докер скажет, что не может найти данный образ на вашем устройстве.
2. Докер загрузит этот образ из интернета.
3. Докер запустит образ "debian" и выведет фразу "Test phrase".

Контейнеры docker можно запускать в "интерактивном режиме", чтобы зайти внутрь контейнера и получить возможность исполнять какие-то команды оттуда:<br>
`docker run -it ubuntu:14.04 /bin/bash`<br>
Для выхода: `exit`

## Управление образами и контейнерами
[Основной источник данной части - статья на onedev.net](https://onedev.net/post/579)

### Основные термины

Image (Образ) - это статический билд на основе определенной OS (дистрибутива). На основе 1 образа можно создавать разные контейнеры.

Container (Контейнер) - это кастомизированный инстанс образа. Создается на основе Dockerfile.

Volume (Том) - предпочтительный способ для постоянного хранения/обмена данными между контейнером и хост-машиной.

### Основные команды

**Образы**

1. `docker images` - список доступных образов.
2. `docker pull ubuntu:14.04` - скачать образ из официального реестра образов.
3. `docker inspect ubuntu` - посмотреть информацию об образе.
4. `docker rmi IMAGE_ID` - удалить образ.
5. `docker commit CONTAINER_ID IMAGE_NAME` - сохранить состояние контейнера как образ.

**Контейнеры**

1. `docker run IMAGE_NAME` - запуск контейнера на основе образа.
2. `docker exec` - запуск команды внутри контейнера.
3. `docker ps -a` - список всех контейнеров, без флага -a - только запущенных.
4. `docker inspect CONTAINER_NAME` - вывод информации о контейнере.
5. `docker diff CONTAINER_NAME` - список измененных файлов в работающем контейнере.
6. `docker logs CONTAINER_NAME` - выведет список всех событий, произошедших внутри контейнера.
7. `docker rm CONTAINER_ID CONTAINER_ID` - удаление контейнера.
8. `docker rm $(docker ps -aq)` - удалить все контейнеры.
9. `docker run -it ubuntu bash` - запуск в интерактивном режиме (тоже, что описано выше).