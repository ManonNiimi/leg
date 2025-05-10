function runCode() {
    const code = document.getElementById("asmcode").value;
    const output = document.getElementById("output");
    output.textContent = "[*] Running code...\n\n" + code + "\n\n[*] Memory read simulated.";
}
