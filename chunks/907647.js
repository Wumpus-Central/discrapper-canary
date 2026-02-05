t.d(e, { default: () => x });
var i = t(627968);
t(64700);
var r = t(397927),
    a = t(442433),
    l = t(847767),
    c = t(358367),
    s = t(793574),
    d = t(886393),
    o = t(317910),
    A = t(848977),
    u = t(995102),
    h = t(288104),
    _ = t(661504),
    f = t(50268),
    b = t(133238),
    p = t(769591),
    E = t(652215),
    g = t(641131),
    j = t(985018);
let x = (0, c.A)(
    (0, l.A)(
        function (n) {
            let { channel: e, onSelect: t } = n,
                l = (0, A.A)(e),
                c = (0, d.A)(e),
                s = (0, b.m)(e),
                E = (0, b.y)(e),
                x = (0, u.Ay)(e),
                C = (0, f.A)({ id: e.id, label: j.intl.string(j.t.gFHI3k) }),
                y = (0, o.A)(e),
                N = (0, h.A)(e),
                v = (0, _.Ay)(e),
                M = (0, p.os)("ReportToModChannelContextMenu");
            return (0, i.jsxs)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "report-to-mod-channel-context",
                onClose: a.Z_,
                "aria-label": j.intl.string(g.default["zp+z/E"]),
                onSelect: t,
                children: [
                    (0, i.jsxs)(r.rXV, { children: [l, s] }, "mark-as-read-or-favorite"),
                    (0, i.jsx)(r.rXV, { children: c }, "channel-actions"),
                    (0, i.jsxs)(r.rXV, { children: [x, M ? v : N] }, "notifications"),
                    (0, i.jsx)(r.rXV, { children: y }),
                    (0, i.jsx)(r.rXV, { children: E }),
                    (0, i.jsx)(r.rXV, { children: C }, "developer-actions"),
                ],
            });
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [s.A.CONTEXT_MENU, s.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
