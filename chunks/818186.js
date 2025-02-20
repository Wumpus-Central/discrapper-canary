n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(529103),
    o = n(377171),
    l = n(497089),
    s = n(849862),
    c = n(703656),
    d = n(626135),
    u = n(981631),
    p = n(388032),
    m = n(23702);
function f(e) {
    let { closePopout: t } = e,
        n = (0, s.If)();
    return (0, r.jsx)(i.DY3, {
        text: p.NW.string(p.t['lMR96+']),
        children: (0, r.jsxs)(i.P3F, {
            className: m.friendRequestsButton,
            onClick: () => {
                d.default.track(u.rMx.NOTIFICATION_CENTER_ACTION, { action_type: l.ud.FRIEND_REQUESTS_BUTTON_CLICK }), (0, c.uL)(u.Z5c.FRIENDS), a.Z.setSection(u.pJs.PENDING), t();
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
