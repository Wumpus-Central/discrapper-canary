t.d(n, { default: () => C });
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(442433),
    a = t(847767),
    d = t(358367),
    s = t(468389),
    u = t(793574),
    o = t(886393),
    c = t(475777),
    A = t(848977),
    E = t(995102),
    g = t(288104),
    y = t(661504),
    N = t(969128),
    _ = t(50268),
    h = t(769591),
    p = t(914853),
    v = t(708653),
    I = t(297460),
    f = t(652215),
    D = t(985018);
let C = (0, d.A)(
    (0, a.A)(
        function (e) {
            let { channel: n, guild: t, widgetType: a, onSelect: d } = e,
                u = (0, A.A)(n),
                f = (0, o.A)(n),
                { toggleFavoriteItem: C } = (0, v.Ay)(p.x.MESSAGES, n, a),
                M = (0, I.A)({ kind: "CHANNEL", channel: n, guildId: t.id }, a),
                T = (0, c.A)(n, t),
                b = (0, N.A)(n),
                S = (0, E.Ay)(n),
                x = (0, g.A)(n),
                O = (0, _.A)({ id: n.id, label: D.intl.string(D.t.gFHI3k) }),
                U = (0, s.A)(n),
                R = (0, y.Ay)(n),
                L = (0, h.os)("OverlayChannelListTextChannelContextMenu");
            return (0, i.jsxs)(r.W1t, {
                navId: "overlay-channel-context",
                onClose: l.Z_,
                "aria-label": D.intl.string(D.t.Xm41aV),
                onSelect: d,
                children: [
                    (0, i.jsxs)(r.rXV, { children: [u, M, C] }, "mark-as-read-or-favorite"),
                    (0, i.jsxs)(r.rXV, { children: [T, b, f] }, "channel-actions"),
                    (0, i.jsxs)(r.rXV, { children: [S, L ? R : x] }, "notifications"),
                    (0, i.jsx)(r.rXV, { children: U }, "activity"),
                    (0, i.jsx)(r.rXV, { children: O }, "developer-actions"),
                ],
            });
        },
        { object: f.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
