n.d(t, {
    default: () => I,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    o = n(358367),
    s = n(468389),
    d = n(793574),
    u = n(886393),
    c = n(475777),
    A = n(848977),
    E = n(995102),
    y = n(288104),
    g = n(661504),
    p = n(969128),
    f = n(50268),
    v = n(769591),
    h = n(914853),
    b = n(708653),
    N = n(297460),
    _ = n(652215),
    O = n(985018);
let I = (0, o.A)(
    (0, a.A)(
        function (e) {
            let { channel: t, guild: n, widgetType: a, onSelect: o } = e,
                d = (0, A.A)(t),
                _ = (0, u.A)(t),
                { toggleFavoriteItem: I } = (0, b.Ay)(h.x.MESSAGES, t, a),
                D = (0, N.A)(
                    {
                        kind: "CHANNEL",
                        channel: t,
                        guildId: n.id,
                    },
                    a,
                ),
                C = (0, c.A)(t, n),
                M = (0, p.A)(t),
                S = (0, E.Ay)(t),
                j = (0, y.A)(t),
                T = (0, f.A)({
                    id: t.id,
                    label: O.intl.string(O.t.gFHI3k),
                }),
                x = (0, s.A)(t),
                U = (0, g.Ay)(t),
                m = (0, v.os)("OverlayChannelListTextChannelContextMenu");
            return (0, r.jsxs)(i.W1t, {
                navId: "overlay-channel-context",
                onClose: l.Z_,
                "aria-label": O.intl.string(O.t.Xm41aV),
                onSelect: o,
                children: [
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [d, D, I],
                        },
                        "mark-as-read-or-favorite",
                    ),
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [C, M, _],
                        },
                        "channel-actions",
                    ),
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [S, m ? U : j],
                        },
                        "notifications",
                    ),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: x,
                        },
                        "activity",
                    ),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: T,
                        },
                        "developer-actions",
                    ),
                ],
            });
        },
        {
            object: _.ZSU.CONTEXT_MENU,
        },
    ),
    [d.A.CONTEXT_MENU, d.A.OVERLAY, d.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
