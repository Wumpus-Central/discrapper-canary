n.d(t, {
    g: () => h,
    s: () => m
});
var i = n(399606),
    r = n(637853),
    a = n(160404),
    s = n(592125),
    o = n(430824),
    l = n(563534),
    u = n(199689),
    c = n(460347),
    d = n(981631),
    f = n(176505);
function _(e) {
    var t;
    let n = e.id,
        i = (null !== (t = l.Z.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
        r = l.Z.getEnabled(n);
    return i && e.hasFeature(d.oNc.COMMUNITY) && !(e.hasFeature(d.oNc.GUILD_ONBOARDING) && !r);
}
function p(e, t) {
    let n = t.getMutableGuildChannelsForGuild(e);
    for (let e in n) if (n[e].hasFlag(f.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !0;
    return !1;
}
function h(e) {
    let t = (0, c.Z)(e);
    return (0, i.e7)(
        [s.Z, o.Z, a.Z],
        () => {
            if (__OVERLAY__ || e === d.ME || e === d.I_8) return !1;
            let n = o.Z.getGuild(e);
            return null != n && !!n.hasFeature(d.oNc.COMMUNITY) && (a.Z.isFullServerPreview(e) ? _(n) : (0, r.wC)(e) ? t || p(e, s.Z) : !!(0, u.Z)(n) && (t || p(e, s.Z)));
        },
        [e, t]
    );
}
function m(e) {
    let t = o.Z.getGuild(e),
        n = a.Z.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === d.ME || e === d.I_8) return !1;
    if (n) return _(t);
    let i = (0, r.wC)(e) && t.hasFeature(d.oNc.GUILD_ONBOARDING) && t.hasFeature(d.oNc.GUILD_SERVER_GUIDE);
    return ((t.hasFeature(d.oNc.GUILD_ONBOARDING) && t.hasFeature(d.oNc.GUILD_SERVER_GUIDE)) || i) && t.hasFeature(d.oNc.COMMUNITY);
}
