a.d(t, { y: () => g });
var s = a(627968),
    i = a(877624),
    n = a(17928),
    r = a(417098),
    l = a(597770),
    c = a(688810),
    o = a(532794),
    d = a(374200),
    u = a(49999),
    m = a(652215),
    A = a(375708),
    N = a(448759);
let g = (e) => {
    let { markAsDismissed: t, className: a } = e,
        { analyticsLocations: g } = (0, c.Ay)(),
        p = (0, n.bG)([d.A], () => {
            let e = d.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == p
        ? null
        : (0, s.jsxs)(r.$T, {
              color: r.Hv.PREMIUM_TIER_2,
              className: a,
              children: [
                  (0, s.jsx)(r.PM, {
                      onClick: () => t(u.i.USER_DISMISS),
                      noticeType: m.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, s.jsx)(l.o, { size: "custom", width: 20, height: 20, color: "currentColor", className: N.ez }),
                  p.body,
                  (0, s.jsx)(r.Z_, {
                      onClick: () => {
                          (0, o.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: g,
                              analyticsLocation: m.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: m.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: m.kqX.GIFTING_PROMOTION_REMINDER,
                      children: A.intl.string(A.t.RzWDqY),
                  }),
              ],
          });
};
