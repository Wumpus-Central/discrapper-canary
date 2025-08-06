n.d(t, { Z: () => o });
var r = n(73800),
    i = n(990169);
function o(e, t) {
    let n = (0, r.useRef)(!1),
        o = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        (n.current = e !== o.current), (o.current = e);
    }, [e]),
        (0, r.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let a = e !== (0, i.Z)(o),
        s = (0, i.Z)(n);
    return a || s;
}
