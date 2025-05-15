n.d(t, {
    g: () => h,
    s: () => m
});
var r = n(399606),
    i = n(637853),
    o = n(160404),
    a = n(592125),
    s = n(430824),
    l = n(563534),
    c = n(199689),
    u = n(460347),
    d = n(981631),
    f = n(176505);
function _(e) {
    var t;
    let n = e.id,
        r = (null != (t = l.Z.getNewMemberActions(n)) ? t : []).length > 0,
        i = l.Z.getEnabled(n);
    return r && e.hasFeature(d.oNc.COMMUNITY) && !(e.hasFeature(d.oNc.GUILD_ONBOARDING) && !i);
}
function p(e, t) {
    let n = t.getMutableGuildChannelsForGuild(e);
    for (let e in n) if (n[e].hasFlag(f.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !0;
    return !1;
}
function h(e) {
    let t = (0, u.Z)(e);
    return (0, r.e7)(
        [a.Z, s.Z, o.Z],
        () => {
            if (__OVERLAY__ || e === d.ME || e === d.I_8) return !1;
            let n = s.Z.getGuild(e);
            return !!(null == n ? void 0 : n.hasFeature(d.oNc.COMMUNITY)) && (o.Z.isFullServerPreview(e) ? _(n) : (0, i.wC)(e) ? t || p(e, a.Z) : !!(0, c.Z)(n) && (t || p(e, a.Z)));
        },
        [e, t]
    );
}
function m(e) {
    let t = s.Z.getGuild(e),
        n = o.Z.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === d.ME || e === d.I_8) return !1;
    if (n) return _(t);
    let r = (0, i.wC)(e) && t.hasFeature(d.oNc.GUILD_ONBOARDING) && t.hasFeature(d.oNc.GUILD_SERVER_GUIDE);
    return ((t.hasFeature(d.oNc.GUILD_ONBOARDING) && t.hasFeature(d.oNc.GUILD_SERVER_GUIDE)) || r) && t.hasFeature(d.oNc.COMMUNITY);
}
