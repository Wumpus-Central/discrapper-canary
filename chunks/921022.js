n.d(t, { Z: () => a });
var r = n(647438),
    i = n(338379);
function a(e) {
    let { delay: t, disable: n = !1 } = e,
        a = (0, i.Z)();
    r.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            a();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, a]);
}
