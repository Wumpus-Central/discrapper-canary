n.d(t, { _: () => N });
var i = n(627968);
n(64700);
var l = n(877624),
    r = n(311907),
    a = n(554146),
    s = n(397927),
    o = n(688810),
    c = n(532794),
    _ = n(412260),
    E = n(357186),
    d = n(379848),
    u = n(49999),
    A = n(652215),
    T = n(985018),
    I = n(237082);
let N = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: N } = (0, o.Ay)(),
        R = (0, r.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        });
    return (0, i.jsx)(d.GY, {
        contentType: t,
        latestVersion: (0, E.c)(t),
        groupName: u.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: l } = e;
            if (t === a.M.GIFTING_PROMOTION_REMINDER)
                return null == R
                    ? null
                    : (0, i.jsxs)(s.$Td, {
                          color: s.Hv$.PREMIUM_TIER_2,
                          children: [
                              (0, i.jsx)(s.PMB, { onClick: () => l(u.i.USER_DISMISS), noticeType: n }),
                              (0, i.jsx)(s.okO, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: I.ez,
                              }),
                              R.body,
                              (0, i.jsx)(s.Z_L, {
                                  onClick: () => {
                                      (0, c.A)({
                                          isGift: !0,
                                          initialPlanId: null,
                                          analyticsLocations: N,
                                          analyticsLocation: A.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                                          analyticsObject: { page: A.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                                      });
                                  },
                                  noticeType: n,
                                  children: T.intl.string(T.t.RzWDqY),
                              }),
                          ],
                      });
        },
    });
};
