n.d(t, { E: () => d });
var i = n(125017),
    l = n(833349),
    a = n(287613),
    s = n(659051),
    r = n(702631),
    o = n(652215);
function d(e, t, n, d) {
    if (
        t.author.id === d ||
        !(0, s.A)(e, t, n.id) ||
        t.activity?.type !== o.xL.JOIN_REQUEST ||
        !(0, l.A)(e, o.jUm.JOIN)
    )
        return !1;
    let c = (0, i._)(e);
    return !(!(0, a.A)(c) || (0, r.U)(c));
}
