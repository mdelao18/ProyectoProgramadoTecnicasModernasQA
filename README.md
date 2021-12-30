# ProyectoProgramadoTecnicasModernasQA

El proyecto es individual
El entregable del mismo debe ser el link del repositorio en git
El mismo será construido en base a la página http://demo.guru99.com/V4/index.php
El proyecto debe realizarse utilizando Webdriverio
A continuación los rubros a evaluar.


Uso correcto de Page Object Model: 10 pts
Uso correcto de spec files: 10 pts
Uso correcto de archivos de datos para creación y validación de pruebas(archivos planos, json, xml): 10 pts
Uso correcto de hooks: 10 pts
Las Pruebas se ejecutan en un ambiente docker con multiples navegadores en paralelo: 20 pts
Pruebas automatizadas correctamente: 4 pts c/u


Flujos a automatizar:

1-New Customer: se debe validar que sea la página correcta, y que el usuario fuera creado correctamente con los datos proporcionados.
2-Edit Customer: se debe validar que sea la página correcta, y que el usuario fuera editado correctamente con los datos proporcionados.
3-Delete Customer: se debe validar que sea la página correcta, y que el usuario fuera eliminado correctamente.
4-New Account: se debe validar que sea la página correcta, y que la cuenta fuera creada correctamente con los datos proporcionados.
5-Edit Account: se debe validar que sea la página correcta, y que la cuenta fuera editada correctamente con los datos proporcionados.
6-Delete Account: se debe validar que sea la página correcta, y que la cuenta fuera eliminada correctamente.
7-Deposit: se debe validar que sea la página correcta, y que el deposito fuera realizado exitosamente.
8-Withdrawal: se debe validar que sea la página correcta, y que los fondos fueran debitados exitosamente.
9-Change Password: Se debe validar que el cambio sea exitoso y volver a autenticarse con la nueva contraseña.
10-Balance Inquiry: se debe validar que sea la página correcta, y que el balance de la cuenta sea el correcto.

--------------------------------------------------------------------------------------------------------------

Pasos para ejecutar los test cases:

1- Clonar el proyecto de github con Git BASH: Clone git https://github.com/mdelao18/ProyectoProgramadoTecnicasModernasQA.git
2- Agregar la carpeta clonada a Visual Studio Code.
3- EN la terminal, ir a la raiz y correr el comando: yarn create wdio .
4- Instalar, ingresar y hacer log in en Docker Desktop.
5- Levantar el servicio de docker desde la terminal: docker-compose up.
6- Para correr los test cases, agregar en la terminal el comando:  npm test y darle enter.

Muchas gracias!