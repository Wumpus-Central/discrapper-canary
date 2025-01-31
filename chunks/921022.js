n.d(t, { Z: () => a });
var i = n(192379),
    r = n(931609);
function a(e) {
    let { delay: t, disable: n = !1 } = e,
        a = (0, r.Z)();
    i.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            a();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, a]);
}
