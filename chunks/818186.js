n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(529103),
    o = n(377171),
    a = n(497089),
    s = n(849862),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    p = n(658235);
function h(e) {
    let { closePopout: t } = e,
        n = (0, s.If)();
    return (0, r.jsx)(i.DY3, {
        text: d.intl.string(d.t["lMR96+"]),
        children: (0, r.jsxs)(i.P3F, {
            "aria-label": "".concat(d.intl.string(d.t["lMR96+"]), ", ").concat(n),
            className: p.friendRequestsButton,
            onClick: () => {
                c.default.track(u.rMx.NOTIFICATION_CENTER_ACTION, { action_type: a.ud.FRIEND_REQUESTS_BUTTON_CLICK }),
                    l.Z.transitionToSection(u.pJs.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, r.jsx)(i.iFz, {
                    size: "xs",
                    color: "currentColor",
                }),
                (0, r.jsx)(i.mAB, {
                    count: n,
                    color: o.Z.BACKGROUND_ACCENT,
                }),
            ],
        }),
    });
}
