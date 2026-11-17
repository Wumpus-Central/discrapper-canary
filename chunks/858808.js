var l = n(477900);
n(582128);
var i = n(765178),
    a = n(866665),
    s = n(408278),
    r = n(241326),
    d = n(183555),
    o = n(735321),
    c = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { game: t, widgetType: n, className: u, onRemove: g } = e,
                { trackUserProfileEditAction: m } = (0, d.NJ)(),
                x = c.intl.string(c.t.HUvyDc);
            return (0, l.jsx)("div", {
                className: u,
                children: (0, l.jsx)(a.m, {
                    text: x,
                    ariaHidden: !0,
                    children: (0, l.jsx)(s.K, {
                        "aria-label": x,
                        icon: r.TrashIcon,
                        size: "sm",
                        variant: "overlay-secondary",
                        onClick: function () {
                            ((0, o.ef)(n, t.gameId),
                                i.O.announce(c.intl.string(c.t["08HmMj"])),
                                m({ action: "GAME_REMOVED", gameId: t.gameId, widgetEdited: n }),
                                g?.());
                        },
                    }),
                }),
            });
        },
    },
);
