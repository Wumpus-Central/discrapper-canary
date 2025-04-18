n.d(t, {
    Ij: () => c,
    MQ: () => s,
    O4: () => l
});
var r = n(442837),
    i = n(487419),
    a = n(496675),
    o = n(981631);
function s(e) {
    return (0, r.e7)([a.Z], () => null != e && a.Z.can(o.Plq.MANAGE_GUILD, e), [e]);
}
function l(e) {
    let t = (0, r.e7)([i.Z], () => (null != e ? i.Z.getGuildIncident(e.id) : null));
    return (null == e ? void 0 : e.hasFeature(o.oNc.INVITES_DISABLED)) || ((null == t ? void 0 : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date());
}
function c(e) {
    let t = s(e),
        n = l(e);
    return t && n;
}
