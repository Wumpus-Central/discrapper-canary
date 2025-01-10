n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(192379),
    l = n(990169);
function r(e, t) {
    let n = (0, i.useRef)(!1),
        r = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== r.current), (r.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let a = e !== (0, l.Z)(r),
        s = (0, l.Z)(n);
    return a || s;
}
