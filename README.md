# Proyecto final curso React Js: E-commerce  Sebastián Corrales Cano

Este proyecto se desarrolló con fines académicos para la comisión 47205 del curso de React JS de CoderHouse. Este proyecto está referenciado en la empresa de productos compostables Uman S.A.S. domiciliada en la ciudad de Medellín, Colombia.

## Funcionalidad del proyecto:

Permitir a los usuarios hacer compras en linea de los diferentes productos del portafolio de productos compostables disponibles,, de manera general y también en función de la categoría.
Facilitar la información suficiente de cada producto para que el usuario pueda decidir de acuerdo a sus necesidades.
Proveer la posibilidad de agregar diferentes productos a un carrito de compra y en las cantidades requeridas por el usuario.
Entregar una vista de lista compacta de los productos agregados al carrito con su respectivo detalle y el total a pagar.
Permitir al usuario eliminar productos específicos del carrito de compra y también vaciarlo completamente.
Habilitar un formulario de campos adicionales solicitados al usuario para hacer efectiva la orden de compra.
Al ejecutar la compra, devolver al usuario su id de compra para que la pueda rastrear.

## Enfoque e ideas

El enfoque elegido para el proyecto fue estructurar de manera independiente los componentes relevantes de un ecommerce: 
NavBar con acceso a las categorías de producto y al cartWidget.
ItemListContainer para contener la ItemList y ésta a su vez, contener a Item y este componente usarlo para tantos productos existan.
ItemDetailContainer para contener ItemDetail y adicional a este mismo nivel, el componente ItemCount para darle al usuario los controles para modificar las cantidades a ordenar.
Cart para contener CartItem y con esto, mostrar la lista compacta de los productos agregados al carrito.
Checkout para capturar la información necesaria para la compra.

Firebase alimenta los componentes ItemListContainer e ItemDetailContainer con la colección 'productos'.
Firebase es alimentado por medio del componente Checkout en la colección 'orders'.
El servicio de Firebase se integra al proyecto por medio de la carpeta 'services' y el archivo 'firebase.js'

## Para levantar el proyecto

Ejecutar en el directorio del proyecto:

### `npm install`

Para instalar los paquetes necesarios para el proyecto de React

### `npm start`

Para correr la aplicación en el modo desarrollador.\
Abrir [http://localhost:3000](http://localhost:3000) para verla en el navegador.

## Instalaciones adicional

### `npm install firebase`

Para hacer la conexión con Firebase de Google y usarlo como el backend de mi e-commerce. En dicha plataforma alojé la base de datos de los productos y de las órdenes de compra

### `npm install sweetalert2`

Para usar la librería SweetAlert de JS para mostrar a los usuarios alertas relacionadas con falta o incongruencia en la información del checkout