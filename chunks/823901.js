n.d(t, { y: () => N });
var i = n(627968),
    a = n(877624),
    s = n(17928),
    r = n(417098),
    l = n(597770),
    c = n(688810),
    o = n(532794),
    d = n(374200),
    u = n(49999),
    m = n(652215),
    A = n(375708),
    g = n(448759);
function N(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: N } = (0, c.Ay)(),
        p = (0, s.bG)([d.A], () => {
            let e = d.A.getMarketingComponentByType(a.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == p
        ? null
        : (0, i.jsxs)(r.$T, {
              color: r.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, i.jsx)(r.PM, {
                      onClick: () => t(u.i.USER_DISMISS),
                      noticeType: m.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(l.o, { size: "custom", width: 20, height: 20, color: "currentColor", className: g.ez }),
                  p.body,
                  (0, i.jsx)(r.Z_, {
                      onClick: () => {
                          (0, o.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: N,
                              analyticsLocation: m.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: m.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: m.kqX.GIFTING_PROMOTION_REMINDER,
                      children: A.intl.string(A.t.RzWDqY),
                  }),
              ],
          });
}
