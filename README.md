Laravel 10 Bootcamp Chirper chat app. Valószínűleg valaki törölt belőle ezért nem működik az email visszajelzés a chirp-ről, vagy amiért nincsen email verifikálva vagy nem volt push-olva a legújabb branch.

![image](https://github.com/folza1/chirper-react/assets/106752284/35cfea96-37a1-4dc9-9244-5592f8aa465f)

**Terminálba használathoz**

cd elérési_út/app
cp .env.example .env
composer install
php artisan key:generate
php artisan serve
Npm install
Npm run dev

**SQLITE adatbázist használ:**

sudo apt-get install php8.2-sqlite3

**ENV fájl-ban:**

DB_CONNECTION=sqlite
