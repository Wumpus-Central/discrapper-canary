n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var l = n(765178),
    s = n(866665),
    a = n(408278),
    r = n(241326),
    o = n(183555),
    d = n(735321),
    c = n(375708);
function u(e) {
    let { game: t, widgetType: n, className: u, onRemove: g } = e,
        { trackUserProfileEditAction: m } = (0, o.NJ)(),
        f = c.intl.string(c.t.HUvyDc);
    return (0, i.jsx)("div", {
        className: u,
        children: (0, i.jsx)(s.m, {
            text: f,
            ariaHidden: !0,
            children: (0, i.jsx)(a.K, {
                "aria-label": f,
                icon: r.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, d.ef)(n, t.gameId),
                        l.O.announce(c.intl.string(c.t["08HmMj"])),
                        m({ action: "GAME_REMOVED", gameId: t.gameId, widgetEdited: n }),
                        g?.());
                },
            }),
        }),
    });
}
