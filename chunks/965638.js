r.d(n, {
    I: function () {
        return u;
    },
    M: function () {
        return l;
    }
});
var i = r(442837),
    a = r(487419),
    o = r(496675),
    s = r(981631);
function l(e) {
    return (0, i.e7)([o.Z], () => null != e && o.Z.can(s.Plq.MANAGE_GUILD, e), [e]);
}
function u(e) {
    var n;
    let r = l(e),
        o = (0, i.e7)([a.Z], () => (null != e ? a.Z.getGuildIncident(e.id) : null)),
        u = (null == e ? void 0 : null === (n = e.hasFeature) || void 0 === n ? void 0 : n.call(e, s.oNc.INVITES_DISABLED)) || ((null == o ? void 0 : o.invitesDisabledUntil) != null && new Date(o.invitesDisabledUntil) > new Date());
    return r && u;
}
