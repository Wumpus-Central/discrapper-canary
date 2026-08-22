i.d(t, { A: () => c });
var n = i(477900);
i(582128);
var l = i(765178),
    s = i(866665),
    r = i(408278),
    a = i(241326),
    o = i(183555),
    d = i(735321),
    u = i(375708);
function c(e) {
    let { game: t, widgetType: i, className: c, onRemove: g } = e,
        { trackUserProfileEditAction: m } = (0, o.NJ)(),
        x = u.intl.string(u.t.HUvyDc);
    return (0, n.jsx)("div", {
        className: c,
        children: (0, n.jsx)(s.m, {
            text: x,
            ariaHidden: !0,
            children: (0, n.jsx)(r.K, {
                "aria-label": x,
                icon: a.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, d.ef)(i, t.gameId),
                        l.O.announce(u.intl.string(u.t["08HmMj"])),
                        m({ action: "GAME_REMOVED", gameId: t.gameId, widgetEdited: i }),
                        g?.();
                },
            }),
        }),
    });
}
