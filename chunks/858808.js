n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(990078),
    r = n(765178),
    o = n(939249),
    c = n(241326),
    d = n(827734),
    u = n(183555),
    _ = n(735321),
    g = n(985018),
    f = n(448295);
function m(e) {
    let { game: t, widgetType: n, iconSize: a = "refresh_sm", className: m, buttonRef: x, onRemove: p } = e,
        { trackUserProfileEditAction: I } = (0, u.NJ)();
    return (0, i.jsx)(s.m, {
        text: g.intl.string(g.t.HUvyDc),
        ariaHidden: !0,
        children: (0, i.jsx)(o.D, {
            innerRef: x,
            onClick: () => {
                (0, _.ef)(n, t.applicationId),
                    r.O.announce(g.intl.string(g.t["08HmMj"])),
                    I({ action: "GAME_REMOVED", gameId: t.applicationId, widgetEdited: n }),
                    p?.();
            },
            "aria-label": g.intl.string(g.t.HUvyDc),
            className: l()(m, f.v),
            children: (0, i.jsx)(c.u, { size: a, className: f.K, color: d.A.colors.ICON_FEEDBACK_CRITICAL }),
        }),
    });
}
