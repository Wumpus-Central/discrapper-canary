"use strict";
async function i(e) {
    if (e.size > 0) return e.size;
    try {
        return await new Promise((t, n) => {
            let i = new FileReader(),
                r = setTimeout(() => {
                    n(Error("File read timeout"));
                }, 1e4);
            (i.onload = (e) => {
                clearTimeout(r);
                let i = e.target?.result;
                i instanceof ArrayBuffer ? t(i.byteLength) : n(Error("Unexpected FileReader result type"));
            }),
                (i.onerror = () => {
                    clearTimeout(r), n(Error("Could not read file"));
                }),
                i.readAsArrayBuffer(e);
        });
    } catch (e) {
        return 0;
    }
}
n.d(t, { _: () => i });
