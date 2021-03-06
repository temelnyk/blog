# The simple blog



## Local environment setup

- **Apache**, **PHP7**, **MySQL5.7.x** are required:
  - **Linux:** `sudo apt-get install apache2 php7.0 php7.0-mysql php7.0-curl php7.0-json php7.0-cgi php7.0-mbstring libapache2-mod-php7.0`
  - **Windows:** Install [XAMPP](https://www.apachefriends.org/index.html). Make sure you install proper versions of PHP and MariaDB (behaves like MySQL).
  - Make sure there are following modules installed:
    - `mbstring` (required for Facebook);
    - `mod_rewrite` (required for `.htaccess`).
- **NodeJS** is required to build client code.
- Clone the project and go to project directory.
- Make sure the **Apache** and **MySQL/MariaDB** servers are up and running.
- Add the record `127.0.0.1       blog` to your **hosts file** (`/etc/hosts` in Linux; `C:\Windows\System32\drivers\etc\hosts` in Windows).
- Copy `apache2.conf` to Apache configuration folder:
  - **Linux:** `sudo cp apache2.conf /etc/apache2/sites-available/blog.conf`
  - **Windows:** `copy apache2.conf C:\xampp\apache\conf\extra\blog.conf`  
   or `cp apache2.conf /c/xampp/apache/extra/blog.conf` if you're using GitBash.
- Adjust directories in `blog.conf` to make sure that
  - `DocumentRoot` and `Directory` refer to `<path-to-project>/server/` folder,
  - all the logs (`ErrorLog` and `CustomLog` entries) refer to `<path-to-project>/logs/...` folder.
  - **Linux** users should use `sudo`-friendly editor.
  - **Windows** users, please mind paths (they should look Linux-style like `/Users/me/Projects/blog...`).
- Make sure the `blog.conf` is used by Apache:
  - **Linux:** `sudo a2ensite blog.conf`
  - **Windows:** open `httpd.conf` via XAMPP control panel (Apache > Config); find the line  
   `Include conf/extra/httpd-vhosts.conf`  
   and add following line just below it:  
   `Include conf/extra/blog.conf`  
   **Warning!** This makes inaccessible the XAMPP demo page! Just comment this line if you want demo page back.
- Restart the Apache2:
  - **Linux** `sudo systemctl restart apache2.service`
  - **XAMPP/Windows:** via XAMPP control panel.
- Make sure the address `http://blog` works in browser.



## SQL setup

### Preparations

MySQL 5.7.x is required.

First, create the user and the database:
- open the MySQL comman line: `$ mysql -uroot -p<...>` where `<...>` is your root password;
- perform following commands one by one (replace `<...>` with actual password for `blog` user):
```sql
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



## Architecture
Client-based code and server-based code are developed separately in appropriate folders.

### `server/`

The content of `server/` is server-ready so should be uploaded to the server as is. The content is adapted for PHP-powered Apache2 server. Entry points are
- `index.php`: general area; query params determine what to show; SEO-friendly;
- `admin.php`: admin area; password protected; SPA (see following section).

### `client/`

The content of `client` contains JS and SCSS development files. They are compiled to proper locations of `server/` folder. Development process:
- `cd client`
- `npm install`
- `npm run dev` for developing (watch both SCSS and JS; compiles everything automatically);
- `npm run test`
- `npm run prod` before uploading files to production.  
   **Mind that this script removes `.gitignore` files** in `server/css` and `server/js` folders.  
   They are restored automatically before `npm run dev`.

Client app contains Admin app (SPA) and some business logic for General area.



## Branching strategy and the workflow

Branch `master` contains the latest working code (it's not deployable because does not contain compiled client code).

Branches `sprint-...` contain sprint releases. Every new sprint branch starts at the beginning of the sprint from `master` (so it's eventually based on the previous sprint ode). Code is being pushed into the sprint branch during the sprint. At the end of the sprint it gets merged into `master`.

Branches `release-...` are branched off from `master` at release time.

```
          feature-a     feature-b                feature-c          
          _____\___     ___/_____                _____\___          
         /         \   /         \              /         \         
        /           \ /           \            /           \        
     __/_________ sprint-01 _______\__      __/_ sprint-02 _\__     
    /                                 \    /                   \    
   /                                   \  /                     \   
__/_______________ master ______________\/_______________________\__
```

Before testing (or deploying) any branch, run `npm install && npm run prod` in `client/` folder!



## Credits

Roman Melnyk [email.rom.melnyk@gmail.com](mailto:email.rom.melnyk@gmail.com): development  
Tetiana Melnyk [tamell2011@gmail.com](mailto:tamell2011@gmail.com): QA, design

