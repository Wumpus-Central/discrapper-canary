n.d(t, { Z: () => d });
var i = n(442837),
    l = n(430824),
    r = n(644542),
    a = n(923726),
    s = n(144507),
    o = n(981631);
function d(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        n = (0, a.ss)(e),
        d = (0, a.Gp)(),
        c = (null == t ? void 0 : t.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 && (null == t ? void 0 : t.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
        u = (0, s.H2)(t);
    return (
        c &&
            d &&
            u &&
            r.jJ.trackExposure({
                guildId: e,
                location: 'ca30d9_1'
            }),
        c && d && u && n
    );
}
