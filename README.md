Este código JavaScript feito para a plataforma Unbounce, permite mascarar CPF (Cadastro de Pessoa Física), validar entrada de CPF e formatar nomes e números de WhatsApp com DDD (código de área brasileiro) e capturar o código utm nas urls.

## Máscara e Validação de CPF

### `cpfMask(cpf)`

Esta função aplica a máscara de CPF (###.###.###-##) ao CPF fornecido.

### `validateCPF(value)`

Função de validação personalizada para validar entrada de CPF. Verifica o número correto de dígitos (11), verifica se todos os dígitos não são iguais e valida o CPF de acordo com seu algoritmo.

## Formatação de Nome

### `capitalizeName(event)`

Esta função formata o nome capitalizando a primeira letra de cada palavra.

## Máscara de Número de WhatsApp

### `whatsappMask(whatsapp)`

Esta função aplica a máscara (## # #### ####) ao número de WhatsApp fornecido com DDD.

## Listeners de Eventos

Os ouvintes de eventos são adicionados para lidar com eventos de entrada para os campos de CPF, nome e WhatsApp.

## Uso
Na plataforma da Unbouce selecione a opção "Before body End Tag" e insira o código.

Inclua este script no seu arquivo HTML para habilitar a máscara de CPF, validação, formatação de nome e máscara de número de WhatsApp com DDD.

```html
<script src="cpf.js"></script>
