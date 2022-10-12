# SeminarioAngular
Seminario de la carrera TUDAI dictado el año 2022

## Qué va a cubrir este curso?
    - Components & Templates
    - Databinding
    - Directives & Pipes
    - Services & Dependency Injection
    - Routing
    - HTTPClient (consumir servicios web)
    - Ademas de aprender Typescript!

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

### Qué es TypeScript?
Angular está enteramente escrito en TypeScript (TS), y además propone este lenguaje como principal.
<br></br>
TypeScript extiende JavaScript agregando:
- Tipos (string, number, boolean, etc)
- Interfaces y Objetos basados en clases.


### Qué tiene nuestro proyecto?
#### Top Level
El nivel superior del workspace contiene archivos de configuración y subcarpetas para los archivos fuente y de testing. Los más importantes son:
- **angular.json** configuración de angular-cli default para el proyecto
- **package.json** define las dependencias del proyecto
- **src/ contiene** el código fuente del proyecto
- **node_modules/** provee paquetes npm globales a todo el proyecto
- **e2e/** contiene el código para testing end-to-end

#### src folder
Contiene todo el código fuente de nuestra aplicación. Los principales son:
- **index.html** es la página HTML principal. Angular CLI agrega automáticamente todos los archivos JavaScript y CSS.
- **app/** contiene la lógica y los datos del proyecto.
- **assets/** contiene las imágenes y otros “assets” que se usan en la app
- **environments/** contiene diferentes configuraciones de compilación
- **style.scss** estilos css principales de la aplicación
- **main.ts** punto de entrada principal de la aplicación

2. Clase 2
[Link CLASE](https://youtu.be/fO74AMjx2fk)

## ¿Qué son los componentes?
Los componentes son la manera en que construimos apps en Angular, dividiendo la funcionalidad en pequeñas piezas que luego al unirlas construyen una vista de un usuario.
- Cada parte de nuestro app va a ser un componente.
- Son reutilizables :) 

Un componente Angular está compuesto por tres partes:

| TS | HTML | CSS |
|--|--|--|
| LOGICA | TEMPLATE | ESTILO |

![Image](https://codigoonclick.com/wp-content/uploads/2018/03/conoce-angular-componentes.png)

Para poder cargar el componente, lo tenemos que declarar en el app.module.ts
![Image](https://media.geeksforgeeks.org/wp-content/uploads/20200423180639/gfg_entrycomponent_1.png)

### Interpolation
- Las llaves {{ }} nos permiten usar propiedades definidas en el componente y mostrarlas en el template.

**Cambios al 2022**
<br></br>
La última version de Bootstrap incluye un solo JS <https://getbootstrap.com/docs/5.2/getting-started/introduction/>.
<br></br>
**IMPORTANTE:** La última version de Typescript no permite propiedades de una clase sin inicializar. Es probable que se encuentren con algún error de compilación de este tipo: 
<br></br>
name: string;
<br></br>
"Property 'name' has no initializer and is not definitely assigned in the constructor.ts(2564)
<br></br>
Estos errores se pueden resolver de dos maneras:
   - Asignado un valor a la propiedad en la definición o en el constructor
   - Agregar la propiedad "strictPropertyInitialization": false  en el archivo de configuración de typescript (tsconfig.json) dentro de compilerOptions.

### Property Binding
El property binding nos permite relacionar componentes con propiedades del DOM.
    - Usamos corchetes [] en lugar de llaves {}.
    - Los corchetes le dicen a Angular que setee esta propiedad del elemento a la propiedad de nuestro componente.
    - Si la propiedad del componente cambia, entonces cambia el DOM.

### Interfaces & Directivas

#### Orientada a Objetos
Uno de los principios básicos de TypeScript es la verificación de tipos.
- Podemos usar tipos primitivos en variables:
    - let name: string;
    - let price: number;

- Pero también podemos usar una interface para definir tipos de datos más complejos.

#### Mocks
Se le llama Mock a un objeto que simula el comportamiento del objeto real.
- Es una buena práctica front-end usar ‘Fake Data’ para comenzar a desarrollar nuestra aplicación.
- Eventualmente los datos vendrán de algun web service (API).
- Se puede separar en un archivo. 

## Directivas
Es la forma de generar un template HTML dinámico.
- Existen 2 tipos de directives:
    - Estructural: Modifica el layout agregando, quitando o modificando elementos HTML. ( ejemplo *ngIf *ngFor)
    - Atributos: Modifica la apariencia y el comportamiento de elementos que ya existen. En el template parecen atributos comunes de HTML. (ejemplo [ngStyle])
***ngFor** La directiva *ngFor repite el elemento por cada item en la colección.
***ngIf** La directiva *ngIf, elimina o muestra una parte del DOM de acuerdo a la expresión que evalúa.
**ngClass** La directiva ngClass manipula las clases CSS de un elemento HTML
        <tr *ngFor="let producto of productos" [ngClas]="{'clearence': beer.clearence}">
Si beer.clearance es true, se le agrega la clase al elemento, si es false no.

<some-element [ngClass]="'className1 'className2">
…
</some-element>

<some-element [ngClass]="['className1', 'className2']">
…
</some-element>

<some-element [ngClass]="{'className1': true, 'className2': false}">
…
</some-element>

## Pipes
Los **pipes** son simples funciones que transforman valores que usamos en un template.
Angular tiene muchísimos *pipes* definidos, y además permite definir nuestros propios pipes.
Podemos usar pipes en los templates para:
- Formatear fechas
- Mostrar monedas
- Formatear números
Entre otros

## Event Binding
El event binding es la forma de comunicar lo que pasa en HTML a Javascript.
Hay 3 formas:
1. Javascript a HTML
Como venimos haciendo, por ejemplo un título o las cervezas.
2. HTML a Javascript
Como un mouse click, hover, input, key press.
3. De las dos formas (Two-Way data binding)
Por ejemplo un input que tiene que estar sincronizado con el dato del componente.

### Two-Way Data Binding
Nos permite compartir información entre el componente y el template en ambas direcciones.
- Mantenemos sincronizados (sync) el template y el componente.
- Se utiliza medianta el uso de la sintaxis [()], conocida como “Banana in a Box”, Este tipo de binding se usa en inputs, donde queremos matener en sync el valor del input con la propiedad en el componente. 
- Importar Forms Module en app.module
import { FormsModule } from '@angular/forms'
...
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

## Routing en Angular
- Permite asociar cada URL a un componente
- Implementa el famoso “partial render”
- Angular se ocupa de cambiar la URL en la barra de direcciones y actualizar el DOM sin refrescar.

### Router Outlet
Usando el tag <router-outlet> indicamos donde queremos que Angular muestre los componentes.
    
Para armar links que naveguen usando el router tenemos que agregarle 2 directivas
routerLink: Que es la Dirección a donde vamos. Ej: ‘/’ o ‘/about’
<a [routerLink]="['/abouts']">Contactenos </a>

Para comunicar componentes, Angular propone varias formas:
- @Input: binding de una propiedad del componente
- @Output: hookearse a los eventos de otro componente
- Comunicación por medio de un servicio.
