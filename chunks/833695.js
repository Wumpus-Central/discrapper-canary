n.d(t, { Z: () => v });
var r = n(54381),
    i = n(399606),
    l = n(481060),
    a = n(395586),
    s = n(755930),
    o = n(909667),
    c = n(968820),
    d = n(200472),
    u = n(489028),
    g = n(277369),
    f = n(215124),
    m = n(999382),
    b = n(267101),
    p = n(287576),
    h = n(894610),
    x = n(388032);
function j(e) {
    let { listingId: t } = e,
        n = (0, b.r)(t);
    return null == n ? null : (0, r.jsx)(s.bL, { children: n.name });
}
function v(e) {
    var t, n, s;
    let { guildId: b } = e,
        v = (0, p.Z)(b),
        O = (0, a.f3)(),
        C = (0, i.e7)([m.Z], () => m.Z.getGuild());
    return v.loading || null == C
        ? (0, r.jsx)(l.$jN, {})
        : null == v.application
          ? (0, r.jsx)(u.Z, { guild: C })
          : (0, r.jsxs)(d.Z, {
                children: [
                    (0, r.jsx)(c.Z, {
                        revenue: v.metrics.revenue,
                        revenueTrend: v.metrics.revenuePctChange,
                        summaryMetricLabel: x.intl.string(x.t.R3PCmW),
                        summaryMetricValue: null != (n = v.metrics.paymentsCount) ? n : "-",
                        summaryMetricTrend: null != (s = v.metrics.paymentsCountChange) ? s : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, r.jsx)(h.Z, {
                            guildId: b,
                            earningsData: v,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t["+5Rmhl"]),
                        children: (0, r.jsx)(o.Z, {
                            ListingIdLabel: j,
                            payoutsByPeriod: v.payoutsByPeriod,
                            team: null == (t = v.application) ? void 0 : t.team,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t.O8cDAJ),
                        disabled: O,
                        children: (0, r.jsx)(g.Z, {
                            guildId: b,
                            application: v.application,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t["0n7R2X"]),
                        children: (0, r.jsx)(f.Z, {
                            guildId: b,
                            allPeriods: v.payoutsByPeriod,
                        }),
                    }),
                ],
            });
}
