n.d(t, { A: () => c });
var r = n(311907),
    i = n(71393),
    l = n(175650),
    a = n(567305),
    s = n(555325),
    o = n(652215);
function c(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        n = (0, a._Y)(e),
        c = (0, a.a0)(),
        u =
            (null == t ? void 0 : t.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 &&
            (null == t ? void 0 : t.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
        d = (0, s.X9)(t);
    return (
        u &&
            c &&
            d &&
            l.ok.trackExposure({
                guildId: e,
                location: "ca30d9_1",
            }),
        u && c && d && n
    );
}
