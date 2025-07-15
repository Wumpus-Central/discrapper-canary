n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    s = n(434404),
    l = n(755641),
    d = n(195196),
    o = n(388032),
    c = n(602268);
function u(e) {
    let { className: t, guildId: n, selectedBadge: u } = e,
        h = i.useCallback(
            (e) => {
                s.Z.updateGuildProfile(n, { badge: e });
            },
            [n]
        );
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(a.vwX, {
                className: c.sectionTitle,
                children: o.intl.string(d.default.pb7lpK)
            }),
            (0, r.jsx)(l.g, {
                onBadgeClicked: h,
                selectedBadge: u
            })
        ]
    });
}
