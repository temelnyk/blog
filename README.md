# The simple blog



## Local environment setup

1. **Apache**, **PHP7**, **MySQL5.7.x** are required:
  - **Linux:** `sudo apt-get install apache2 php7.0 php7.0-mysql php7.0-curl php7.0-json php7.0-cgi php7.0-mbstring libapache2-mod-php7.0`
  - **Windows:** Install [XAMPP](https://www.apachefriends.org/index.html). Make sure that PHP and MariaDB (behaves like MySQL) are of proper versions during the installation.
  - Make sure there are following modules installed:
    - `mbstring` (required for Facebook);
    - `mod_rewrite` (required for `.htaccess`).
1. Clone the project and go to project directory.
1. Make sure the Apache and MySQL/MariaDB servers are up and running.
1. Add the record `127.0.0.1       blog` to your **hosts file** ('/etc/hosts' in Linux; `C:\\Windows\\System32\\drivers\\etc\\hosts` in Windows).
1. Adjust directories in `apache2.conf` (make sure paths refer to real project directory):
  - **Linux:** `cat apache2.conf | sed "s:/home.*\.if\.ua:$(pwd):g" > apache2.conf`
  - **Windows:** do it manually.
1. Create the symlink from `apache2.conf` to the config file responsible for the project in Apache config directory (mind the correct path to the project dir):
  - **Linux:** `cd /etc/apache2/sites-available && sudo ln -s /home/rom/Prj/blog/apache2.conf blog.conf && cd -`
  - **Windows:** mind paths and use `junction`/`mklink` instead of `ln`.
1. Restart the Apache2:
  - **Linux** `sudo systemctl restart apache2.service`
  - **XAMPP/Windows:** via XAMPP control panel.
1. Make sure the address `http://blog` works in browser.



## SQL setup

### Preparations

MySQL 5.7.x is required.

First, create the user and the database:
- open the MySQL comman line: `$ mysql -uroot -p<...>` where `<...>` is your root password;
- perform following commands one by one (replace `<...>` with actual password for `blog` user):
```
use mysql;
create user if not exists 'blog'@'localhost' identified by '<...>';
grant all privileges on blog.* to 'blog'@'localhost' with grant option;
flush privileges;
exit;
```
- You should see something like _Query OK, 0 rows affected (0,00 sec)_ after every command except first one and last one.

### Manage data

- Make sure you're in project root directory;
- replace `<...>` in following commands with acpual password for `blog` user;
- dump data from database to file: `mysqldump --databases blog --all-tablespaces -ublog -p<...> > sql/database.sql`
- drag the data from file into database: `mysql -ublog -p<...> < sql/database.sql`

**Mind to drag data into database** every time it's said by release note. Do it for the **very first** time as well!



## Credentials

The file with all the sensitive info (credentials) is not under version control so you have to create it manually (file name is `server/php/creds.php`):
```
<?php
const DB_CONFIG = array(
    'host' => '...',
    'user' => '...',
    'password' => '...',
    'database' => '...'
);

const ADMIN_CREDS = array(
    'username' => '...',
    'password' => '...'
);

const SESSION_SALT = '...';

const FB_APP_CREDENTIALS = array(
    'app_id' => '...',
    'app_secret' => '...',
    'default_graph_version' => 'v2.8'
);
?>
```



## Credits

Roman Melnyk [email.rom.melnyk@gmail.com]: development
Tetiana Melnyk [tamell2011@gmail.com]: QA, design

