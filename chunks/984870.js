"use strict";
n.d(t, { T: () => p });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(728364),
    E = n(264779),
    c = n(597758),
    _ = n(780964),
    d = n(840065),
    A = n(287809),
    u = n(954571),
    T = n(927578),
    I = n(379848),
    N = n(49999),
    R = n(652215),
    S = n(788868),
    O = n(985018),
    C = n(210320);
let p = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, E.Cp)(),
        p = (0, l.bG)([A.default], () => T.Ay.isPremiumExactly(A.default.getCurrentUser(), S.PremiumTypes.TIER_2)),
        { enabled: P } = o.m.useExperiment(
            { location: "OutboundPromotionNotice" },
            { autoTrackExposure: !1, disable: p },
        ),
        D = r.useCallback(() => {
            u.default.track(R.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, d.openUserSettings)(_.X.GIFT_PANEL, { section: R.nc_.INVENTORY }),
                c.Ay.dismissOutboundPromotionNotice();
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
                                  noticeType: R.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      c.Ay.dismissOutboundPromotionNotice(), null !== n && n(N.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: C.P }),
                              P ? O.intl.string(O.t["5JMiOo"]) : O.intl.string(O.t["Pzh+G2"]),
                              (0, i.jsx)(a.Z_L, {
                                  noticeType: R.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      D(), null !== n && n(N.i.TAKE_ACTION);
                                  },
                                  children: O.intl.string(O.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
};
