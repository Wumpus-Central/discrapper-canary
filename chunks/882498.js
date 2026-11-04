let r = new URL(t(986432), t.b);
t.d(
    n,
    {},
    {
        i: function () {
            return WebAssembly.compileStreaming(fetch(r));
        },
    },
);
