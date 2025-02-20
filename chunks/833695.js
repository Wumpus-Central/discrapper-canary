n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(399606),
    s = n(481060),
    a = n(395586),
    l = n(755930),
    o = n(909667),
    c = n(968820),
    d = n(200472),
    u = n(489028),
    m = n(277369),
    p = n(215124),
    g = n(999382),
    h = n(267101),
    f = n(287576),
    b = n(894610),
    x = n(388032);
function j(e) {
    let { listingId: t } = e,
        n = (0, h.r)(t);
    return null == n ? null : (0, r.jsx)(l.bL, { children: n.name });
}
function N(e) {
    var t, n, l;
    let { guildId: h } = e,
        N = (0, f.Z)(h),
        v = (0, a.f3)(),
        _ = (0, i.e7)([g.Z], () => g.Z.getGuild());
    return N.loading || null == _
        ? (0, r.jsx)(s.$jN, {})
        : null == N.application
          ? (0, r.jsx)(u.Z, { guild: _ })
          : (0, r.jsxs)(d.Z, {
                children: [
                    (0, r.jsx)(c.Z, {
                        revenue: N.metrics.revenue,
                        revenueTrend: N.metrics.revenuePctChange,
                        summaryMetricLabel: x.NW.string(x.t.R3PCmZ),
                        summaryMetricValue: null !== (n = N.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (l = N.metrics.paymentsCountChange) && void 0 !== l ? l : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, r.jsx)(b.Z, {
                            guildId: h,
                            earningsData: N
                        })
                    }),
                    (0, r.jsx)(s.hjN, {
                        title: x.NW.string(x.t['+5Rmho']),
                        children: (0, r.jsx)(o.Z, {
                            ListingIdLabel: j,
                            payoutsByPeriod: N.payoutsByPeriod,
                            team: null === (t = N.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, r.jsx)(s.hjN, {
                        title: x.NW.string(x.t.O8cDAA),
                        disabled: v,
                        children: (0, r.jsx)(m.Z, {
                            guildId: h,
                            application: N.application
                        })
                    }),
                    (0, r.jsx)(s.hjN, {
                        title: x.NW.string(x.t['0n7R2d']),
                        children: (0, r.jsx)(p.Z, {
                            guildId: h,
                            allPeriods: N.payoutsByPeriod
                        })
                    })
                ]
            });
}
