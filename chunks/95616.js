n.d(t, { default: () => k });
var r = n(627968);
n(64700);
var i = n(980707),
    l = n(477782),
    o = n(442433),
    a = n(847767),
    d = n(358367),
    s = n(793574),
    c = n(886393),
    A = n(848977),
    h = n(995102),
    E = n(288104),
    u = n(661504),
    p = n(50268),
    C = n(769591),
    N = n(914853),
    _ = n(708653),
    T = n(297460),
    x = n(652215),
    X = n(375708),
    g = n(221314);
let k = (0, d.A)(
    (0, a.A)(
        function (e) {
            let { channel: t, widgetType: n, onSelect: a } = e,
                d = (0, A.A)(t),
                s = (0, c.A)(t),
                x = (0, T.A)({ kind: "CHANNEL", channel: t, guildId: t.getGuildId?.() ?? null }, n),
                { toggleFavoriteItem: k } = (0, _.$X)(N.x.MESSAGES, t, n),
                v = (0, h.A)(t),
                M = (0, p.A)({ id: t.id, label: X.intl.string(X.t.gFHI3k) }),
                O = (0, E.A)(t),
                j = (0, u.Ay)(t),
                b = (0, C.os)("ReportToModChannelContextMenu");
            return (0, r.jsxs)(i.W, {
                navId: "overlay-report-to-mod-channel-context",
                onClose: o.Z_,
                "aria-label": X.intl.string(g.default["zp+z/E"]),
                onSelect: a,
                children: [
                    (0, r.jsxs)(l.rX, { children: [d, x, k] }, "mark-as-read-or-favorite"),
                    (0, r.jsx)(l.rX, { children: s }, "channel-actions"),
                    (0, r.jsxs)(l.rX, { children: [v, b ? j : O] }, "notifications"),
                    (0, r.jsx)(l.rX, { children: M }, "developer-actions"),
                ],
            });
        },
        { object: x.ZSU.CONTEXT_MENU },
    ),
    [s.A.CONTEXT_MENU, s.A.OVERLAY, s.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
