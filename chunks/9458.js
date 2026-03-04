n.d(t, { A: () => p });
var i = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(531260),
    r = n(849528),
    o = n(764231),
    c = n(112848),
    d = n(627380),
    u = n(149757),
    _ = n(30084),
    m = n(920050),
    A = n(788868),
    g = n(985018),
    h = n(160664),
    x = n(714206);
function p(e) {
    let { fractionalState: t } = (0, l.A)(),
        n = t === A.xc.FP_ONLY,
        s = (0, c.$F)(),
        p = (0, c.Xb)(),
        E = s?.status === c.Wo.UPCOMING || n,
        C = (0, u.N)(s?.id),
        T = (0, r.z)(),
        S = (0, d.t)();
    return (0, i.useMemo)(() => {
        let t,
            i = null != S && S.days <= 30;
        return (
            null != s
                ? s.status === c.Wo.UPCOMING
                    ? (t = g.intl.formatToPlainString(g.t.a1eKDi, { days: S?.days ?? 0 }))
                    : (t = (0, o.T)(s.id, s.tenureReqNumMonths) ?? void 0)
                : n && (t = (0, o.T)(A.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0),
            {
                id: m.TENURE_BADGE_CARD_ID,
                title: null != s ? g.intl.string(s.nameUnformattedNitro) : n ? g.intl.string(g.t.tx9Fvw) : "",
                pillText: g.intl.string(g.t["jyYgZ+"]),
                primaryAsset: null != C ? (E ? C.standard : C.ambientLarge) : n ? x : null,
                primaryAssetClassName: a()(h.p, { [h.n]: E }),
                caption: null != p ? g.intl.formatToPlainString(g.t.Hu4jfi, { date: new Date(p) }) : void 0,
                description: t,
                subscriptionRequired: !0,
                progress: T ?? void 0,
                ctaText: g.intl.string(g.t.jVcuVY),
                onCtaClick: () => (0, _.D)({ analyticsLocations: e }),
            }
        );
    }, [s, C, E, p, T, n, S, e]);
}
