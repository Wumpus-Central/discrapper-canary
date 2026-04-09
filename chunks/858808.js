n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(990078),
    s = n(397927),
    o = n(183555),
    d = n(735321),
    c = n(985018),
    u = n(440375);
function A(e) {
    let { game: t, widgetType: n, iconSize: a = "refresh_sm", className: A, buttonRef: _, onRemove: h } = e,
        { trackUserProfileEditAction: m } = (0, o.NJ)();
    return (0, i.jsx)(l.m, {
        text: c.intl.string(c.t.HUvyDc),
        ariaHidden: !0,
        children: (0, i.jsx)(s.DUT, {
            innerRef: _,
            onClick: () => {
                (0, d.ef)(n, t.applicationId),
                    s.ORC.announce(c.intl.string(c.t["08HmMj"])),
                    m({ action: "GAME_REMOVED", gameId: t.applicationId, widgetEdited: n }),
                    h?.();
            },
            "aria-label": c.intl.string(c.t.HUvyDc),
            className: r()(A, u.v),
            children: (0, i.jsx)(s.ucK, { size: a, className: u.K, color: s.LU0.colors.ICON_FEEDBACK_CRITICAL }),
        }),
    });
}
