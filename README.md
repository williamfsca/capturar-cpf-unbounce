Este código JavaScript fornece funções para mascarar CPF (Cadastro de Pessoa Física), validar entrada de CPF e formatar nomes e números de WhatsApp com DDD (código de área brasileiro).

Máscara e Validação de CPF
cpfMask(cpf)
Esta função aplica a máscara de CPF (###.###.###-##) ao CPF fornecido.

validateCPF(value)
Função de validação personalizada para validar entrada de CPF. Verifica o número correto de dígitos (11), verifica se todos os dígitos não são iguais e valida o CPF de acordo com seu algoritmo.

Formatação de Nome
capitalizeName(event)
Esta função formata o nome capitalizando a primeira letra de cada palavra.

Máscara de Número de WhatsApp
whatsappMask(whatsapp)
Esta função aplica a máscara (## # #### ####) ao número de WhatsApp fornecido com DDD.

Listeners de Eventos
Os ouvintes de eventos são adicionados para lidar com eventos de entrada para os campos de CPF, nome e WhatsApp.

Uso
Inclua este script no seu arquivo HTML para habilitar a máscara de CPF, validação, formatação de nome e máscara de número de WhatsApp com DDD.

html
Copy code
<script src="masker.js"></script>
Exemplo de Uso
html
Copy code
<input type="text" id="cpf_11_números" placeholder="CPF">
<span id="cpfErrorMessage" style="color: red;"></span>

<input type="text" id="nome" placeholder="Nome">

<input type="text" id="whatsapp_com_ddd" placeholder="WhatsApp com DDD">

<button id="submitButton">Enviar</button>
Notas
Este script pressupõe a existência de elementos HTML com os IDs especificados (cpf_11_números, nome, whatsapp_com_ddd, cpfErrorMessage, submitButton). Certifique-se de que esses elementos existam em seu HTML.
Este script apenas trata da validação e formatação do lado do cliente. Validação adicional no lado do servidor pode ser necessária por motivos de segurança.
Sinta-se à vontade para usar, modificar e contribuir para este script!
