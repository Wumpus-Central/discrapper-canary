t.d(n, { i: () => _ });
let r = new URL(t(986432), t.b);
function _() {
    return WebAssembly.compileStreaming(fetch(r));
}
