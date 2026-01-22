async function r(e) {
    if (e.size > 0) return e.size;
    try {
        return await new Promise((t, n) => {
            let r = new FileReader(),
                i = setTimeout(() => {
                    n(Error("File read timeout"));
                }, 10000);
            (r.onload = (e) => {
                var r;
                clearTimeout(i);
                let a = null == (r = e.target) ? void 0 : r.result;
                a instanceof ArrayBuffer ? t(a.byteLength) : n(Error("Unexpected FileReader result type"));
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
n.d(t, { _: () => r }), n(65821), n(927092), n(212978);
