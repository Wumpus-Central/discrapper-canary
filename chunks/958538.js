n.d(t, { A: () => i });
var l = n(64700);
let r = Symbol();
function i(e, t, n) {
    let i,
        u,
        o = ((i = (0, l.useRef)(!1)), (u = (0, l.useRef)(null)), i.current || ((i.current = !0), (u.current = e())), u),
        a = (0, l.useRef)(r);
    return a.current === r ? (a.current = t) : n(a.current, t) || ((o.current = e()), (a.current = t)), o.current;
}
