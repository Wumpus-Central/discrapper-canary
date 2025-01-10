n.d(t, {
    Z: function () {
        return I;
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
function I(e) {
    var t, n, a;
    let { guildId: x } = e,
        I = (0, p.Z)(x),
        N = (0, s.f3)(),
        _ = (0, r.e7)([g.Z], () => g.Z.getGuild());
    return I.loading || null == _
        ? (0, i.jsx)(l.Spinner, {})
        : null == I.application
          ? (0, i.jsx)(u.Z, { guild: _ })
          : (0, i.jsxs)(d.Z, {
                children: [
                    (0, i.jsx)(c.Z, {
                        revenue: I.metrics.revenue,
                        revenueTrend: I.metrics.revenuePctChange,
                        summaryMetricLabel: C.intl.string(C.t.R3PCmZ),
                        summaryMetricValue: null !== (n = I.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (a = I.metrics.paymentsCountChange) && void 0 !== a ? a : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, i.jsx)(f.Z, {
                            guildId: x,
                            earningsData: I
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t['+5Rmho']),
                        children: (0, i.jsx)(o.Z, {
                            ListingIdLabel: v,
                            payoutsByPeriod: I.payoutsByPeriod,
                            team: null === (t = I.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t.O8cDAA),
                        disabled: N,
                        children: (0, i.jsx)(m.Z, {
                            guildId: x,
                            application: I.application
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t['0n7R2d']),
                        children: (0, i.jsx)(h.Z, {
                            guildId: x,
                            allPeriods: I.payoutsByPeriod
                        })
                    })
                ]
            });
}
