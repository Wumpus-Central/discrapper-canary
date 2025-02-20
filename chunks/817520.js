n.d(t, { Z: () => c });
var r = n(442837),
    i = n(430824),
    l = n(644542),
    o = n(923726),
    a = n(144507),
    s = n(981631);
function c(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
        n = (0, o.ss)(e),
        c = (0, o.Gp)(),
        u = (null == t ? void 0 : t.hasFeature(s.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 && (null == t ? void 0 : t.hasFeature(s.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
        d = (0, a.H2)(t);
    return (
        u &&
            c &&
            d &&
            l.jJ.trackExposure({
                guildId: e,
                location: 'ca30d9_1'
            }),
        u && c && d && n
    );
}
