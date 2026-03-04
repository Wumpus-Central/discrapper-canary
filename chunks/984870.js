n.d(t, { T: () => p });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(554146),
    s = n(397927),
    o = n(728364),
    c = n(264779),
    _ = n(597758),
    E = n(780964),
    d = n(840065),
    u = n(287809),
    A = n(954571),
    T = n(927578),
    I = n(379848),
    N = n(49999),
    R = n(652215),
    S = n(788868),
    C = n(985018),
    O = n(210320);
let p = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.Cp)(),
        p = (0, r.bG)([u.default], () => T.Ay.isPremiumExactly(u.default.getCurrentUser(), S.PremiumTypes.TIER_2)),
        { enabled: m } = o.m.useExperiment(
            { location: "OutboundPromotionNotice" },
            { autoTrackExposure: !1, disable: p },
        ),
        P = l.useCallback(() => {
            A.default.track(R.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, d.openUserSettings)(E.X.GIFT_PANEL, { section: R.nc_.INVENTORY }),
                _.Ay.dismissOutboundPromotionNotice();
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
                  if (t === a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(s.$Td, {
                          color: s.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(s.PMB, {
                                  noticeType: R.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      _.Ay.dismissOutboundPromotionNotice(), null !== n && n(N.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(s.tvc, { size: "md", color: "currentColor", className: O.P }),
                              m ? C.intl.string(C.t["5JMiOo"]) : C.intl.string(C.t["Pzh+G2"]),
                              (0, i.jsx)(s.Z_L, {
                                  noticeType: R.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      P(), null !== n && n(N.i.TAKE_ACTION);
                                  },
                                  children: C.intl.string(C.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
};
