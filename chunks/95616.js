t.d(n, { default: () => C });
var r = t(627968);
t(64700);
var i = t(861672),
    l = t(477782),
    a = t(442433),
    u = t(847767),
    d = t(358367),
    s = t(793574),
    o = t(886393),
    c = t(848977),
    A = t(995102),
    E = t(288104),
    f = t(661504),
    v = t(50268),
    N = t(769591),
    g = t(914853),
    h = t(708653),
    I = t(297460),
    _ = t(652215),
    y = t(985018),
    M = t(221314);
let C = (0, d.A)(
    (0, u.A)(
        function (e) {
            let { channel: n, widgetType: t, onSelect: u } = e,
                d = (0, c.A)(n),
                s = (0, o.A)(n),
                _ = (0, I.A)({ kind: "CHANNEL", channel: n, guildId: n.getGuildId?.() ?? null }, t),
                { toggleFavoriteItem: C } = (0, h.$X)(g.x.MESSAGES, n, t),
                S = (0, A.A)(n),
                x = (0, v.A)({ id: n.id, label: y.intl.string(y.t.gFHI3k) }),
                T = (0, E.A)(n),
                b = (0, f.Ay)(n),
                p = (0, N.os)("ReportToModChannelContextMenu");
            return (0, r.jsxs)(i.W, {
                navId: "overlay-report-to-mod-channel-context",
                onClose: a.Z_,
                "aria-label": y.intl.string(M.default["zp+z/E"]),
                onSelect: u,
                children: [
                    (0, r.jsxs)(l.rX, { children: [d, _, C] }, "mark-as-read-or-favorite"),
                    (0, r.jsx)(l.rX, { children: s }, "channel-actions"),
                    (0, r.jsxs)(l.rX, { children: [S, p ? b : T] }, "notifications"),
                    (0, r.jsx)(l.rX, { children: x }, "developer-actions"),
                ],
            });
        },
        { object: _.ZSU.CONTEXT_MENU },
    ),
    [s.A.CONTEXT_MENU, s.A.OVERLAY, s.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
