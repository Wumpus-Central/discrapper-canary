n.d(t, { Z: () => o }), n(953529);
var r = n(473749),
    i = n(29133);
let a = Symbol();
function o(e, t, n) {
    let o = (0, i.Z)(e),
        s = (0, r.useRef)(a);
    return s.current === a ? (s.current = t) : n(s.current, t) || ((o.current = e()), (s.current = t)), o.current;
}
