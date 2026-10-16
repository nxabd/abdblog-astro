---
title: "Totorial Debian : Cara Install Mariadb/mysql di linux debian"
source: "https://esthonoles.blogspot.com/2025/11/totorial-debian-cara-install.html"
author:
  - "[[blogspot.com]]"
date: oct 16 2026
description: "install mariadb di linux debian, setup mariadb mudah di debian terbaru"
tags:
  - "clippings"
---

Pada kesempatan kali ini saya akan berbagi bagamana cara install dan konfigurasi mariadb pada linux debian, serta mengubah password default user root

Langkah 1: Update Sistem

l==akukan update atau upgrade pada system linux==

```bash
sudo apt update
sudo apt upgrade
```

Langkah 2: Instalasi MariaDB

install mariaDB server dan client ketikkan perintah berikut:

## Baca Juga

- [Cara merubah rilis version pada repository Debian 12 Bookworm ('Version value from '12.4' to '12.5')](https://esthonoles.blogspot.com/2024/02/cara-merubah-rilis-version-pada.html)
- [Rekomendasi theme compact Gnome di linux dengan laptop resolusi layar kecil](https://esthonoles.blogspot.com/2025/11/theme-compact-gnome.html)
- [Catatan Penting Setelah Install Fedora Linux - Fedora 40 Workstation](https://esthonoles.blogspot.com/2022/10/catatan-penting-setelah-install-fedora.html)

```
sudo apt install mariadb-server mariadb-client -y
```

setelah installasi selesai, MariaDB akan berjalan secara otomatis, Anda dapat memverivikasi statusnya:

==sudo systemctl status mariadb==

untuk melihat versi mariadb yang terinstall

mariadb --version

Langkah 3: Mengubah Password Root secara Manual

sudo mysql

anda akan dibawah masuk kedalam shell dari mariadb kira-kira seperti ini tampilannya:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBIszmfmMIsnN5a9uEcBFHKPoEbnf9BYc5uJ0chnS8HisAlv04xUcDLG4OP_AGLcKVUuty52WijHX_W7cVTabqp0b1FYJRpBaE67BylaEtSiHolcWCOGxFakNg4Q98IvsjamaEqsy2ZvdsmWemYUYZC-yX_Jh9n9PYrp2hp2kth977UutjgJ7uV02r2acM/s320/Screenshot%20From%202025-11-06%2015-15-30.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBIszmfmMIsnN5a9uEcBFHKPoEbnf9BYc5uJ0chnS8HisAlv04xUcDLG4OP_AGLcKVUuty52WijHX_W7cVTabqp0b1FYJRpBaE67BylaEtSiHolcWCOGxFakNg4Q98IvsjamaEqsy2ZvdsmWemYUYZC-yX_Jh9n9PYrp2hp2kth977UutjgJ7uV02r2acM/s835/Screenshot%20From%02025-11-06%2015-15-30.png)

untuk merubah password default user root lakukan langkah berikut:

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password_baru_anda';
FLUSH PRIVILEGES;
EXIT;
```

Langkah 4: Mengatur MariaDB Autostart

Pastikan MariaDB diatur untuk berjalan otomatis saat sistem boot:

sudo systemctl enable mariadb

Langkah 5: Verifikasi Instalasi

Untuk memastikan MariaDB berjalan dengan baik, coba login dengan password baru:

```
mysql -u root -p
```

Masukkan password yang telah Anda buat. Jika berhasil login, Anda akan melihat prompt MariaDB.

Langkah 7: Membuat User Baru (Opsional)

Untuk keamanan yang lebih baik, sebaiknya buat user database baru untuk aplikasi Anda:

```
CREATE USER 'namauser'@'localhost' IDENTIFIED BY 'password_user';
GRANT ALL PRIVILEGES ON *.* TO 'namauser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Tips Keamanan Tambahan  
Gunakan password yang kuat dan unik untuk user root  
Jangan gunakan user root untuk aplikasi, buat user khusus dengan hak akses terbatas  
Aktifkan firewall dan batasi akses ke port 3306 (port default MariaDB)  
Lakukan backup database secara rutin  
Update MariaDB secara berkala untuk patch keamanan

Troubleshooting

- Tidak bisa login setelah mengubah password:
- Jika Anda lupa password atau tidak bisa login, restart MariaDB dalam mode safe:

```bash
sudo systemctl stop mariadb
sudo mysqld_safe --skip-grant-tables
mysql -u root
```

Kemudian reset password menggunakan perintah ALTER USER seperti di atas.

#### Kesimpulan

Anda telah berhasil menginstal dan mengkonfigurasi MariaDB di Debian, serta mengubah password default untuk user root. Dengan mengikuti praktik keamanan yang baik, database Anda akan lebih terlindungi dari ancaman keamanan.
