# Reto-Automatizacion

Proyecto de pruebas automáticas con Karate y Maven.

## Estado actual
- Java: 11 (compatible; el objetivo original fue 25, pero el proyecto se ejecuta en 11 en este momento y pasa tests).
- Maven: 3.9.9 (compatible con el proyecto)
- Tests: `mvn clean test` pasa con 4 tests en `backend-tests`.

## Estructura
- `backend-tests/pom.xml`: configuración Maven y dependencia `karate-junit5`.
- `backend-tests/src/test/java/UsersTest.java`: clase de runner de Karate.
- `backend-tests/src/test/resources/users.feature`: escenarios CRUD.
- `backend-tests/src/test/resources/karate-config.js`: configuración de Karate.

## Instrucciones para ejecutar

### Backend (Karate + Maven)
1. Clonar el repo:
   ```bash
   git clone https://github.com/<tu_usuario>/<tu_repositorio>.git
   cd Reto-Automatizacion/backend-tests
   ```
2. Ejecutar pruebas backend:
   ```bash
   mvn clean test
   ```
3. Ver resultados de surefire:
   - `backend-tests/target/surefire-reports/UsersTest.txt`
   - `backend-tests/target/surefire-reports/TEST-UsersTest.xml`

### Frontend (Playwright)
1. Ir al directorio raíz del proyecto:
   ```bash
   cd Reto-Automatizacion
   ```
2. Instalar dependencias:
   ```bash
   npm install
   npx playwright install
   ```
3. Ejecutar pruebas frontend:
   ```bash
   npx playwright test
   ```
4. Ejecutar un test específico (opcional):
   ```bash
   npx playwright test tests/example.spec.js
   ```

### Ejecución completa
- Backend + frontend:
  ```bash
  cd Reto-Automatizacion/backend-tests && mvn clean test
  cd .. && npx playwright test
  ```

## Ajustes aplicados
- `karate-config.js` con timeout y baseUrl.
- `users.feature` actualizado a `https://jsonplaceholder.typicode.com` para evitar bloqueos Cloudflare.
- Corrección de sintaxis de Karate `match` (usando `assert response.length > 0`).

## GitHub
Si el repositorio no está inicializado, ejecutar:
```bash
cd Reto-Automatizacion
git init
git add .
git commit -m "v1: tests Karate funcionando"
git remote add origin https://github.com/<tu_usuario>/<tu_repositorio>.git
git push -u origin main
```
