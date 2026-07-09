n.d(t, { A: () => r });
var i = n(64700);
let l = Symbol();
function r(e, t, n) {
    let r,
        o,
        a = ((r = (0, i.useRef)(!1)), (o = (0, i.useRef)(null)), r.current || ((r.current = !0), (o.current = e())), o),
        u = (0, i.useRef)(l);
    return u.current === l ? (u.current = t) : n(u.current, t) || ((a.current = e()), (u.current = t)), a.current;
}
