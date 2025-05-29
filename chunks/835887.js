t.d(n, { Z: () => u });
var r = t(255367),
    i = t(73800),
    a = t(481060),
    l = t(434404),
    s = t(755641),
    d = t(941469),
    o = t(388032),
    c = t(602268);
function u(e) {
    let { className: n, guildId: t, selectedBadge: u } = e,
        m = i.useCallback(
            (e) => {
                l.Z.updateGuildProfile(t, { badge: e });
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: n,
        children: [
            (0, r.jsx)(a.vwX, {
                className: c.sectionTitle,
                children: o.intl.string(d.default.pb7lpK)
            }),
            (0, r.jsx)(s.g, {
                onBadgeClicked: m,
                selectedBadge: u
            })
        ]
    });
}
