var l = n(477900),
    o = n(517352),
    a = n(855986),
    r = n(417098),
    i = n(597770),
    d = n(688810),
    s = n(430783),
    u = n(620301),
    p = n(412260),
    c = n(49999),
    b = n(652215),
    _ = n(792996),
    m = n(971656);
n.d(
    t,
    {},
    {
        y: function (e) {
            let { markAsDismissed: t, className: n } = e,
                { analyticsLocations: I } = (0, d.Ay)(),
                { openGiftModal: A } = (0, u.$)({
                    giftRecipient: null,
                    analyticsLocations: I,
                    analyticsLocation: b.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                    analyticsObject: { page: b.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                    location: "gift-promotion-reminder-nagbar",
                }),
                f = (0, a.bG)([p.A], () => {
                    let e = p.A.getMarketingComponentBySurface(o.oW.GIFT_REMINDER_NAGBAR);
                    return e?.surface ?? null;
                });
            if (null == f) return null;
            let E = (0, l.jsxs)(r.$T, {
                color: r.Hv.PREMIUM_TIER_2,
                className: n,
                children: [
                    (0, l.jsx)(r.PM, {
                        onClick: () => t(c.i.USER_DISMISS),
                        noticeType: b.kqX.GIFTING_PROMOTION_REMINDER,
                    }),
                    (0, l.jsx)(i.GiftIcon, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        className: m.ez,
                    }),
                    f.body,
                    (0, l.jsx)(r.Z_, {
                        onClick: A,
                        noticeType: b.kqX.GIFTING_PROMOTION_REMINDER,
                        children: _.intl.string(_.t.RzWDqY),
                    }),
                ],
            });
            return (0, l.jsx)(s.qg, {
                noticeType: b.kqX.GIFTING_PROMOTION_REMINDER,
                variant: "promotion",
                type: "nitro",
                leadingAccessory: (0, l.jsx)(i.GiftIcon, { size: "md", color: "currentColor" }),
                message: f.body,
                primaryAction: { text: _.intl.string(_.t.RzWDqY), onClick: A },
                onDismiss: () => t(c.i.USER_DISMISS),
                legacy: E,
            });
        },
    },
);
