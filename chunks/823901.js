n.d(t, { y: () => I });
var i = n(477900),
    l = n(877624),
    c = n(17928),
    r = n(417098),
    s = n(597770),
    a = n(688810),
    o = n(75678),
    _ = n(412260),
    A = n(49999),
    T = n(652215),
    E = n(375708),
    u = n(971656);
function I(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: I } = (0, a.Ay)(),
        R = (0, c.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == R
        ? null
        : (0, i.jsxs)(r.$T, {
              color: r.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, i.jsx)(r.PM, {
                      onClick: () => t(A.i.USER_DISMISS),
                      noticeType: T.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(s.GiftIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: u.ez,
                  }),
                  R.body,
                  (0, i.jsx)(r.Z_, {
                      onClick: () => {
                          (0, o.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: I,
                              analyticsLocation: T.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: T.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: T.kqX.GIFTING_PROMOTION_REMINDER,
                      children: E.intl.string(E.t.RzWDqY),
                  }),
              ],
          });
}
