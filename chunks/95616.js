i.d(t, { default: () => g });
var n = i(477900);
i(582128);
var r = i(980707),
    l = i(477782),
    a = i(442433),
    d = i(847767),
    s = i(358367),
    o = i(793574),
    c = i(886393),
    A = i(868548),
    E = i(995102),
    h = i(288104),
    u = i(50268),
    p = i(914853),
    N = i(708653),
    _ = i(297460),
    C = i(652215),
    T = i(375708),
    X = i(39470);
let g = (0, s.A)(
    (0, d.A)(
        function (e) {
            let { channel: t, widgetType: i, onSelect: d } = e,
                s = (0, A.A)(t),
                o = (0, c.A)(t),
                C = (0, _.A)({ kind: "CHANNEL", channel: t, guildId: t.getGuildId?.() ?? null }, i),
                { toggleFavoriteItem: g } = (0, N.$X)(p.x.MESSAGES, t, i),
                k = (0, E.A)(t),
                v = (0, u.A)({ id: t.id, label: T.intl.string(T.t.gFHI3k) }),
                x = (0, h.A)(t);
            return (0, n.jsxs)(r.W, {
                navId: "overlay-report-to-mod-channel-context",
                onClose: a.Z_,
                "aria-label": T.intl.string(X.default["zp+z/E"]),
                onSelect: d,
                children: [
                    (0, n.jsxs)(l.rX, { children: [s, C, g] }, "mark-as-read-or-favorite"),
                    (0, n.jsx)(l.rX, { children: o }, "channel-actions"),
                    (0, n.jsxs)(l.rX, { children: [k, x] }, "notifications"),
                    (0, n.jsx)(l.rX, { children: v }, "developer-actions"),
                ],
            });
        },
        { object: C.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
