t.d(i, { default: () => T });
var n = t(477900);
t(582128);
var r = t(980707),
    a = t(477782),
    s = t(442433),
    l = t(847767),
    c = t(358367),
    d = t(468389),
    A = t(793574),
    o = t(886393),
    h = t(475777),
    E = t(868548),
    N = t(995102),
    X = t(288104),
    _ = t(969128),
    p = t(704543),
    u = t(50268),
    v = t(914853),
    x = t(708653),
    C = t(297460),
    j = t(652215),
    k = t(375708);
let T = (0, c.A)(
    (0, l.A)(
        function (e) {
            let { channel: i, guild: t, widgetType: l, onSelect: c } = e,
                A = (0, E.A)(i),
                j = (0, o.A)(i),
                { toggleFavoriteItem: T } = (0, x.Ay)(v.x.MESSAGES, i, l),
                g = (0, C.A)({ kind: "CHANNEL", channel: i, guildId: t.id }, l),
                S = (0, h.A)(i, t),
                b = (0, p.A)(i),
                I = (0, _.A)(i),
                L = (0, N.A)(i),
                f = (0, u.A)({ id: i.id, label: k.intl.string(k.t.gFHI3k) }),
                H = (0, d.A)(i),
                M = (0, X.A)(i);
            return (0, n.jsxs)(r.W, {
                navId: "overlay-channel-context",
                onClose: s.Z_,
                "aria-label": k.intl.string(k.t.Xm41aV),
                onSelect: c,
                children: [
                    (0, n.jsxs)(a.rX, { children: [A, g, T] }, "mark-as-read-or-favorite"),
                    (0, n.jsxs)(a.rX, { children: [S, b, I, j] }, "channel-actions"),
                    (0, n.jsxs)(a.rX, { children: [L, M] }, "notifications"),
                    (0, n.jsx)(a.rX, { children: H }, "activity"),
                    (0, n.jsx)(a.rX, { children: f }, "developer-actions"),
                ],
            });
        },
        { object: j.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.OVERLAY, A.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
