n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(990078),
    s = n(397927),
    o = n(183555),
    d = n(735321),
    c = n(985018),
    u = n(794118);
function g(e) {
    let { game: t, widgetType: n, iconSize: l = "refresh_sm", className: g, buttonRef: m, onRemove: x } = e,
        { trackUserProfileEditAction: f } = (0, o.NJ)();
    return (0, i.jsx)(r.m, {
        text: c.intl.string(c.t.HUvyDc),
        ariaHidden: !0,
        children: (0, i.jsx)(s.DUT, {
            innerRef: m,
            onClick: () => {
                (0, d.ef)(n, t.applicationId),
                    s.ORC.announce(c.intl.string(c.t["08HmMj"])),
                    f({ action: "GAME_REMOVED", gameId: t.applicationId, widgetEdited: n }),
                    x?.();
            },
            "aria-label": c.intl.string(c.t.HUvyDc),
            className: a()(g, u.v),
            children: (0, i.jsx)(s.ucK, { size: l, className: u.K, color: s.LU0.colors.ICON_FEEDBACK_CRITICAL }),
        }),
    });
}
