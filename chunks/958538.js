n.d(t, { A: () => r });
var i = n(582128);
let l = Symbol();
function r(e, t, n) {
    let r,
        o,
        u = ((r = (0, i.useRef)(!1)), (o = (0, i.useRef)(null)), r.current || ((r.current = !0), (o.current = e())), o),
        a = (0, i.useRef)(l);
    return (a.current === l ? (a.current = t) : n(a.current, t) || ((u.current = e()), (a.current = t)), u.current);
}
