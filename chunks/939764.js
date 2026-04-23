n.d(t, { V: () => d });
var l = n(64700),
    a = n(311907),
    i = n(429913),
    r = n(832163),
    s = n(594832),
    o = n(631784),
    c = n(287809);
function d(e) {
    let t = c.default.getCurrentUser()?.id,
        n = l.useMemo(() => (null != t ? [t] : []), [t]),
        d = (0, a.bG)([r.A], () => (null != e ? r.A.getApplicationIdFromDetectableId(e.id) : void 0)),
        u = (0, i.h)(d),
        m = l.useMemo(() => (null != d ? [d] : []), [d]),
        { recommendations: h, status: f } = (0, o.XQ)({
            applicationIds: m,
            userIds: n,
            numItems: 6,
            source: s.B5.USER_PROFILE,
        });
    return {
        socialLayerStorefrontRecommendationsData: l.useMemo(
            () =>
                null == u || null == u.guildId || "success" !== f || 0 === h.length
                    ? null
                    : { application: u, skuIds: h.map((e) => e.id), guildId: u.guildId },
            [u, f, h],
        ),
    };
}
