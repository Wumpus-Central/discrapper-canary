n.d(t, { Z: () => a });
var i = n(192379),
    l = n(990169);
function a(e, t) {
    let n = (0, i.useRef)(!1),
        a = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== a.current), (a.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let r = e !== (0, l.Z)(a),
        s = (0, l.Z)(n);
    return r || s;
}
