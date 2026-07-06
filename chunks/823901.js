"use strict";
n.d(t, { y: () => E });
var i = n(627968),
    r = n(877624),
    s = n(17928),
    a = n(417098),
    o = n(597770),
    l = n(688810),
    u = n(532794),
    c = n(374200),
    d = n(49999),
    _ = n(652215),
    h = n(375708),
    f = n(448759);
function E(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: E } = (0, l.Ay)(),
        p = (0, s.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == p
        ? null
        : (0, i.jsxs)(a.$T, {
              color: a.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, i.jsx)(a.PM, {
                      onClick: () => t(d.i.USER_DISMISS),
                      noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(o.o, { size: "custom", width: 20, height: 20, color: "currentColor", className: f.ez }),
                  p.body,
                  (0, i.jsx)(a.Z_, {
                      onClick: () => {
                          (0, u.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: E,
                              analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
                      children: h.intl.string(h.t.RzWDqY),
                  }),
              ],
          });
}
