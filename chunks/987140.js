n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(183555),
    r = n(735321),
    s = n(958338),
    o = n(253798),
    d = n(224360);
function c(e) {
    let { widgetType: t, ...n } = e,
        { games: c, onAddGame: u } = (0, s.S)(t),
        { setExpanded: g } = (0, o.B)(),
        { trackUserProfileEditAction: m } = (0, a.NJ)(),
        x = l.useCallback(
            (e) => {
                u(e),
                    g(!0),
                    (0, r.ew)({ widgetType: t, game: { applicationId: e } }),
                    m({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [u, t, m, g],
        );
    return (0, i.jsx)(d.A, { games: c, onClick: x, ...n });
}
