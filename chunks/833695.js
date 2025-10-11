n.d(t, { Z: () => v });
var r = n(951288),
    i = n(399606),
    l = n(481060),
    a = n(395586),
    s = n(755930),
    o = n(909667),
    c = n(968820),
    d = n(200472),
    u = n(489028),
    g = n(277369),
    m = n(215124),
    p = n(999382),
    f = n(267101),
    h = n(287576),
    b = n(894610),
    x = n(388032);
function j(e) {
    let { listingId: t } = e,
        n = (0, f.r)(t);
    return null == n ? null : (0, r.jsx)(s.bL, { children: n.name });
}
function v(e) {
    var t, n, s;
    let { guildId: f } = e,
        v = (0, h.Z)(f),
        _ = (0, a.f3)(),
        C = (0, i.e7)([p.Z], () => p.Z.getGuild());
    return v.loading || null == C
        ? (0, r.jsx)(l.$jN, {})
        : null == v.application
          ? (0, r.jsx)(u.Z, { guild: C })
          : (0, r.jsxs)(d.Z, {
                children: [
                    (0, r.jsx)(c.Z, {
                        revenue: v.metrics.revenue,
                        revenueTrend: v.metrics.revenuePctChange,
                        summaryMetricLabel: x.intl.string(x.t.R3PCmZ),
                        summaryMetricValue: null != (n = v.metrics.paymentsCount) ? n : "-",
                        summaryMetricTrend: null != (s = v.metrics.paymentsCountChange) ? s : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, r.jsx)(b.Z, {
                            guildId: f,
                            earningsData: v,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t["+5Rmho"]),
                        children: (0, r.jsx)(o.Z, {
                            ListingIdLabel: j,
                            payoutsByPeriod: v.payoutsByPeriod,
                            team: null == (t = v.application) ? void 0 : t.team,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t.O8cDAA),
                        disabled: _,
                        children: (0, r.jsx)(g.Z, {
                            guildId: f,
                            application: v.application,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t["0n7R2d"]),
                        children: (0, r.jsx)(m.Z, {
                            guildId: f,
                            allPeriods: v.payoutsByPeriod,
                        }),
                    }),
                ],
            });
}
