n.d(t, { A: () => o });
var i = n(64700);
let r = Symbol();
function o(e, t, n) {
    let o,
        l,
        a = ((o = (0, i.useRef)(!1)), (l = (0, i.useRef)(null)), o.current || ((o.current = !0), (l.current = e())), l),
        c = (0, i.useRef)(r);
    return c.current === r ? (c.current = t) : n(c.current, t) || ((a.current = e()), (c.current = t)), a.current;
}
