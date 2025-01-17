r.d(n, {
    g: function () {
        return m;
    },
    s: function () {
        return g;
    }
});
var i = r(399606),
    a = r(637853),
    s = r(160404),
    o = r(592125),
    l = r(430824),
    u = r(563534),
    c = r(199689),
    d = r(460347),
    f = r(981631),
    _ = r(176505);
function h(e) {
    var n;
    let r = e.id,
        i = (null !== (n = u.Z.getNewMemberActions(r)) && void 0 !== n ? n : []).length > 0,
        a = u.Z.getEnabled(r);
    return i && e.hasFeature(f.oNc.COMMUNITY) && !(e.hasFeature(f.oNc.GUILD_ONBOARDING) && !a);
}
function p(e, n) {
    let r = n.getMutableGuildChannelsForGuild(e);
    for (let e in r) if (r[e].hasFlag(_.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !0;
    return !1;
}
function m(e) {
    let n = (0, d.Z)(e);
    return (0, i.e7)(
        [o.Z, l.Z, s.Z],
        () => {
            if (__OVERLAY__ || e === f.ME || e === f.I_8) return !1;
            let r = l.Z.getGuild(e);
            return (null == r ? !!void 0 : !!r.hasFeature(f.oNc.COMMUNITY)) && (s.Z.isFullServerPreview(e) ? h(r) : (0, a.wC)(e) ? n || p(e, o.Z) : !!(0, c.Z)(r) && (n || p(e, o.Z)));
        },
        [e, n]
    );
}
function g(e) {
    let n = l.Z.getGuild(e),
        r = s.Z.isFullServerPreview(e);
    if (null == n || __OVERLAY__ || e === f.ME || e === f.I_8) return !1;
    if (r) return h(n);
    let i = (0, a.wC)(e) && n.hasFeature(f.oNc.GUILD_ONBOARDING) && n.hasFeature(f.oNc.GUILD_SERVER_GUIDE);
    return ((n.hasFeature(f.oNc.GUILD_ONBOARDING) && n.hasFeature(f.oNc.GUILD_SERVER_GUIDE)) || i) && n.hasFeature(f.oNc.COMMUNITY);
}
