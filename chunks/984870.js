n.d(t, { T: () => A });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    l = n(728364),
    c = n(264779),
    u = n(597758),
    d = n(780964),
    f = n(840065),
    p = n(287809),
    _ = n(954571),
    h = n(927578),
    m = n(379848),
    g = n(49999),
    E = n(652215),
    b = n(788868),
    y = n(985018),
    O = n(210320);
let A = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.Cp)(),
        A = (0, a.bG)([p.default], () => h.Ay.isPremiumExactly(p.default.getCurrentUser(), b.PremiumTypes.TIER_2)),
        { enabled: v } = l.m.useExperiment(
            { location: "OutboundPromotionNotice" },
            {
                autoTrackExposure: !1,
                disable: A,
            },
        ),
        S = i.useCallback(() => {
            _.default.track(E.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, f.openUserSettings)(d.X.GIFT_PANEL, { section: E.nc_.INVENTORY }),
                u.Ay.dismissOutboundPromotionNotice();
        }, []);
    if (null == n) return null;
    let I = (e) =>
        (0, r.jsxs)(o.$Td, {
            color: o.Hv$.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(o.PMB, {
                    noticeType: E.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        u.Ay.dismissOutboundPromotionNotice(), null !== e && e(g.i.USER_DISMISS);
                    },
                }),
                (0, r.jsx)(o.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: O.P,
                }),
                v ? y.intl.string(y.t["5JMiOo"]) : y.intl.string(y.t["Pzh+G2"]),
                (0, r.jsx)(o.Z_L, {
                    noticeType: E.kqX.OUTBOUND_PROMOTION,
                    onClick: () => {
                        S(), null !== e && e(g.i.TAKE_ACTION);
                    },
                    children: y.intl.string(y.t.jVcuVY),
                }),
            ],
        });
    return (0, r.jsx)(m.YS, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: g.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return I(n);
        },
    });
};
