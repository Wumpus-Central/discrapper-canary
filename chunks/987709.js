n.d(t, {
    E: () => c,
});
var r = n(125017),
    i = n(833349),
    a = n(287613),
    s = n(659051),
    o = n(702631),
    l = n(652215);

function c(e, t, n, c) {
    var u;
    if (
        t.author.id === c ||
        !(0, s.A)(e, t, n.id) ||
        (null == (u = t.activity) ? void 0 : u.type) !== l.xL.JOIN_REQUEST ||
        !(0, i.A)(e, l.jUm.JOIN)
    )
        return !1;
    let d = (0, r._)(e);
    return !(!(0, a.A)(d) || (0, o.U)(d));
}
