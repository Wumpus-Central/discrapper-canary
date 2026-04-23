i.d(t, { A: () => c });
var n = i(627968),
    l = i(64700),
    s = i(183555),
    a = i(735321),
    r = i(958338),
    d = i(253798),
    o = i(224360);
function c(e) {
    let { widgetType: t, ...i } = e,
        { games: c, onAddGame: u } = (0, r.S)(t),
        { setExpanded: g } = (0, d.B)(),
        { trackUserProfileEditAction: m } = (0, s.NJ)(),
        h = l.useCallback(
            (e) => {
                u(e),
                    g(!0),
                    (0, a.ew)({ widgetType: t, game: { applicationId: e } }),
                    m({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [u, t, m, g],
        );
    return (0, n.jsx)(o.A, { games: c, onClick: h, ...i });
}
