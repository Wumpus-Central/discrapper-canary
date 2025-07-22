t.d(r, { Z: () => u });
var n = t(255367),
    i = t(73800),
    a = t(481060),
    s = t(434404),
    l = t(755641),
    o = t(195196),
    c = t(388032),
    d = t(602268);
function u(e) {
    let { className: r, guildId: t, selectedBadge: u } = e,
        m = i.useCallback(
            (e) => {
                s.Z.updateGuildProfile(t, { badge: e });
            },
            [t]
        );
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(a.vwX, {
                className: d.sectionTitle,
                children: c.intl.string(o.default.pb7lpK)
            }),
            (0, n.jsx)(l.g, {
                onBadgeClicked: m,
                selectedBadge: u
            })
        ]
    });
}
