t.d(e, { default: () => v });
var i = t(627968);
t(64700);
var r = t(861672),
    l = t(477782),
    a = t(442433),
    c = t(847767),
    d = t(358367),
    o = t(793574),
    s = t(886393),
    u = t(317910),
    A = t(848977),
    h = t(995102),
    _ = t(288104),
    f = t(661504),
    b = t(50268),
    E = t(133238),
    x = t(769591),
    g = t(652215),
    j = t(221314),
    C = t(985018);
let v = (0, d.A)(
    (0, c.A)(
        function (n) {
            let { channel: e, onSelect: t } = n,
                c = (0, A.A)(e),
                d = (0, s.A)(e),
                o = (0, E.m)(e),
                g = (0, E.y)(e),
                v = (0, h.A)(e),
                y = (0, b.A)({ id: e.id, label: C.intl.string(C.t.gFHI3k) }),
                N = (0, u.A)(e),
                p = (0, _.A)(e),
                G = (0, f.Ay)(e),
                T = (0, x.os)("ReportToModChannelContextMenu");
            return (0, i.jsxs)(r.W, {
                "data-menu-migrated": !0,
                navId: "report-to-mod-channel-context",
                onClose: a.Z_,
                "aria-label": C.intl.string(j.default["zp+z/E"]),
                onSelect: t,
                children: [
                    (0, i.jsx)(l.rX, { children: c }, "mark-as-read-or-favorite"),
                    (0, i.jsx)(l.rX, { children: o }),
                    (0, i.jsx)(l.rX, { children: d }, "channel-actions"),
                    (0, i.jsxs)(l.rX, { children: [v, T ? G : p] }, "notifications"),
                    (0, i.jsx)(l.rX, { children: N }),
                    (0, i.jsx)(l.rX, { children: g }),
                    (0, i.jsx)(l.rX, { children: y }, "developer-actions"),
                ],
            });
        },
        { object: g.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
