n.d(t, { A: () => c });
var i = n(477900);
n(582128);
var l = n(765178),
    s = n(866665),
    r = n(408278),
    a = n(241326),
    o = n(183555),
    d = n(735321),
    u = n(375708);
function c(e) {
    let { game: t, widgetType: n, className: c, onRemove: g } = e,
        { trackUserProfileEditAction: m } = (0, o.NJ)(),
        f = u.intl.string(u.t.HUvyDc);
    return (0, i.jsx)("div", {
        className: c,
        children: (0, i.jsx)(s.m, {
            text: f,
            ariaHidden: !0,
            children: (0, i.jsx)(r.K, {
                "aria-label": f,
                icon: a.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, d.ef)(n, t.gameId),
                        l.O.announce(u.intl.string(u.t["08HmMj"])),
                        m({ action: "GAME_REMOVED", gameId: t.gameId, widgetEdited: n }),
                        g?.();
                },
            }),
        }),
    });
}
