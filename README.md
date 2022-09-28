# SeminarioAngular
Seminario de la carrera TUDAI dictado el año 2022

## Comandos importantes
- npm install -g @angular/cli (Instalacion en la carpeta donde vamos a desarrolar el proyecto)
- npm install -g npm@8.19.2 (Actualizar version)
- ng version (Para ver la version, para esto se debe primero hacer la instalacion)
-  ng new [nombre-de-la-app] (Crea la aplicacion)
    -ng new brewery --routing=true --style=scss (Example)
- ng serve (Corre la app Angular en un servidor local, http://localhost:4200/)

1. Clase 1:
    - La última versión de angular es la 14.x
    - La última versión de Node LTS es la 16.x
    - Para averiguar la version de angular es  "ng version"

#### Qué tiene nuestro proyecto?
El nivel superior del workspace contiene archivos de configuración y subcarpetas para los archivos fuente y de testing. Los más importantes son:
- **angular.json** configuración de angular-cli default para el proyecto
- **package.json** define las dependencias del proyecto
- **src/ contiene** el código fuente del proyecto
- **node_modules/** provee paquetes npm globales a todo el proyecto
- **e2e/** contiene el código para testing end-to-end


