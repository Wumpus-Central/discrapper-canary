t.d(n, {
    default: () => _,
});
var r = t(627968);
t(64700);
var i = t(397927),
    a = t(442433),
    c = t(847767),
    l = t(358367),
    o = t(793574),
    s = t(886393),
    u = t(317910),
    d = t(848977),
    b = t(995102),
    f = t(288104),
    A = t(661504),
    p = t(50268),
    O = t(133238),
    h = t(769591),
    y = t(652215),
    j = t(641131),
    g = t(985018);
let _ = (0, l.A)(
    (0, c.A)(
        function (e) {
            let { channel: n, onSelect: t } = e,
                c = (0, d.A)(n),
                l = (0, s.A)(n),
                o = (0, O.m)(n),
                y = (0, O.y)(n),
                _ = (0, b.Ay)(n),
                v = (0, p.A)({
                    id: n.id,
                    label: g.intl.string(g.t.gFHI3k),
                }),
                E = (0, u.A)(n),
                m = (0, f.A)(n),
                x = (0, A.Ay)(n),
                C = (0, h.os)("ReportToModChannelContextMenu");
            return (0, r.jsxs)(i.W1t, {
                "data-menu-migrated": !0,
                navId: "report-to-mod-channel-context",
                onClose: a.Z_,
                "aria-label": g.intl.string(j.default["zp+z/E"]),
                onSelect: t,
                children: [
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [c, o],
                        },
                        "mark-as-read-or-favorite",
                    ),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: l,
                        },
                        "channel-actions",
                    ),
                    (0, r.jsxs)(
                        i.rXV,
                        {
                            children: [_, C ? x : m],
                        },
                        "notifications",
                    ),
                    (0, r.jsx)(i.rXV, {
                        children: E,
                    }),
                    (0, r.jsx)(i.rXV, {
                        children: y,
                    }),
                    (0, r.jsx)(
                        i.rXV,
                        {
                            children: v,
                        },
                        "developer-actions",
                    ),
                ],
            });
        },
        {
            object: y.ZSU.CONTEXT_MENU,
        },
    ),
    [o.A.CONTEXT_MENU, o.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
