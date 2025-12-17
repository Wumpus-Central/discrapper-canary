n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(703656),
    a = n(434479),
    o = n(981631),
    s = n(176505),
    c = n(388032);
function u(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(a.m, {
        id: "home-tab-".concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(i.Vy8, {
                size: "md",
                color: "currentColor",
                className: e,
            }),
        text: c.intl.string(c.t.VbpLyU),
        selected: n,
        onClick: function () {
            (0, l.uL)(o.Z5c.CHANNEL(t.id, s.oC.GUILD_HOME));
        },
    });
}
