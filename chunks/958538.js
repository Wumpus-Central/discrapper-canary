n.d(t, { A: () => l });
var i = n(64700);
let r = Symbol();
function l(e, t, n) {
    let l,
        u,
        o = ((l = (0, i.useRef)(!1)), (u = (0, i.useRef)(null)), l.current || ((l.current = !0), (u.current = e())), u),
        c = (0, i.useRef)(r);
    return c.current === r ? (c.current = t) : n(c.current, t) || ((o.current = e()), (c.current = t)), o.current;
}
