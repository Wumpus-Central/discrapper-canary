n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(395586),
    s = n(755930),
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
    return null == n ? null : (0, i.jsx)(s.bL, { children: n.name });
}
function _(e) {
    var t, n, s;
    let { guildId: x } = e,
        _ = (0, p.Z)(x),
        I = (0, a.f3)(),
        N = (0, r.e7)([g.Z], () => g.Z.getGuild());
    return _.loading || null == N
        ? (0, i.jsx)(l.Spinner, {})
        : null == _.application
          ? (0, i.jsx)(u.Z, { guild: N })
          : (0, i.jsxs)(d.Z, {
                children: [
                    (0, i.jsx)(c.Z, {
                        revenue: _.metrics.revenue,
                        revenueTrend: _.metrics.revenuePctChange,
                        summaryMetricLabel: C.intl.string(C.t.R3PCmZ),
                        summaryMetricValue: null !== (n = _.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (s = _.metrics.paymentsCountChange) && void 0 !== s ? s : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, i.jsx)(f.Z, {
                            guildId: x,
                            earningsData: _
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t['+5Rmho']),
                        children: (0, i.jsx)(o.Z, {
                            ListingIdLabel: v,
                            payoutsByPeriod: _.payoutsByPeriod,
                            team: null === (t = _.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t.O8cDAA),
                        disabled: I,
                        children: (0, i.jsx)(m.Z, {
                            guildId: x,
                            application: _.application
                        })
                    }),
                    (0, i.jsx)(l.FormSection, {
                        title: C.intl.string(C.t['0n7R2d']),
                        children: (0, i.jsx)(h.Z, {
                            guildId: x,
                            allPeriods: _.payoutsByPeriod
                        })
                    })
                ]
            });
}
