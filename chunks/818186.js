n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(529103),
    o = n(377171),
    s = n(497089),
    a = n(849862),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    h = n(605938);
function p(e) {
    let { closePopout: t } = e,
        n = (0, a.If)();
    return (0, r.jsx)(i.DY3, {
        text: d.intl.string(d.t['lMR96+']),
        children: (0, r.jsxs)(i.P3F, {
            className: h.friendRequestsButton,
            onClick: () => {
                (c.default.track(u.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK }), l.Z.transitionToSection(u.pJs.PENDING, { explicit: !0 }), t());
            },
            children: [
                (0, r.jsx)(i.iFz, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, r.jsx)(i.mAB, {
                    count: n,
                    color: o.Z.BACKGROUND_ACCENT
                })
            ]
        })
    });
}
