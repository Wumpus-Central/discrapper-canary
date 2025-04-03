n.d(t, { Z: () => l });
var r = n(192379),
    i = n(990169);
function l(e, t) {
    let n = (0, r.useRef)(!1),
        l = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        (n.current = e !== l.current), (l.current = e);
    }, [e]),
        (0, r.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let o = e !== (0, i.Z)(l),
        a = (0, i.Z)(n);
    return o || a;
}
