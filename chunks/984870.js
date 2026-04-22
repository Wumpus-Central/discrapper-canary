"use strict";
n.d(t, { T: () => C });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(554146);
if (21552 == n.j) var a = n(417098);
if (21552 == n.j) var o = n(403581);
var c = n(264779),
    u = n(597758),
    d = n(780964),
    _ = n(858897),
    E = n(287809),
    A = n(954571),
    m = n(927578),
    I = n(379848),
    T = n(49999),
    N = n(652215),
    g = n(985018),
    p = n(946319);
let C = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.Cp)(),
        C = (0, l.bG)([E.default], () => !m.Ay.isPremium(E.default.getCurrentUser())),
        f = r.useCallback(() => {
            A.default.track(N.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, _.openUserSettings)(d.X.GIFT_PANEL),
                u.Ay.dismissOutboundPromotionNotice();
        }, []);
    return null == n
        ? null
        : (0, i.jsx)(I.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: T.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                      return (0, i.jsxs)(a.$T, {
                          color: a.Hv.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(a.PM, {
                                  noticeType: N.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      u.Ay.dismissOutboundPromotionNotice(), null !== n && n(T.i.USER_DISMISS);
                                  },
                              }),
                              (0, i.jsx)(o.t, { size: "md", color: "currentColor", className: p.P }),
                              C ? g.intl.string(g.t["5JMiOo"]) : g.intl.string(g.t["Pzh+G2"]),
                              (0, i.jsx)(a.Z_, {
                                  noticeType: N.kqX.OUTBOUND_PROMOTION,
                                  onClick: () => {
                                      f(), null !== n && n(T.i.TAKE_ACTION);
                                  },
                                  children: g.intl.string(g.t.jVcuVY),
                              }),
                          ],
                      });
              },
          });
};
