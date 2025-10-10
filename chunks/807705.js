n.d(t, { Z: () => l });
var i = n(647438),
    r = n(990169);
function l(e, t) {
    let n = (0, i.useRef)(!1),
        l = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== l.current), (l.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let a = e !== (0, r.Z)(l),
        o = (0, r.Z)(n);
    return a || o;
}
