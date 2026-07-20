i.d(t, { A: () => u });
var n = i(627968);
i(64700);
var s = i(765178),
    l = i(866665),
    r = i(408278),
    a = i(241326),
    o = i(183555),
    d = i(735321),
    c = i(375708);
function u(e) {
    let { game: t, widgetType: i, className: u, onRemove: g } = e,
        { trackUserProfileEditAction: m } = (0, o.NJ)(),
        f = c.intl.string(c.t.HUvyDc);
    return (0, n.jsx)("div", {
        className: u,
        children: (0, n.jsx)(l.m, {
            text: f,
            ariaHidden: !0,
            children: (0, n.jsx)(r.K, {
                "aria-label": f,
                icon: a.u,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, d.ef)(i, t.applicationId),
                        s.O.announce(c.intl.string(c.t["08HmMj"])),
                        m({ action: "GAME_REMOVED", gameId: t.applicationId, widgetEdited: i }),
                        g?.();
                },
            }),
        }),
    });
}
