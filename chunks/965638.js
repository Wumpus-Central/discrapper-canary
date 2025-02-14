n.d(t, {
    Ij: () => u,
    MQ: () => o,
    O4: () => l
});
var i = n(442837),
    r = n(487419),
    a = n(496675),
    s = n(981631);
function o(e) {
    return (0, i.e7)([a.Z], () => null != e && a.Z.can(s.Plq.MANAGE_GUILD, e), [e]);
}
function l(e) {
    let t = (0, i.e7)([r.Z], () => (null != e ? r.Z.getGuildIncident(e.id) : null));
    return (null == e ? void 0 : e.hasFeature(s.oNc.INVITES_DISABLED)) || ((null == t ? void 0 : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date());
}
function u(e) {
    let t = o(e),
        n = l(e);
    return t && n;
}
