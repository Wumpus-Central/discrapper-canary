n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(28664),
    o = n(481060),
    a = n(529103),
    s = n(497089),
    c = n(849862),
    u = n(626135),
    d = n(981631),
    f = n(388032),
    p = n(658235);
function h(e) {
    let { closePopout: t } = e,
        n = (0, c.If)();
    return (0, r.jsx)(l.u, {
        asContainer: !0,
        text: f.intl.string(f.t["lMR96+"]),
        children: (0, r.jsxs)(o.P3F, {
            "aria-label": "".concat(f.intl.string(f.t["lMR96+"]), ", ").concat(n),
            className: p.friendRequestsButton,
            onClick: () => {
                u.default.track(d.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK }),
                    a.Z.transitionToSection(d.pJs.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, r.jsx)(o.iFz, {
                    size: "xs",
                    color: "currentColor",
                }),
                (0, r.jsx)(o.mAB, {
                    count: n,
                    color: i.Z.colors.BACKGROUND_ACCENT.css,
                }),
            ],
        }),
    });
}
