n.d(t, { A: () => b });
var r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(531260),
    l = n(655752),
    c = n(849528),
    o = n(764231),
    d = n(112848),
    u = n(627380),
    _ = n(149757),
    m = n(30084),
    p = n(920050),
    f = n(788868),
    A = n(985018),
    g = n(792641),
    h = n(714206);
function b(e) {
    let { fractionalState: t } = (0, s.A)(),
        n = t === f.xc.FP_ONLY,
        a = (0, d.$F)(),
        b = (0, d.Xb)(),
        x = a?.status === d.Wo.UPCOMING || n,
        C = (0, _.N)(a?.id),
        v = (0, c.z)(),
        R = (0, u.t)(),
        N = (0, l.P)();
    return (0, r.useMemo)(() => {
        let t,
            r = null != N ? A.intl.string(N.nameUnformattedNitro) : void 0;
        return (
            null == a
                ? n && (t = (0, o.T)(f.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                : (t =
                      a.status === d.Wo.UPCOMING
                          ? A.intl.formatToPlainString(A.t.a1eKDi, { days: R?.days ?? 0 })
                          : ((function (e, t) {
                                if (null != e && null != t) {
                                    if (e.days <= 30)
                                        return A.intl.formatToPlainString(A.t.NEXoaI, {
                                            days: e.days,
                                            nextBadgeName: t,
                                        });
                                    if (e.months <= 3)
                                        return A.intl.formatToPlainString(A.t.KDV8oD, {
                                            months: e.months,
                                            nextBadgeName: t,
                                        });
                                }
                            })(R, r) ??
                            (0, o.T)(a.id, a.tenureReqNumMonths) ??
                            void 0)),
            {
                id: p.TENURE_BADGE_CARD_ID,
                title: null != a ? A.intl.string(a.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
                pillText: A.intl.string(A.t["jyYgZ+"]),
                primaryAsset: null != C ? (x ? C.standard : C.ambientLarge) : n ? h : null,
                primaryAssetClassName: i()(g.p, { [g.n]: x }),
                caption: null != b ? A.intl.formatToPlainString(A.t.Hu4jfi, { date: new Date(b) }) : void 0,
                description: t,
                subscriptionRequired: !0,
                progress: v ?? void 0,
                ctaText: A.intl.string(A.t.jVcuVY),
                onCtaClick: () => (0, m.D)({ analyticsLocations: e }),
            }
        );
    }, [a, C, x, b, v, n, R, N, e]);
}
