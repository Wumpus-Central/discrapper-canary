t.d(n, { y: () => u });
var i = t(477900),
    c = t(877624),
    l = t(17928),
    o = t(417098),
    s = t(597770),
    r = t(688810),
    a = t(75678),
    _ = t(412260),
    T = t(49999),
    A = t(652215),
    E = t(375708),
    I = t(971656);
function u(e) {
    let { markAsDismissed: n, className: t } = e,
        { analyticsLocations: u } = (0, r.Ay)(),
        N = (0, l.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(c.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == N
        ? null
        : (0, i.jsxs)(o.$T, {
              color: o.Hv.PREMIUM_TIER_2,
              className: t,
              children: [
                  (0, i.jsx)(o.PM, {
                      onClick: () => n(T.i.USER_DISMISS),
                      noticeType: A.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(s.GiftIcon, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: "currentColor",
                      className: I.ez,
                  }),
                  N.body,
                  (0, i.jsx)(o.Z_, {
                      onClick: () => {
                          (0, a.A)({
                              isGift: !0,
                              initialPlanId: null,
                              analyticsLocations: u,
                              analyticsLocation: A.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                              analyticsObject: { page: A.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                          });
                      },
                      noticeType: A.kqX.GIFTING_PROMOTION_REMINDER,
                      children: E.intl.string(E.t.RzWDqY),
                  }),
              ],
          });
}
