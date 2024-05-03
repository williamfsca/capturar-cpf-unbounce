<script>
    // Função para aplicar a máscara de CPF
    function cpfMask(cpf) {
        return cpf.replace(/\D/g, '') // Remove todos os caracteres não numéricos
            .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4'); // Aplica a máscara de CPF
    }

    window.ub.form.customValidators.validateCPF = {
        isValid: function(value) {
            // Remove todos os caracteres não numéricos
            const cpf = value.replace(/\D/g, '');
            
            // Verifica se o CPF possui 11 dígitos
            if (cpf.length !== 11) {
                return false;
            }
            
            // Verifica se todos os dígitos são iguais (CPF inválido)
            if (/^(\d)\1{10}$/.test(cpf)) {
                return false;
            }
            
            // Cálculo dos dígitos verificadores
            let sum = 0;
            let remainder;
            
            for (let i = 1; i <= 9; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }
            
            remainder = (sum * 10) % 11;
            
            if (remainder === 10 || remainder === 11) {
                remainder = 0;
            }
            
            if (remainder !== parseInt(cpf.substring(9, 10))) {
                return false;
            }
            
            sum = 0;
            
            for (let i = 1; i <= 10; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }
            
            remainder = (sum * 10) % 11;
            
            if (remainder === 10 || remainder === 11) {
                remainder = 0;
            }
            
            if (remainder !== parseInt(cpf.substring(10, 11))) {
                return false;
            }
            
            return true;
        },
        message: 'CPF inválido'
    };

    window.ub.form.validationRules.cpf_11_números.validateCPF = true;

    // Função para lidar com a entrada de CPF
    function handleCPFInput(event) {
        const cpfInput = event.target;
        let cpf = cpfInput.value; // Obtém o valor do campo de CPF

        // Remove todos os caracteres não numéricos
        cpf = cpf.replace(/\D/g, '');

        // Limita o número de caracteres a 11
        cpf = cpf.substring(0, 11);

        // Verifica se o CPF possui 11 dígitos
        if (cpf.length !== 11) {
            const errorMessage = document.getElementById('cpfErrorMessage');
            const submitButton = document.getElementById('submitButton');
            errorMessage.textContent = 'CPF deve conter 11 dígitos';
            submitButton.disabled = true;
            return;
        }

        // Aplica a máscara de CPF
        cpf = cpfMask(cpf);

        // Atualiza o valor do campo de CPF com a máscara aplicada
        cpfInput.value = cpf;

        // Verifica se o CPF é válido
        const isValidCPF = window.ub.form.customValidators.validateCPF.isValid(cpf.replace(/\D/g, ''));

        // Obtém os elementos do erro e do botão de envio
        const errorMessage = document.getElementById('cpfErrorMessage');
        const submitButton = document.getElementById('submitButton');

        // Atualiza a mensagem de erro e o estado do botão de envio
        errorMessage.textContent = isValidCPF ? '' : 'CPF inválido';
        submitButton.disabled = !isValidCPF;
    }

    // Adiciona um listener para o evento de input no campo de CPF
    document.getElementById('cpf_11_números').addEventListener('input', handleCPFInput);

    // Função para formatar o nome com as iniciais maiúsculas
    function capitalizeName(event) {
        const nameInput = event.target;
        const name = nameInput.value.toLowerCase(); // Converte o valor do campo para minúsculas
        const formattedName = name.replace(/\b\w/g, function(match) {
            return match.toUpperCase();
        });
        nameInput.value = formattedName; // Atualiza o valor do campo com as iniciais maiúsculas
    }

    // Adiciona um listener para o evento de input no campo de nome
    document.getElementById('nome').addEventListener('input', capitalizeName);

    // Função para aplicar a máscara de WhatsApp com DDD
    function whatsappMask(whatsapp) {
        return whatsapp.replace(/\D/g, '') // Remove todos os caracteres não numéricos
            .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '$1 $2 $3 $4'); // Aplica a máscara de WhatsApp com DDD
    }

    // Função para lidar com a entrada de WhatsApp com DDD
    function handleWhatsAppInput(event) {
        const whatsappInput = event.target;
        let whatsapp = whatsappInput.value; // Obtém o valor do campo de WhatsApp com DDD

        // Remove todos os caracteres não numéricos
        whatsapp = whatsapp.replace(/\D/g, '');

        // Limita o número de caracteres a 11
        whatsapp = whatsapp.substring(0, 11);

        // Aplica a máscara de WhatsApp com DDD
        whatsapp = whatsappMask(whatsapp);

        // Atualiza o valor do campo de WhatsApp com DDD com a máscara aplicada
        whatsappInput.value = whatsapp;
    }

    // Adiciona um listener para o evento de input no campo de WhatsApp com DDD
    document.getElementById('whatsapp_com_ddd').addEventListener('input', handleWhatsAppInput);
</script>
