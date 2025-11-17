n.d(t, { X: () => a });
var r = n(227399);
let i = new Map();
function a(e) {
    let { locale: t } = (0, r.j)(),
        n =
            t +
            (e
                ? Object.entries(e)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : "");
    if (i.has(n)) return i.get(n);
    let a = new Intl.Collator(t, e);
    return i.set(n, a), a;
}
