n.d(t, {
    T: () => P,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    o = n(554146),
    a = n(397927),
    s = n(728364),
    c = n(264779),
    u = n(597758),
    E = n(780964),
    d = n(840065),
    _ = n(287809),
    T = n(954571),
    A = n(927578),
    I = n(379848),
    O = n(49999),
    N = n(652215),
    p = n(788868),
    R = n(985018),
    S = n(210320);
let P = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.Cp)(),
        P = (0, l.bG)([_.default], () => A.Ay.isPremiumExactly(_.default.getCurrentUser(), p.PremiumTypes.TIER_2)),
        { enabled: y } = s.m.useExperiment(
            {
                location: "OutboundPromotionNotice",
            },
            {
                autoTrackExposure: !1,
                disable: P,
            },
        ),
        f = i.useCallback(() => {
            T.default.track(N.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, d.openUserSettings)(E.X.GIFT_PANEL, {
                    section: N.nc_.INVENTORY,
                }),
                u.Ay.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, r.jsx)(I.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: {
                  cooldownDurationMs: 0,
              },
              groupName: O.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, r.jsxs)(a.$Td, {
                          color: a.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(a.PMB, {
                                  noticeType: N.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      u.Ay.dismissOutboundPromotionNotice(), null !== n && n(O.i.USER_DISMISS);
                                  },
                              }),
                              (0, r.jsx)(a.tvc, {
                                  size: "md",
                                  color: "currentColor",
                                  className: S.P,
                              }),
                              y ? R.intl.string(R.t["5JMiOo"]) : R.intl.string(R.t["Pzh+G2"]),
                              (0, r.jsx)(a.Z_L, {
                                  noticeType: N.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      f(), null !== n && n(O.i.TAKE_ACTION);
                                  },
                                  children: R.intl.string(R.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
};
