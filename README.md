# Prueba Técnica Full Stack Developer (Merge and Deploy)

Tiempo estimado: 1 hora 30minutos

### Contexto

En un laboratorio clínico, se enfrentan a un desafío recurrente relacionado con el ingreso de pacientes al sistema. En Chile, el documento de identificación más comúnmente utilizado es el Rol Único Tributario (RUT), el cual consta de un número único asociado a cada individuo, seguido de un dígito verificador. Sin embargo, debido a la naturaleza manual del ingreso de datos o a la falta de un validador automatizado, es común que se produzcan errores al ingresar los RUT de los pacientes.

### Problema

El laboratorio clínico enfrenta dificultades debido a ingresos incorrectos de pacientes en su sistema, causados principalmente por errores humanos al registrar los RUT. Estos errores pueden llevar a la pérdida de tiempo y recursos al corregir la información incorrecta, así como a posibles problemas legales o de privacidad del paciente si los datos incorrectos se utilizan para fines médicos.

### **Objetivo General**

Desarrollar una aplicación que permita validar un documento tipo RUT, utilizando NestJS para el backend y Angular para el frontend.

### **Ejercicio 1: Crear API con NestJS**

1. Crea un controlador con dos endpoints:
    - `POST /api/validation` Debe retornar un valor booleano.
2. Implementa un servicio para manejar la lógica de la validación según lo siguiente:

**Formato Correcto:**

- El RUT debe constar de un número único de 7 u 8 dígitos, seguido de un guion ("-") y un dígito verificador.
- Ejemplos válidos: 12345678-5, **11222333-9**, 9876543-3.
- Se deben eliminar cualquier espacio en blanco o caracteres especiales antes de realizar la validación.

**Cálculo del Dígito Verificador:**

- El dígito verificador se calcula utilizando el algoritmo conocido como "Módulo 11".
- Se multiplican los dígitos del RUT, comenzando desde el último dígito del número y multiplicando cada dígito por una secuencia de números (2, 3, 4, 5, 6, 7). Si el número único tienes más de 6 dígitos se debe empezar de nuevo la secuencia (2, 3, 4, 5, 6, 7).
- Se suman los resultados de estas multiplicaciones.
- Se divide esta suma por 11 y se obtiene el resto.
- Se resta 11 menos el resto obtenido y se obtiene el dígito verificador.
- Si el resultado es 10, se utiliza la letra "K". Si es 11, se utiliza el dígito "0".

### **Ejercicio 2: Frontend con Angular**

1. Crea un componente en Angular que permita colocar el RUT y posterior a la validación mostrar un mensaje indicando si es válido o no.
2. Implementar endpoint para enviar RUT y recibir la respuesta por parte del servidor.
3. Configura algún framework de CSS (Opcional)

### **Notas Importantes**

- Utiliza buenas prácticas y sigue los principios de diseño SOLID.
- Puedes agregar cualquier framework o librería para desarrollar la aplicación.
- No se permiten búsquedas directas, por ejemplo: “Como crear un validador de rut”
- Utiliza git para control de versiones y comparte tu repositorio al finalizar la prueba.

### Puntos Extras

- Agregar testing a la aplicación.
- Desplegar en un ambiente cloud.

## ¡Buena suerte!
