n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    s = n(395586),
    a = n(755930),
    o = n(909667),
    c = n(968820),
    u = n(200472),
    d = n(489028),
    m = n(277369),
    g = n(215124),
    p = n(999382),
    f = n(267101),
    h = n(287576),
    x = n(894610),
    b = n(388032);
function j(e) {
    let { listingId: t } = e,
        n = (0, f.r)(t);
    return null == n ? null : (0, r.jsx)(a.bL, { children: n.name });
}
function _(e) {
    var t, n, a;
    let { guildId: f } = e,
        _ = (0, h.Z)(f),
        v = (0, s.f3)(),
        O = (0, i.e7)([p.Z], () => p.Z.getGuild());
    return _.loading || null == O
        ? (0, r.jsx)(l.$jN, {})
        : null == _.application
          ? (0, r.jsx)(d.Z, { guild: O })
          : (0, r.jsxs)(u.Z, {
                children: [
                    (0, r.jsx)(c.Z, {
                        revenue: _.metrics.revenue,
                        revenueTrend: _.metrics.revenuePctChange,
                        summaryMetricLabel: b.intl.string(b.t.R3PCmZ),
                        summaryMetricValue: null != (n = _.metrics.paymentsCount) ? n : '-',
                        summaryMetricTrend: null != (a = _.metrics.paymentsCountChange) ? a : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, r.jsx)(x.Z, {
                            guildId: f,
                            earningsData: _
                        })
                    }),
                    (0, r.jsx)(l.hjN, {
                        title: b.intl.string(b.t['+5Rmho']),
                        children: (0, r.jsx)(o.Z, {
                            ListingIdLabel: j,
                            payoutsByPeriod: _.payoutsByPeriod,
                            team: null == (t = _.application) ? void 0 : t.team
                        })
                    }),
                    (0, r.jsx)(l.hjN, {
                        title: b.intl.string(b.t.O8cDAA),
                        disabled: v,
                        children: (0, r.jsx)(m.Z, {
                            guildId: f,
                            application: _.application
                        })
                    }),
                    (0, r.jsx)(l.hjN, {
                        title: b.intl.string(b.t['0n7R2d']),
                        children: (0, r.jsx)(g.Z, {
                            guildId: f,
                            allPeriods: _.payoutsByPeriod
                        })
                    })
                ]
            });
}
