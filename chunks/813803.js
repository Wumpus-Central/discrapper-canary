n.d(t, { _: () => p }), n(228524);
var r = n(627968);
n(64700);
var i = n(554146),
    a = n(397927),
    s = n(688810),
    o = n(532794),
    l = n(552736),
    c = n(357186),
    u = n(379848),
    d = n(49999),
    f = n(237082);
let p = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: p } = (0, s.Ay)(),
        _ = (0, l.A)();
    return (0, r.jsx)(u.GY, {
        contentType: t,
        latestVersion: (0, c.c)(t),
        groupName: d.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: s } = e;
            if (t === i.M.GIFTING_PROMOTION_REMINDER) {
                let e = null == _ ? void 0 : _.reminderNagbar;
                return (0, r.jsxs)(a.$Td, {
                    color: a.Hv$.PREMIUM_TIER_2,
                    children: [
                        (0, r.jsx)(a.PMB, {
                            onClick: () => s(d.i.USER_DISMISS),
                            noticeType: n,
                        }),
                        (0, r.jsx)(a.okO, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: f.ez,
                        }),
                        null == e ? void 0 : e.description(),
                        (0, r.jsx)(a.Z_L, {
                            onClick: () => {
                                (0, o.A)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    analyticsLocations: p,
                                    analyticsLocation: null == e ? void 0 : e.analyticsLocation,
                                    analyticsObject: { page: null == e ? void 0 : e.analyticsPage },
                                });
                            },
                            noticeType: n,
                            children: null == e ? void 0 : e.cta(),
                        }),
                    ],
                });
            }
        },
    });
};
