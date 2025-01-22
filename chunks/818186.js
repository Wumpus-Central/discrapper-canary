n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(529103),
    o = n(377171),
    s = n(497089),
    c = n(703656),
    u = n(699516),
    d = n(626135),
    m = n(981631),
    h = n(388032),
    f = n(300444);
function p(e) {
    let { closePopout: t } = e,
        n = (0, r.e7)([u.Z], () => u.Z.getPendingCount());
    return (0, i.jsx)(l.TooltipContainer, {
        text: h.intl.string(h.t['lMR96+']),
        children: (0, i.jsxs)(l.Clickable, {
            className: f.friendRequestsButton,
            onClick: () => {
                d.default.track(m.rMx.NOTIFICATION_CENTER_ACTION, { action_type: s.ud.FRIEND_REQUESTS_BUTTON_CLICK }), (0, c.uL)(m.Z5c.FRIENDS), a.Z.setSection(m.pJs.PENDING), t();
            },
            children: [
                (0, i.jsx)(l.FriendsIcon, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsx)(l.NumberBadge, {
                    count: n,
                    color: o.Z.BACKGROUND_ACCENT
                })
            ]
        })
    });
}
