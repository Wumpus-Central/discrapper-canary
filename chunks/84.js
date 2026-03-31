n.d(t, { A: () => a });
var i = n(20015),
    l = n(833349),
    s = n(652215);
function a(e) {
    let {
            channel: t,
            activity: n,
            ActivityInviteEducationStore: a,
            ApplicationStore: r,
            RelationshipStore: o,
            GamePartyStore: c,
        } = e,
        d = n?.application_id;
    if (null == t || null == n || !(0, l.A)(n, s.jUm.JOIN) || null == d) return !1;
    let u = r.getApplication(d);
    return (
        !(
            null == u ||
            (0, i.n)(u, s.gfo.EMBEDDED) ||
            (t.isPrivate() && o.isBlockedOrIgnored(t.getRecipientId())) ||
            (t.isDM() && c.getParty(n.party?.id)?.has(t.getRecipientId()) === !0)
        ) && a.shouldShowEducation(d)
    );
}
