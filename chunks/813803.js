"use strict";
n.d(t, { _: () => N });
var i = n(627968);
n(64700);
var r = n(877624),
    l = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(688810),
    E = n(532794),
    c = n(412260),
    _ = n(357186),
    d = n(379848),
    A = n(49999),
    u = n(652215),
    T = n(985018),
    I = n(237082);
let N = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: N } = (0, o.Ay)(),
        R = (0, l.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return (0, i.jsx)(d.GY, {
        contentType: t,
        latestVersion: (0, _.c)(t),
        groupName: A.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            if (t === s.M.GIFTING_PROMOTION_REMINDER)
                return null == R
                    ? null
                    : (0, i.jsxs)(a.$Td, {
                          color: a.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(a.PMB, { onClick: () => r(A.i.USER_DISMISS), noticeType: n }),
                              (0, i.jsx)(a.okO, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: I.ez,
                              }),
                              R.body,
                              (0, i.jsx)(a.Z_L, {
                                  onClick: () => {
                                      (0, E.A)({
                                          isGift: !0,
                                          initialPlanId: null,
                                          analyticsLocations: N,
                                          analyticsLocation: u.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                                          analyticsObject: { page: u.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                                      });
                                  },
                                  noticeType: n,
                                  children: T.intl.string(T.t.RzWDqY),
                              }),
                          ],
                      });
        },
    });
};
