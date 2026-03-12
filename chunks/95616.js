t.d(n, { default: () => M });
var r = t(627968);
t(64700);
var i = t(397927),
    l = t(442433),
    a = t(847767),
    u = t(358367),
    d = t(793574),
    s = t(886393),
    o = t(848977),
    c = t(995102),
    A = t(288104),
    E = t(661504),
    f = t(50268),
    v = t(769591),
    N = t(914853),
    h = t(708653),
    g = t(297460),
    I = t(652215),
    y = t(985018),
    _ = t(733045);
let M = (0, u.A)(
    (0, a.A)(
        function (e) {
            let { channel: n, widgetType: t, onSelect: a } = e,
                u = (0, o.A)(n),
                d = (0, s.A)(n),
                I = (0, g.A)({ kind: "CHANNEL", channel: n, guildId: n.getGuildId?.() ?? null }, t),
                { toggleFavoriteItem: M } = (0, h.$X)(N.x.MESSAGES, n, t),
                p = (0, c.Ay)(n),
                S = (0, f.A)({ id: n.id, label: y.intl.string(y.t.gFHI3k) }),
                C = (0, A.A)(n),
                x = (0, E.Ay)(n),
                T = (0, v.os)("ReportToModChannelContextMenu");
            return (0, r.jsxs)(i.W1t, {
                navId: "overlay-report-to-mod-channel-context",
                onClose: l.Z_,
                "aria-label": y.intl.string(_.default["zp+z/E"]),
                onSelect: a,
                children: [
                    (0, r.jsxs)(i.rXV, { children: [u, I, M] }, "mark-as-read-or-favorite"),
                    (0, r.jsx)(i.rXV, { children: d }, "channel-actions"),
                    (0, r.jsxs)(i.rXV, { children: [p, T ? x : C] }, "notifications"),
                    (0, r.jsx)(i.rXV, { children: S }, "developer-actions"),
                ],
            });
        },
        { object: I.ZSU.CONTEXT_MENU },
    ),
    [d.A.CONTEXT_MENU, d.A.OVERLAY, d.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
