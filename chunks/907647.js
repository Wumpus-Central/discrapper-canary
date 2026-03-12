t.d(e, { default: () => x });
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(442433),
    a = t(847767),
    c = t(358367),
    d = t(793574),
    s = t(886393),
    o = t(317910),
    u = t(848977),
    A = t(995102),
    h = t(288104),
    _ = t(661504),
    f = t(50268),
    b = t(133238),
    g = t(769591),
    E = t(652215),
    p = t(733045),
    j = t(985018);
let x = (0, c.A)(
    (0, a.A)(
        function (n) {
            let { channel: e, onSelect: t } = n,
                a = (0, u.A)(e),
                c = (0, s.A)(e),
                d = (0, b.m)(e),
                E = (0, b.y)(e),
                x = (0, A.A)(e),
                C = (0, f.A)({ id: e.id, label: j.intl.string(j.t.gFHI3k) }),
                v = (0, o.A)(e),
                N = (0, h.A)(e),
                y = (0, _.Ay)(e),
                G = (0, g.os)("ReportToModChannelContextMenu");
            return (0, i.jsxs)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "report-to-mod-channel-context",
                onClose: l.Z_,
                "aria-label": j.intl.string(p.default["zp+z/E"]),
                onSelect: t,
                children: [
                    (0, i.jsx)(r.rXV, { children: a }, "mark-as-read-or-favorite"),
                    (0, i.jsx)(r.rXV, { children: d }),
                    (0, i.jsx)(r.rXV, { children: c }, "channel-actions"),
                    (0, i.jsxs)(r.rXV, { children: [x, G ? y : N] }, "notifications"),
                    (0, i.jsx)(r.rXV, { children: v }),
                    (0, i.jsx)(r.rXV, { children: E }),
                    (0, i.jsx)(r.rXV, { children: C }, "developer-actions"),
                ],
            });
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [d.A.CONTEXT_MENU, d.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
