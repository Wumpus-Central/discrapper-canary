n.d(t, { Z: () => a });
var r = n(73800),
    i = n(990169);
function a(e, t) {
    let n = (0, r.useRef)(!1),
        a = (0, r.useRef)(e);
    ((0, r.useEffect)(() => {
        ((n.current = e !== a.current), (a.current = e));
    }, [e]),
        (0, r.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]));
    let o = e !== (0, i.Z)(a),
        s = (0, i.Z)(n);
    return o || s;
}
