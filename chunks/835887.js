v.d(g, { Z: () => w });
var B = v(200651),
    t = v(192379),
    e = v(481060),
    f = v(434404),
    r = v(755641),
    C = v(817239),
    h = v(388032),
    n = v(602268);
function w(A) {
    let { className: g, guildId: v, selectedBadge: w } = A,
        Q = t.useCallback(
            (A) => {
                f.Z.updateGuildProfile(v, { badge: A });
            },
            [v]
        );
    return (0, B.jsxs)('div', {
        className: g,
        children: [
            (0, B.jsx)(e.vwX, {
                className: n.sectionTitle,
                children: h.intl.string(C.default.pb7lpK)
            }),
            (0, B.jsx)(r.g, {
                onBadgeClicked: Q,
                selectedBadge: w
            })
        ]
    });
}
