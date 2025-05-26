
---

```markdown
# 🏃‍♂️ Tienda Deportiva - Proyecto MVC con Node.js y Express

Este es un proyecto web desarrollado con **Node.js**, **Express**, **EJS** y el patrón de arquitectura **MVC (Modelo - Vista - Controlador)**. El sitio muestra productos deportivos organizados por marcas como **Nike, Adidas, Puma, Umbro, Fila, One** y **Under Armour**.

---

## 🎯 Objetivo

El objetivo principal de este proyecto es **aplicar el patrón MVC** en una aplicación web dinámica que permita:

- Mostrar una interfaz atractiva y responsiva usando Bootstrap.
- Listar productos por marca.
- Organizar el código separando la lógica de presentación, negocio y rutas.

---

## 🧠 ¿Qué es el patrón MVC?

**MVC (Modelo - Vista - Controlador)** es una arquitectura que separa las responsabilidades en tres capas principales:

1. **Modelo (Model):** Contiene la información y lógica del negocio (los datos).
2. **Vista (View):** Es lo que el usuario ve (las interfaces HTML).
3. **Controlador (Controller):** Recibe las acciones del usuario y coordina la respuesta entre el modelo y la vista.

---

## 📁 Estructura del proyecto

```

mi-proyecto-mvc/
├── controllers/
│   └── productoController.js       # Controlador: lógica para manejar las rutas de productos
├── models/
│   └── productos.js                # Modelo: contiene los datos de los productos por marca
├── views/
│   ├── index.ejs                   # Vista: página principal
│   └── marca.ejs                   # Vista: productos por marca
├── public/
│   ├── css/
│   │   └── estilos.css             # Estilos personalizados
│   └── img/
│       └── (imágenes de productos por marca)
├── routes/
│   └── index.js                    # Definición de rutas (usa el controlador)
├── app.js                          # Configuración principal del servidor Express
└── package.json

---

## 🔄 ¿Dónde se aplica MVC?

| Capa         | Archivo                                | Descripción |
|--------------|----------------------------------------|-------------|
| Modelo       | `models/productos.js`                  | Contiene un objeto con todas las marcas y sus productos. |
| Vista        | `views/index.ejs`, `views/marca.ejs`   | Renderiza HTML dinámico con EJS. Muestra las marcas y productos. |
| Controlador  | `controllers/productoController.js`    | Maneja las solicitudes, obtiene los datos del modelo y pasa información a la vista. |

---

## 🚀 ¿Cómo ejecutar?

1. Instalar dependencias:

> Verificamos si tenémos el Node.js.

```bash
node -v
npm -v
````
> Sino, instalamos en: [https://nodejs.org](https://nodejs.org) .

```bash
npm install
````

2. Ejecutar la aplicación:

```bash
node app.js
```

3. Abrir en el navegador:
   [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Capturas


### Inicio:

![Image](https://github.com/user-attachments/assets/c19221f9-a1b2-4a18-b1a9-1a81663ea8bd)

### Productos por marca:

![Image](https://github.com/user-attachments/assets/1f157e1b-dddc-4b65-bee5-e5a0d0695a11)

---

## 🧑‍💻 Autor

Proyecto realizado por **Gabriel Zela** y **Piero Delgado** como parte del curso de desarrollo web con Node.js para el curso de Arquitectura de Software.

---

## 📚 Recursos usados

* Node.js
* Express
* EJS
* Bootstrap 5

---

## 📝 Licencia

Este proyecto es de uso libre para fines académicos.

````
