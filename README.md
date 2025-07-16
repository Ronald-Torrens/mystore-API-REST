# 🛍️ MyStore API REST

Una API REST construida con **Express.js** para simular una tienda en línea. Incluye rutas para productos, categorías y usuarios, además de validaciones y manejo de errores personalizados con `joi` y `@hapi/boom`.

## 🚀 Tecnologías

- Node.js
- Express.js
- Joi (validaciones)
- @hapi/boom (manejo de errores)
- CORS
- Nodemon (desarrollo)
- ESLint + Prettier

## 🔧 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Ronald-Torrens/mystore-API-REST.git
cd mystore-API-REST

    Instala dependencias:

npm install

    Inicia el servidor:

npm run dev

El servidor correrá en: http://localhost:3000
📦 Endpoints principales

    GET /products – Lista todos los productos

    POST /products – Crea un nuevo producto

    GET /products/:id – Obtiene un producto por ID

    PATCH /products/:id – Actualiza parcialmente un producto

    DELETE /products/:id – Elimina un producto

📋 Ejemplo de respuesta

GET /products

[
  {
    "id": "b6ccc098-b806-4d2a-b313-0b3786c4ff99",
    "name": "Bespoke Silk Hat",
    "price": 516,
    "description": "The Dillan Towels is the latest in a series of jumbo products from Haley Inc",
    "image": "https://picsum.photos/seed/zqTI0Eis9a/2264/2156",
    "isBlock": false
  },
  {
    "id": "e78b94ee-741d-4098-bb46-f752595ce9b4",
    "name": "Sleek Granite Towels",
    "price": 939,
    "description": "Our fish-friendly Hat ensures illiterate comfort for your pets",
    "image": "https://loremflickr.com/2428/1280?lock=763746329029660",
    "isBlock": true
  }
]

🧪 Probar con Insomnia

Puedes probar la API usando Insomnia. Sigue estos pasos:

    Abre Insomnia.

    Crea una nueva Request Collection (por ejemplo: MyStore API).

    Agrega una nueva request:

        Método: GET

        URL: http://localhost:3000/products

    Haz clic en "Send" para ver los resultados.

💡 También puedes probar:

POST /products

{
  "name": "Elegant Gold Pizza",
  "price": 258,
  "description": "Experience the turquoise brilliance of our Hat, perfect for needy environments",
  "image": "https://picsum.photos/seed/RkAoBJvDB/3216/1359",
}

PATCH /products/:id

{
  "price": 65
}

🛡️ Manejo de errores

Esta API utiliza middleware personalizado para capturar y formatear errores usando @hapi/boom. Ejemplo de error:

{
  "error": "Not Found",
  "message": "Product not found",
  "statusCode": 404
}

✅ Licencia

Este proyecto está bajo la licencia ISC.
