r.d(n, { Z: () => m });
var t = r(255367),
    a = r(73800),
    i = r(481060),
    s = r(434404),
    l = r(755641),
    o = r(941469),
    d = r(388032),
    c = r(602268);
function m(e) {
    let { className: n, guildId: r, selectedBadge: m } = e,
        f = a.useCallback(
            (e) => {
                s.Z.updateGuildProfile(r, { badge: e });
            },
            [r]
        );
    return (0, t.jsxs)('div', {
        className: n,
        children: [
            (0, t.jsx)(i.vwX, {
                className: c.sectionTitle,
                children: d.intl.string(o.default.pb7lpK)
            }),
            (0, t.jsx)(l.g, {
                onBadgeClicked: f,
                selectedBadge: m
            })
        ]
    });
}
