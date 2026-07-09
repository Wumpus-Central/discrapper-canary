n.d(t, { y: () => I });
var i = n(627968),
    l = n(877624),
    r = n(17928),
    c = n(417098),
    a = n(597770),
    s = n(688810),
    o = n(532794),
    _ = n(412260),
    u = n(49999),
    T = n(652215),
    A = n(375708),
    E = n(846775);
function I(e) {
    let { markAsDismissed: t, className: n } = e,
        { analyticsLocations: I } = (0, s.Ay)(),
        R = (0, r.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return null == R
        ? null
        : (0, i.jsxs)(c.$T, {
              color: c.Hv.PREMIUM_TIER_2,
              className: n,
              children: [
                  (0, i.jsx)(c.PM, {
                      onClick: () => t(u.i.USER_DISMISS),
                      noticeType: T.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(a.o, { size: "custom", width: 20, height: 20, color: "currentColor", className: E.ez }),
                  R.body,
                  (0, i.jsx)(c.Z_, {
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
                      children: A.intl.string(A.t.RzWDqY),
                  }),
              ],
          });
}
