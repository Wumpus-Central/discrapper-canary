t.d(n, { default: () => T });
var i = t(627968);
t(64700);
var r = t(861672),
    l = t(477782),
    a = t(442433),
    d = t(847767),
    s = t(358367),
    o = t(468389),
    u = t(793574),
    c = t(886393),
    A = t(475777),
    E = t(848977),
    g = t(995102),
    N = t(288104),
    _ = t(661504),
    y = t(969128),
    v = t(704543),
    h = t(50268),
    f = t(769591),
    I = t(914853),
    C = t(708653),
    D = t(297460),
    p = t(652215),
    M = t(985018);
let T = (0, s.A)(
    (0, d.A)(
        function (e) {
            let { channel: n, guild: t, widgetType: d, onSelect: s } = e,
                u = (0, E.A)(n),
                p = (0, c.A)(n),
                { toggleFavoriteItem: T } = (0, C.Ay)(I.x.MESSAGES, n, d),
                b = (0, D.A)({ kind: "CHANNEL", channel: n, guildId: t.id }, d),
                S = (0, A.A)(n, t),
                x = (0, v.A)(n),
                U = (0, y.A)(n),
                O = (0, g.A)(n),
                L = (0, N.A)(n),
                k = (0, h.A)({ id: n.id, label: M.intl.string(M.t.gFHI3k) }),
                R = (0, o.A)(n),
                j = (0, _.Ay)(n),
                G = (0, f.os)("OverlayChannelListTextChannelContextMenu");
            return (0, i.jsxs)(r.W, {
                navId: "overlay-channel-context",
                onClose: a.Z_,
                "aria-label": M.intl.string(M.t.Xm41aV),
                onSelect: s,
                children: [
                    (0, i.jsxs)(l.rX, { children: [u, b, T] }, "mark-as-read-or-favorite"),
                    (0, i.jsxs)(l.rX, { children: [S, x, U, p] }, "channel-actions"),
                    (0, i.jsxs)(l.rX, { children: [O, G ? j : L] }, "notifications"),
                    (0, i.jsx)(l.rX, { children: R }, "activity"),
                    (0, i.jsx)(l.rX, { children: k }, "developer-actions"),
                ],
            });
        },
        { object: p.ZSU.CONTEXT_MENU },
    ),
    [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
