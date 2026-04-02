n.d(t, { A: () => T });
var i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(531260),
    r = n(655752),
    o = n(849528),
    d = n(764231),
    c = n(112848),
    u = n(627380),
    m = n(149757),
    g = n(30084),
    _ = n(920050),
    x = n(788868),
    A = n(985018),
    h = n(102682),
    p = n(714206);
function T(e) {
    let { fractionalState: t } = (0, a.A)(),
        n = t === x.xc.FP_ONLY,
        s = (0, c.$F)(),
        T = (0, c.Xb)(),
        f = s?.status === c.Wo.UPCOMING || n,
        S = (0, m.N)(s?.id),
        E = (0, o.z)(),
        b = (0, u.t)(),
        C = (0, r.P)();
    return (0, i.useMemo)(() => {
        let t,
            i = null != C ? A.intl.string(C.nameUnformattedNitro) : void 0;
        return (
            null == s
                ? n && (t = (0, d.T)(x.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                : (t =
                      s.status === c.Wo.UPCOMING
                          ? A.intl.formatToPlainString(A.t.a1eKDi, { days: b?.days ?? 0 })
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
                            })(b, i) ??
                            (0, d.T)(s.id, s.tenureReqNumMonths) ??
                            void 0)),
            {
                id: _.TENURE_BADGE_CARD_ID,
                title: null != s ? A.intl.string(s.nameUnformattedNitro) : n ? A.intl.string(A.t.tx9Fvw) : "",
                pillText: A.intl.string(A.t["jyYgZ+"]),
                primaryAsset: null != S ? (f ? S.standard : S.ambientLarge) : n ? p : null,
                primaryAssetClassName: l()(h.p, { [h.n]: f }),
                caption: null != T ? A.intl.formatToPlainString(A.t.Hu4jfi, { date: new Date(T) }) : void 0,
                description: t,
                subscriptionRequired: !0,
                progress: E ?? void 0,
                ctaText: A.intl.string(A.t.jVcuVY),
                onCtaClick: () => (0, g.D)({ analyticsLocations: e }),
            }
        );
    }, [s, S, f, T, E, n, b, C, e]);
}
