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