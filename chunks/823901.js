var o = n(477900),
    l = n(877624),
    a = n(855986),
    r = n(417098),
    i = n(597770),
    d = n(688810),
    s = n(620301),
    u = n(412260),
    p = n(49999),
    c = n(652215),
    b = n(792996),
    m = n(971656);
n.d(
    t,
    {},
    {
        y: function (e) {
            let { markAsDismissed: t, className: n } = e,
                { analyticsLocations: _ } = (0, d.Ay)(),
                { openGiftModal: A } = (0, s.$)({
                    giftRecipient: null,
                    analyticsLocations: _,
                    analyticsLocation: c.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                    analyticsObject: { page: c.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                    location: "gift-promotion-reminder-nagbar",
                }),
                I = (0, a.bG)([u.A], () => {
                    let e = u.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
                    return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                        ? null
                        : e.properties.properties.giftReminderNagbar;
                });
            return null == I
                ? null
                : (0, o.jsxs)(r.$T, {
                      color: r.Hv.PREMIUM_TIER_2,
                      className: n,
                      children: [
                          (0, o.jsx)(r.PM, {
                              onClick: () => t(p.i.USER_DISMISS),
                              noticeType: c.kqX.GIFTING_PROMOTION_REMINDER,
                          }),
                          (0, o.jsx)(i.GiftIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: m.ez,
                          }),
                          I.body,
                          (0, o.jsx)(r.Z_, {
                              onClick: A,
                              noticeType: c.kqX.GIFTING_PROMOTION_REMINDER,
                              children: b.intl.string(b.t.RzWDqY),
                          }),
                      ],
                  });
        },
    },
);
