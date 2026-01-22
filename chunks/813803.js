n.d(t, {
    _: () => g,
});
var r = n(627968);
n(64700);
var i = n(877624),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    l = n(688810),
    c = n(532794),
    u = n(412260),
    d = n(357186),
    f = n(379848),
    p = n(49999),
    _ = n(652215),
    h = n(985018),
    m = n(237082);
let g = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: g } = (0, l.Ay)(),
        E = (0, a.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return (0, r.jsx)(f.GY, {
        contentType: t,
        latestVersion: (0, d.c)(t),
        groupName: p.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            if (t === s.M.GIFTING_PROMOTION_REMINDER)
                return null == E
                    ? null
                    : (0, r.jsxs)(o.$Td, {
                          color: o.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, r.jsx)(o.PMB, {
                                  onClick: () => i(p.i.USER_DISMISS),
                                  noticeType: n,
                              }),
                              (0, r.jsx)(o.okO, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: m.ez,
                              }),
                              E.body,
                              (0, r.jsx)(o.Z_L, {
                                  onClick: () => {
                                      (0, c.A)({
                                          isGift: !0,
                                          initialPlanId: null,
                                          analyticsLocations: g,
                                          analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                                          analyticsObject: {
                                              page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
                                          },
                                      });
                                  },
                                  noticeType: n,
                                  children: h.intl.string(h.t.RzWDqY),
                              }),
                          ],
                      });
        },
    });
};
