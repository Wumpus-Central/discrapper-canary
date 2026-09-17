t.d(n, { y: () => I });
var i = t(477900),
    l = t(877624),
    c = t(17928),
    r = t(417098),
    o = t(597770),
    s = t(688810),
    a = t(75678),
    _ = t(412260),
    A = t(49999),
    T = t(652215),
    u = t(375708),
    E = t(971656);
function I(e) {
    let { markAsDismissed: n, className: t } = e,
        { analyticsLocations: I } = (0, s.Ay)(),
        d = (0, c.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == d
        ? null
        : (0, i.jsxs)(r.$T, {
              color: r.Hv.PREMIUM_TIER_2,
              className: t,
              children: [
                  (0, i.jsx)(r.PM, {
                      onClick: () => n(A.i.USER_DISMISS),
                      noticeType: T.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(o.GiftIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: E.ez,
                  }),
                  d.body,
                  (0, i.jsx)(r.Z_, {
                      onClick: () => {
                          (0, a.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: I,
                              analyticsLocation: T.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: T.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: T.kqX.GIFTING_PROMOTION_REMINDER,
                      children: u.intl.string(u.t.RzWDqY),
                  }),
              ],
          });
}
