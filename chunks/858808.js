n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(990078),
    r = n(397927),
    o = n(183555),
    c = n(735321),
    d = n(985018),
    u = n(57884);
function g(e) {
    let { game: t, widgetType: n, iconSize: a = "refresh_sm", className: g, buttonRef: m, onRemove: x } = e,
        { trackUserProfileEditAction: p } = (0, o.NJ)();
    return (0, i.jsx)(s.m, {
        text: d.intl.string(d.t.HUvyDc),
        ariaHidden: !0,
        children: (0, i.jsx)(r.DUT, {
            innerRef: m,
            onClick: () => {
                (0, c.ef)(n, t.applicationId),
                    r.ORC.announce(d.intl.string(d.t["08HmMj"])),
                    p({ action: "GAME_REMOVED", gameId: t.applicationId, widgetEdited: n }),
                    x?.();
            },
            "aria-label": d.intl.string(d.t.HUvyDc),
            className: l()(g, u.v),
            children: (0, i.jsx)(r.ucK, { size: a, className: u.K, color: r.LU0.colors.ICON_FEEDBACK_CRITICAL }),
        }),
    });
}
