n.d(t, {
    A: () => l,
}),
    n(938796);
var i = n(665260),
    s = n(833349),
    r = n(652215);

function l(e, t, n, l, a) {
    let o = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, s.A)(t, r.jUm.JOIN) || null == o) return !1;
    let c = l.getApplication(o);
    return (
        !(
            null == c ||
            (0, i.Lt)(c.flags, r.gfo.EMBEDDED) ||
            (e.isPrivate() && a.isBlockedOrIgnored(e.getRecipientId()))
        ) && n.shouldShowEducation(o)
    );
}
