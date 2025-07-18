t.d(r, { Z: () => u });
var n = t(255367),
    a = t(73800),
    i = t(481060),
    s = t(434404),
    l = t(755641),
    o = t(195196),
    d = t(388032),
    c = t(602268);
function u(e) {
    let { className: r, guildId: t, selectedBadge: u } = e,
        f = a.useCallback(
            (e) => {
                s.Z.updateGuildProfile(t, { badge: e });
            },
            [t]
        );
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(i.vwX, {
                className: c.sectionTitle,
                children: d.intl.string(o.default.pb7lpK)
            }),
            (0, n.jsx)(l.g, {
                onBadgeClicked: f,
                selectedBadge: u
            })
        ]
    });
}
