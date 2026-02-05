"use strict";
async function r(e) {
    if (e.size > 0) return e.size;
    try {
        return await new Promise((t, n) => {
            let r = new FileReader(),
                i = setTimeout(() => {
                    n(Error("File read timeout"));
                }, 1e4);
            (r.onload = (e) => {
                clearTimeout(i);
                let r = e.target?.result;
                r instanceof ArrayBuffer ? t(r.byteLength) : n(Error("Unexpected FileReader result type"));
            }),
                (r.onerror = () => {
                    clearTimeout(i), n(Error("Could not read file"));
                }),
                r.readAsArrayBuffer(e);
        });
    } catch (e) {
        return 0;
    }
}
n.d(t, { _: () => r });
