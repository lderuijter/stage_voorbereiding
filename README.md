# Instructions to setup this project 
## Rename .env.example to .env
## Install php dependencies
composer install --ignore-platform-reqs
## Update all the dependencies
composer update
## Install all the node modules
npm install
## Run vue
npm run dev
## Run laravel
php artisan serve
## Generate key
php artisan key:generate
## Create a database named laravel to connect to
## Run migrations
php artisan migrate