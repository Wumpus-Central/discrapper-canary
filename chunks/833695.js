n.d(t, { Z: () => _ });
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
function _(e) {
    var t, n, s;
    let { guildId: f } = e,
        _ = (0, h.Z)(f),
        v = (0, a.f3)(),
        O = (0, i.e7)([p.Z], () => p.Z.getGuild());
    return _.loading || null == O
        ? (0, r.jsx)(l.$jN, {})
        : null == _.application
          ? (0, r.jsx)(u.Z, { guild: O })
          : (0, r.jsxs)(d.Z, {
                children: [
                    (0, r.jsx)(c.Z, {
                        revenue: _.metrics.revenue,
                        revenueTrend: _.metrics.revenuePctChange,
                        summaryMetricLabel: x.intl.string(x.t.R3PCmW),
                        summaryMetricValue: null != (n = _.metrics.paymentsCount) ? n : "-",
                        summaryMetricTrend: null != (s = _.metrics.paymentsCountChange) ? s : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, r.jsx)(b.Z, {
                            guildId: f,
                            earningsData: _,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t["+5Rmhl"]),
                        children: (0, r.jsx)(o.Z, {
                            ListingIdLabel: j,
                            payoutsByPeriod: _.payoutsByPeriod,
                            team: null == (t = _.application) ? void 0 : t.team,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t.O8cDAJ),
                        disabled: v,
                        children: (0, r.jsx)(g.Z, {
                            guildId: f,
                            application: _.application,
                        }),
                    }),
                    (0, r.jsx)(l.gNt, {
                        label: x.intl.string(x.t["0n7R2X"]),
                        children: (0, r.jsx)(m.Z, {
                            guildId: f,
                            allPeriods: _.payoutsByPeriod,
                        }),
                    }),
                ],
            });
}
