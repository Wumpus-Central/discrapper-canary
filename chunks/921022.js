n.d(t, { Z: () => o });
var r = n(73800),
    i = n(710251);
function o(e) {
    let { delay: t, disable: n = !1 } = e,
        o = (0, i.Z)();
    r.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            o();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, o]);
}
