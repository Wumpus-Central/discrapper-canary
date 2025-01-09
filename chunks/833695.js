n.d(t, {
    Z: function () {
        return N;
    }
});
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
    f = n(894610),
    C = n(388032);
function v(e) {
    let { listingId: t } = e,
        n = (0, x.r)(t);
    return null == n ? null : (0, i.jsx)(a.bL, { children: n.name });
}
function N(e) {
    var t, n, a;
    let { guildId: x } = e,
        N = (0, p.Z)(x),
        _ = (0, s.f3)(),
        I = (0, r.e7)([g.Z], () => g.Z.getGuild());
    return N.loading || null == I
        ? (0, i.jsx)(l.Spinner, {})
        : null == N.application
          ? (0, i.jsx)(u.Z, { guild: I })
          : (0, i.jsxs)(d.Z, {
                children: [
                    (0, i.jsx)(c.Z, {
                        revenue: N.metrics.revenue,
                        revenueTrend: N.metrics.revenuePctChange,
                        summaryMetricLabel: C.intl.string(C.t.R3PCmZ),
                        summaryMetricValue: null !== (n = N.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (a = N.metrics.paymentsCountChange) && void 0 !== a ? a : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, i.jsx)(f.Z, {
                            guildId: x,
                            earningsData: N
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t['+5Rmho']),
                        children: (0, i.jsx)(o.Z, {
                            ListingIdLabel: v,
                            payoutsByPeriod: N.payoutsByPeriod,
                            team: null === (t = N.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t.O8cDAA),
                        disabled: _,
                        children: (0, i.jsx)(m.Z, {
                            guildId: x,
                            application: N.application
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t['0n7R2d']),
                        children: (0, i.jsx)(h.Z, {
                            guildId: x,
                            allPeriods: N.payoutsByPeriod
                        })
                    })
                ]
            });
}
