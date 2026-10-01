n.d(t, { A: () => u });
var i = n(477900);
n(582128);
var l = n(765178),
    a = n(866665),
    s = n(408278),
    r = n(241326),
    d = n(183555),
    o = n(735321),
    c = n(375708);
function u(e) {
    let { game: t, widgetType: n, className: u, onRemove: m } = e,
        { trackUserProfileEditAction: g } = (0, d.NJ)(),
        x = c.intl.string(c.t.HUvyDc);
    return (0, i.jsx)("div", {
        className: u,
        children: (0, i.jsx)(a.m, {
            text: x,
            ariaHidden: !0,
            children: (0, i.jsx)(s.K, {
                "aria-label": x,
                icon: r.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, o.ef)(n, t.gameId),
                        l.O.announce(c.intl.string(c.t["08HmMj"])),
                        g({ action: "GAME_REMOVED", gameId: t.gameId, widgetEdited: n }),
                        m?.());
                },
            }),
        }),
    });
}
