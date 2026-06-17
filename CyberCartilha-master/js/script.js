let tamanhoFonteAtual = 100;

document.getElementById("btn-mais").addEventListener("click", function() {
    if (tamanhoFonteAtual < 150) {
        tamanhoFonteAtual += 10;
        document.documentElement.style.fontSize = tamanhoFonteAtual + "%";
    }
});

document.getElementById("btn-menos").addEventListener("click", function() {
    if (tamanhoFonteAtual > 70) { 
        tamanhoFonteAtual -= 10;
        document.documentElement.style.fontSize = tamanhoFonteAtual + "%";
    }
});

document.getElementById("btn-dark").addEventListener("click", function() {
    var root = document.documentElement;
    var btnDark = document.getElementById("btn-dark");
    
    root.classList.toggle("dark-mode");
    
    if (root.classList.contains("dark-mode")) {
        btnDark.textContent = "☀︎";
    } else {
        btnDark.textContent = "☾";
    }
});

const formContato = document.querySelector("form.formulario-contato");

if (formContato) {
    formContato.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios antes de enviar.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return; 
        }

        window.location.href = "sucesso.html";
    });
}

const btnGerar = document.getElementById("btn-gerar");
const btnCopiar = document.getElementById("btn-copiar");
const btnToggle = document.getElementById("btn-toggle-senha");
const inputSenha = document.getElementById("senha-gerada");
const sliderTamanho = document.getElementById("tamanho-senha");
const valorTamanho = document.getElementById("valor-tamanho");

const tamanhosPermitidos = [4, 6, 8, 10, 24];

if (sliderTamanho && valorTamanho) {
    sliderTamanho.addEventListener("input", function() {
        valorTamanho.textContent = tamanhosPermitidos[this.value];
    });
}

if (btnGerar && inputSenha) {
    btnGerar.addEventListener("click", function() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|{}[]:;?><,./-=";
        let senha = "";
        let tamanhoFinal = 8; 

        if (sliderTamanho) {
            tamanhoFinal = tamanhosPermitidos[sliderTamanho.value];
        }

        for (let i = 0; i < tamanhoFinal; i++) {
            senha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        inputSenha.value = senha;
        inputSenha.type = "text"; 
        btnToggle.textContent = "🙈"; 
    });

    btnToggle.addEventListener("click", function() {
        if (inputSenha.value !== "") {
            if (inputSenha.type === "password") {
                inputSenha.type = "text";
                btnToggle.textContent = "🙈";
            } else {
                inputSenha.type = "password";
                btnToggle.textContent = "👁️";
            }
        }
    });

    btnCopiar.addEventListener("click", function() {
        if (inputSenha.value !== "") {
            navigator.clipboard.writeText(inputSenha.value).then(() => {
                alert("Senha copiada para a área de transferência!");
            });
        } else {
            alert("Gere uma senha primeiro!");
        }
    });
}