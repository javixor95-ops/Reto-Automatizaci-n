Feature: Compra completa

  Scenario: Usuario completa una compra
    Given el usuario está en la página de login
    When ingresa usuario y contraseña válidos
    And agrega un producto al carrito
    And completa el checkout
    Then debería ver confirmación de compra