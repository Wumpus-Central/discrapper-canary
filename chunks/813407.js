n.d(t, {
    default: () => j,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    o = n(358367),
    s = n(468389),
    c = n(793574),
    u = n(886393),
    d = n(475777),
    A = n(848977),
    p = n(995102),
    y = n(288104),
    E = n(661504),
    f = n(969128),
    g = n(50268),
    b = n(795144),
    O = n(769591),
    v = n(914853),
    h = n(708653),
    _ = n(297460),
    D = n(652215),
    N = n(985018);
let j = (0, o.A)(
    (0, a.A)(
        function (e) {
            let { channel: t, guild: n, widgetType: a, onSelect: o } = e,
                c = (0, A.A)(t),
                D = (0, u.A)(t),
                { toggleFavoriteItem: j } = (0, h.Ay)(v.x.MESSAGES, t, a),
                I = (0, _.A)(
                    {
                        kind: "CHANNEL",
                        channel: t,
                        guildId: n.id,
                    },
                    a,
                ),
                C = (0, b.A)(t),
                S = (0, d.A)(t, n),
                m = (0, f.A)(t),
                x = (0, p.Ay)(t),
                P = (0, y.A)(t),
                M = (0, g.A)({
                    id: t.id,
                    label: N.intl.string(N.t.gFHI3k),
                }),
                T = (0, s.A)(t),
                U = (0, E.Ay)(t),
                k = (0, O.os)("OverlayChannelListTextChannelContextMenu");
            return (0, r.jsxs)(i.W1t, {
                navId: "overlay-channel-context",
                onClose: l.Z_,
                "aria-label": N.intl.string(N.t.Xm41aV),
                onSelect: o,
                children: [
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [c, I, j],
                        },
                        "mark-as-read-or-favorite",
                    ),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: C,
                        },
                        "favorites-nickname",
                    ),
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [S, m, D],
                        },
                        "channel-actions",
                    ),
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [x, k ? U : P],
                        },
                        "notifications",
                    ),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: T,
                        },
                        "activity",
                    ),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: M,
                        },
                        "developer-actions",
                    ),
                ],
            });
        },
        {
            object: D.ZSU.CONTEXT_MENU,
        },
    ),
    [c.A.CONTEXT_MENU, c.A.OVERLAY, c.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
