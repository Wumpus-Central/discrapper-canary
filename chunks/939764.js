n.d(t, { V: () => d });
var a = n(64700),
    l = n(311907),
    i = n(429913),
    r = n(832163),
    s = n(594832),
    c = n(631784),
    o = n(287809);
function d(e) {
    let t = o.default.getCurrentUser()?.id,
        n = a.useMemo(() => (null != t ? [t] : []), [t]),
        d = (0, l.bG)([r.A], () => (null != e ? r.A.getApplicationIdFromDetectableId(e.id) : void 0)),
        u = (0, i.h)(d),
        m = a.useMemo(() => (null != d ? [d] : []), [d]),
        { recommendations: x, status: f } = (0, c.XQ)({
            applicationIds: m,
            userIds: n,
            numItems: 6,
            source: s.B5.USER_PROFILE,
        });
    return {
        socialLayerStorefrontRecommendationsData: a.useMemo(
            () =>
                null == u || null == u.guildId || "success" !== f || 0 === x.length
                    ? null
                    : { application: u, skuIds: x.map((e) => e.id), guildId: u.guildId },
            [u, f, x],
        ),
    };
}
