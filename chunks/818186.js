n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(28664),
    a = n(481060),
    o = n(529103),
    s = n(497089),
    c = n(849862),
    u = n(626135),
    d = n(981631),
    f = n(388032),
    h = n(426153);
function p(e) {
    let { closePopout: t } = e,
        n = (0, c.If)();
    return (0, r.jsx)(l.u, {
        asContainer: !0,
        text: f.intl.string(f.t["lMR96+"]),
        children: (0, r.jsxs)(a.P3F, {
            "aria-label": "".concat(f.intl.string(f.t["lMR96+"]), ", ").concat(n),
            className: h.friendRequestsButton,
            onClick: () => {
                u.default.track(d.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK }),
                    o.Z.transitionToSection(d.pJs.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, r.jsx)(a.iFz, {
                    size: "xs",
                    color: "currentColor",
                }),
                (0, r.jsx)(a.mAB, {
                    count: n,
                    color: i.Z.colors.BACKGROUND_ACCENT.css,
                }),
            ],
        }),
    });
}
