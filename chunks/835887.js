B.d(g, { Z: () => P });
var C = B(200651),
    Q = B(192379),
    w = B(481060),
    D = B(434404),
    f = B(755641),
    E = B(817239),
    v = B(388032),
    I = B(602268);
function P(A) {
    let { className: g, guildId: B, selectedBadge: P } = A,
        e = Q.useCallback(
            (A) => {
                D.Z.updateGuildProfile(B, { badge: A });
            },
            [B]
        );
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(w.vwX, {
                className: I.sectionTitle,
                children: v.intl.string(E.default.pb7lpK)
            }),
            (0, C.jsx)(f.g, {
                onBadgeClicked: e,
                selectedBadge: P
            })
        ]
    });
}
