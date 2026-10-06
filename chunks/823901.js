n.d(t, { y: () => A });
var o = n(477900),
    l = n(877624),
    a = n(17928),
    r = n(417098),
    i = n(597770),
    d = n(688810),
    s = n(75678),
    p = n(412260),
    u = n(49999),
    c = n(652215),
    b = n(375708),
    m = n(971656);
function A(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: A } = (0, d.Ay)(),
        _ = (0, a.bG)([p.A], () => {
            let e = p.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == _
        ? null
        : (0, o.jsxs)(r.$T, {
              color: r.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, o.jsx)(r.PM, {
                      onClick: () => t(u.i.USER_DISMISS),
                      noticeType: c.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, o.jsx)(i.GiftIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: m.ez,
                  }),
                  _.body,
                  (0, o.jsx)(r.Z_, {
                      onClick: () => {
                          (0, s.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: A,
                              analyticsLocation: c.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: c.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: c.kqX.GIFTING_PROMOTION_REMINDER,
                      children: b.intl.string(b.t.RzWDqY),
                  }),
              ],
          });
}
