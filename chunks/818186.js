n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(28664),
    l = n(481060),
    o = n(529103),
    a = n(377171),
    s = n(497089),
    c = n(849862),
    u = n(626135),
    d = n(981631),
    p = n(388032),
    h = n(658235);
function f(e) {
    let { closePopout: t } = e,
        n = (0, c.If)();
    return (0, r.jsx)(i.u, {
        asContainer: !0,
        text: p.intl.string(p.t["lMR96+"]),
        children: (0, r.jsxs)(l.P3F, {
            "aria-label": "".concat(p.intl.string(p.t["lMR96+"]), ", ").concat(n),
            className: h.friendRequestsButton,
            onClick: () => {
                u.default.track(d.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK }),
                    o.Z.transitionToSection(d.pJs.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, r.jsx)(l.iFz, {
                    size: "xs",
                    color: "currentColor",
                }),
                (0, r.jsx)(l.mAB, {
                    count: n,
                    color: a.Z.BACKGROUND_ACCENT,
                }),
            ],
        }),
    });
}
