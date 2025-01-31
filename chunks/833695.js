n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    s = n(395586),
    a = n(755930),
    o = n(909667),
    c = n(968820),
    d = n(200472),
    u = n(489028),
    m = n(277369),
    h = n(215124),
    g = n(999382),
    x = n(267101),
    p = n(287576),
    _ = n(894610),
    C = n(388032);
function f(e) {
    let { listingId: t } = e,
        n = (0, x.r)(t);
    return null == n ? null : (0, i.jsx)(a.bL, { children: n.name });
}
function v(e) {
    var t, n, a;
    let { guildId: x } = e,
        v = (0, p.Z)(x),
        N = (0, s.f3)(),
        j = (0, r.e7)([g.Z], () => g.Z.getGuild());
    return v.loading || null == j
        ? (0, i.jsx)(l.$jN, {})
        : null == v.application
          ? (0, i.jsx)(u.Z, { guild: j })
          : (0, i.jsxs)(d.Z, {
                children: [
                    (0, i.jsx)(c.Z, {
                        revenue: v.metrics.revenue,
                        revenueTrend: v.metrics.revenuePctChange,
                        summaryMetricLabel: C.intl.string(C.t.R3PCmZ),
                        summaryMetricValue: null !== (n = v.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (a = v.metrics.paymentsCountChange) && void 0 !== a ? a : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, i.jsx)(_.Z, {
                            guildId: x,
                            earningsData: v
                        })
                    }),
                    (0, i.jsx)(l.hjN, {
                        title: C.intl.string(C.t['+5Rmho']),
                        children: (0, i.jsx)(o.Z, {
                            ListingIdLabel: f,
                            payoutsByPeriod: v.payoutsByPeriod,
                            team: null === (t = v.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, i.jsx)(l.hjN, {
                        title: C.intl.string(C.t.O8cDAA),
                        disabled: N,
                        children: (0, i.jsx)(m.Z, {
                            guildId: x,
                            application: v.application
                        })
                    }),
                    (0, i.jsx)(l.hjN, {
                        title: C.intl.string(C.t['0n7R2d']),
                        children: (0, i.jsx)(h.Z, {
                            guildId: x,
                            allPeriods: v.payoutsByPeriod
                        })
                    })
                ]
            });
}
