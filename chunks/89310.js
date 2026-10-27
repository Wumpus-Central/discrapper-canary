n.d(t, { f: () => o, p: () => d });
var i = n(582128);
let r = 0,
    a = 0,
    s = new Set();
function l(e) {
    return (s.add(e), () => s.delete(e));
}
function o() {
    ((r += 1), s.forEach((e) => e()));
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = i.useSyncExternalStore(l, () => r);
    i.useEffect(() => {
        if (!t || n <= a) return;
        let i = window.setTimeout(() => {
            ((a = n), e.current?.focus());
        }, 100);
        return () => window.clearTimeout(i);
    }, [n, e, t]);
}
