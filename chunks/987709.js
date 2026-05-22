n.d(t, { E: () => d });
var i = n(125017),
    l = n(55730),
    s = n(287613),
    r = n(659051),
    a = n(702631),
    o = n(652215);
function d(e, t, n, d) {
    if (
        t.author.id === d ||
        !(0, r.A)(e, t, n.id) ||
        t.activity?.type !== o.xL.JOIN_REQUEST ||
        !(0, l.A)(e, o.jUm.JOIN)
    )
        return !1;
    let c = (0, i._)(e);
    return !(!(0, s.A)(c) || (0, a.U)(c));
}
