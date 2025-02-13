n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(703656),
    o = n(434479),
    a = n(981631),
    s = n(176505),
    c = n(388032);
function d(e) {
    let { guild: t, selected: n } = e;
    return (0, i.jsx)(o.m, {
        id: 'home-tab-'.concat(t.id),
        renderIcon: (e) =>
            (0, i.jsx)(l.Vy8, {
                size: 'md',
                color: 'currentColor',
                className: e
            }),
        text: c.intl.string(c.t.VbpLyc),
        selected: n,
        onClick: function () {
            (0, r.uL)(a.Z5c.CHANNEL(t.id, s.oC.GUILD_HOME));
        }
    });
}
