"use strict";
n.d(t, { y: () => h });
var i = n(627968),
    r = n(877624),
    a = n(17928),
    s = n(417098),
    l = n(597770),
    o = n(688810),
    d = n(532794),
    c = n(412260),
    u = n(49999),
    _ = n(652215),
    E = n(375708),
    A = n(448759);
function h(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: h } = (0, o.Ay)(),
        I = (0, a.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == I
        ? null
        : (0, i.jsxs)(s.$T, {
              color: s.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, i.jsx)(s.PM, {
                      onClick: () => t(u.i.USER_DISMISS),
                      noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(l.o, { size: "custom", width: 20, height: 20, color: "currentColor", className: A.ez }),
                  I.body,
                  (0, i.jsx)(s.Z_, {
                      onClick: () => {
                          (0, d.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: h,
                              analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
                      children: E.intl.string(E.t.RzWDqY),
                  }),
              ],
          });
}
