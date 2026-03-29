Feature: CRUD Usuarios

Background:
  * configure headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }

Scenario: Obtener usuarios
  Given url 'https://jsonplaceholder.typicode.com/users?_page=2&_limit=6'
  When method GET
  Then status 200
  And assert response.length > 0
  * print response

Scenario: Crear usuario
  Given url 'https://jsonplaceholder.typicode.com/users'
  And request { name: 'Javier Requejo', email: 'javierrequejo@encora.com' }
  When method POST
  Then status 201
  And match response.name == 'Javier Requejo'
  * print response

Scenario: Actualizar usuario
  Given url 'https://jsonplaceholder.typicode.com/users/2'
  And request { name: 'Javier Requejo Nuevo QE de Encora' }
  When method PUT
  Then status 200
  And match response.name == 'Javier Requejo Nuevo QE de Encora'
  * print response

Scenario: Eliminar usuario
  Given url 'https://jsonplaceholder.typicode.com/users/2'
  When method DELETE
  Then status 200
  * print 'Usuario eliminado exitosamente'