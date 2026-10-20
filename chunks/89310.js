n.d(t, { J: () => o, p: () => d });
var l = n(582128),
    a = n(941985);
let r = 0,
    i = 0,
    s = new Set();
function u(e) {
    return (s.add(e), () => s.delete(e));
}
function o(e, t) {
    let { forMe: n } = t;
    ((r += 1), s.forEach((e) => e()), n ? (0, a.YN)(e) : (0, a.g7)(e));
}
function d(e) {
    let t = l.useSyncExternalStore(u, () => r);
    l.useEffect(() => {
        if (t <= i) return;
        let n = window.setTimeout(() => {
            ((i = t), e.current?.focus());
        }, 100);
        return () => window.clearTimeout(n);
    }, [t, e]);
}
