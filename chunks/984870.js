n.d(t, { T: () => S });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(728364),
    c = n(264779),
    d = n(597758),
    u = n(780964),
    _ = n(840065),
    E = n(287809),
    T = n(954571),
    A = n(927578),
    I = n(379848),
    N = n(49999),
    p = n(652215),
    m = n(788868),
    R = n(985018),
    h = n(210320);
let S = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.Cp)(),
        S = (0, r.bG)([E.default], () => A.Ay.isPremiumExactly(E.default.getCurrentUser(), m.PremiumTypes.TIER_2)),
        { enabled: g } = o.m.useExperiment(
            { location: "OutboundPromotionNotice" },
            { autoTrackExposure: !1, disable: S },
        ),
        C = l.useCallback(() => {
            T.default.track(p.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, _.openUserSettings)(u.X.GIFT_PANEL),
                d.Ay.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(I.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: N.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(a.$Td, {
                          color: a.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(a.PMB, {
                                  noticeType: p.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      d.Ay.dismissOutboundPromotionNotice(), null !== n && n(N.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: h.P }),
                              g ? R.intl.string(R.t["5JMiOo"]) : R.intl.string(R.t["Pzh+G2"]),
                              (0, i.jsx)(a.Z_L, {
                                  noticeType: p.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      C(), null !== n && n(N.i.TAKE_ACTION);
                                  },
                                  children: R.intl.string(R.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
};
