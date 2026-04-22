"use strict";
n.d(t, { y: () => m });
var i = n(627968),
    r = n(877624),
    l = n(311907);
if (21552 == n.j) var s = n(417098);
if (21552 == n.j) var a = n(597770);
var o = n(688810),
    c = n(532794),
    u = n(412260),
    d = n(49999),
    _ = n(652215),
    E = n(985018),
    A = n(448759);
let m = (e) => {
    let { markAsDismissed: t } = e,
        { analyticsLocations: n } = (0, o.Ay)(),
        m = (0, l.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == m
        ? null
        : (0, i.jsxs)(s.$T, {
              color: s.Hv.PREMIUM_TIER_2,
              children: [
                  (0, i.jsx)(s.PM, {
                      onClick: () => t(d.i.USER_DISMISS),
                      noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(a.o, { size: "custom", width: 20, height: 20, color: "currentColor", className: A.ez }),
                  m.body,
                  (0, i.jsx)(s.Z_, {
                      onClick: () => {
                          (0, c.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: n,
                              analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
                      children: E.intl.string(E.t.RzWDqY),
                  }),
              ],
          });
};
