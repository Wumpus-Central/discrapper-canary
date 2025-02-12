n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(529103),
    r = n(377171),
    s = n(497089),
    o = n(849862),
    c = n(703656),
    d = n(626135),
    u = n(981631),
    m = n(388032),
    _ = n(995298);
function h(e) {
    let { closePopout: t } = e,
        n = (0, o.If)();
    return (0, i.jsx)(l.DY3, {
        text: m.intl.string(m.t['lMR96+']),
        children: (0, i.jsxs)(l.P3F, {
            className: _.friendRequestsButton,
            onClick: () => {
                d.default.track(u.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK }), (0, c.uL)(u.Z5c.FRIENDS), a.Z.setSection(u.pJs.PENDING), t();
            },
            children: [
                (0, i.jsx)(l.iFz, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsx)(l.mAB, {
                    count: n,
                    color: r.Z.BACKGROUND_ACCENT
                })
            ]
        })
    });
}
