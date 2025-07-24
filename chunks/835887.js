n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(101017),
    a = n(434404),
    o = n(755641),
    c = n(195196),
    d = n(388032),
    u = n(602268);
function m(e) {
    let { className: t, guildId: n, selectedBadge: m } = e,
        g = i.useCallback(
            (e) => {
                a.Z.updateGuildProfile(n, { badge: e });
            },
            [n]
        ),
        p = (0, s.Z)();
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(l.vwX, {
                className: u.sectionTitle,
                children: d.intl.string(c.default.pb7lpK)
            }),
            (0, r.jsx)(o.g, {
                onBadgeClicked: g,
                selectedBadge: m,
                badgeCollection: p
            })
        ]
    });
}
