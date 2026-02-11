n.d(t, { A: () => s });
var i = n(20015),
    l = n(833349),
    a = n(652215);
function s(e, t, n, s, r) {
    let o = t?.application_id;
    if (null == e || null == t || !(0, l.A)(t, a.jUm.JOIN) || null == o) return !1;
    let c = s.getApplication(o);
    return (
        !(null == c || (0, i.n)(c, a.gfo.EMBEDDED) || (e.isPrivate() && r.isBlockedOrIgnored(e.getRecipientId()))) &&
        n.shouldShowEducation(o)
    );
}
