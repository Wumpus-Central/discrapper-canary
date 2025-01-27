n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(529103),
    a = n(377171),
    o = n(497089),
    s = n(849862),
    c = n(703656),
    u = n(626135),
    d = n(981631),
    m = n(388032),
    h = n(300444);
function f(e) {
    let { closePopout: t } = e,
        n = (0, s.If)();
    return (0, i.jsx)(r.TooltipContainer, {
        text: m.intl.string(m.t['lMR96+']),
        children: (0, i.jsxs)(r.Clickable, {
            className: h.friendRequestsButton,
            onClick: () => {
                u.default.track(d.rMx.NOTIFICATION_CENTER_ACTION, { action_type: o.ud.FRIEND_REQUESTS_BUTTON_CLICK }), (0, c.uL)(d.Z5c.FRIENDS), l.Z.setSection(d.pJs.PENDING), t();
            },
            children: [
                (0, i.jsx)(r.FriendsIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsx)(r.NumberBadge, {
                    count: n,
                    color: a.Z.BACKGROUND_ACCENT
                })
            ]
        })
    });
}
