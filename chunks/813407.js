t.d(n, { default: () => M });
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
    N = t(661504),
    _ = t(969128),
    y = t(704543),
    v = t(50268),
    h = t(769591),
    p = t(914853),
    f = t(708653),
    I = t(297460),
    C = t(652215),
    D = t(985018);
let M = (0, d.A)(
    (0, a.A)(
        function (e) {
            let { channel: n, guild: t, widgetType: a, onSelect: d } = e,
                u = (0, A.A)(n),
                C = (0, o.A)(n),
                { toggleFavoriteItem: M } = (0, f.Ay)(p.x.MESSAGES, n, a),
                T = (0, I.A)({ kind: "CHANNEL", channel: n, guildId: t.id }, a),
                b = (0, c.A)(n, t),
                S = (0, y.A)(n),
                x = (0, _.A)(n),
                O = (0, E.A)(n),
                U = (0, g.A)(n),
                L = (0, v.A)({ id: n.id, label: D.intl.string(D.t.gFHI3k) }),
                k = (0, s.A)(n),
                R = (0, N.Ay)(n),
                j = (0, h.os)("OverlayChannelListTextChannelContextMenu");
            return (0, i.jsxs)(r.W1t, {
                navId: "overlay-channel-context",
                onClose: l.Z_,
                "aria-label": D.intl.string(D.t.Xm41aV),
                onSelect: d,
                children: [
                    (0, i.jsxs)(r.rXV, { children: [u, T, M] }, "mark-as-read-or-favorite"),
                    (0, i.jsxs)(r.rXV, { children: [b, S, x, C] }, "channel-actions"),
                    (0, i.jsxs)(r.rXV, { children: [O, j ? R : U] }, "notifications"),
                    (0, i.jsx)(r.rXV, { children: k }, "activity"),
                    (0, i.jsx)(r.rXV, { children: L }, "developer-actions"),
                ],
            });
        },
        { object: C.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
