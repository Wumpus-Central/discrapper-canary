n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(703656),
    o = n(434479),
    s = n(981631),
    a = n(176505),
    c = n(388032);
function u(e) {
    let { guild: t, selected: n } = e;
    return (0, r.jsx)(o.m, {
        id: 'home-tab-'.concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(i.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: c.intl.string(c.t.VbpLyc),
        selected: n,
        onClick: function () {
            (0, l.uL)(s.Z5c.CHANNEL(t.id, a.oC.GUILD_HOME));
        }
    });
}
