n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(990078),
    s = n(397927),
    o = n(183555),
    c = n(735321),
    u = n(985018),
    d = n(794118);
function f(e) {
    let { game: t, widgetType: n, iconSize: l = "refresh_sm", className: f, buttonRef: p, onRemove: b } = e,
        { trackUserProfileEditAction: g } = (0, o.NJ)();
    return (0, r.jsx)(a.m, {
        text: u.intl.string(u.t.HUvyDc),
        ariaHidden: !0,
        children: (0, r.jsx)(s.DUT, {
            innerRef: p,
            onClick: () => {
                (0, c.ef)(n, t.applicationId),
                    s.ORC.announce(u.intl.string(u.t["08HmMj"])),
                    g({
                        action: "GAME_REMOVED",
                        gameId: t.applicationId,
                        widgetEdited: n,
                    }),
                    null == b || b();
            },
            "aria-label": u.intl.string(u.t.HUvyDc),
            className: i()(f, d.v),
            children: (0, r.jsx)(s.ucK, {
                size: l,
                className: d.K,
                color: s.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
