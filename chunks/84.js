n.d(t, { A: () => s });
var i = n(20015),
    l = n(833349),
    a = n(652215);
function s(e) {
    let {
            channel: t,
            activity: n,
            ActivityInviteEducationStore: s,
            ApplicationStore: r,
            RelationshipStore: o,
            GamePartyStore: c,
        } = e,
        d = n?.application_id;
    if (null == t || null == n || !(0, l.A)(n, a.jUm.JOIN) || null == d) return !1;
    let u = r.getApplication(d);
    return (
        !(
            null == u ||
            (0, i.n)(u, a.gfo.EMBEDDED) ||
            (t.isPrivate() && o.isBlockedOrIgnored(t.getRecipientId())) ||
            (t.isDM() && c.getParty(n.party?.id)?.has(t.getRecipientId()) === !0)
        ) && s.shouldShowEducation(d)
    );
}
