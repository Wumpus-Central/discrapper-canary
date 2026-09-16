r.d(n, { default: () => N });
var t = r(477900);
r(582128);
var i = r(980707),
    a = r(477782),
    s = r(442433),
    d = r(847767),
    l = r(358367),
    o = r(793574),
    c = r(886393),
    h = r(317910),
    A = r(868548),
    p = r(995102),
    u = r(288104),
    x = r(661504),
    C = r(50268),
    X = r(438653),
    _ = r(769591),
    j = r(652215),
    E = r(39470),
    T = r(375708);
let N = (0, l.A)(
    (0, d.A)(
        function (e) {
            let { channel: n, onSelect: r } = e,
                d = (0, A.A)(n),
                l = (0, c.A)(n),
                o = (0, X.z)(n),
                j = (0, X.C)(n),
                N = (0, p.A)(n),
                k = (0, C.A)({ id: n.id, label: T.intl.string(T.t.gFHI3k) }),
                M = (0, h.A)(n),
                O = (0, u.A)(n),
                b = (0, x.Ay)(n),
                f = (0, _.os)("ReportToModChannelContextMenu");
            return (0, t.jsxs)(i.W, {
                "data-menu-migrated": !0,
                navId: "report-to-mod-channel-context",
                onClose: s.Z_,
                "aria-label": T.intl.string(E.default["zp+z/E"]),
                onSelect: r,
                children: [
                    (0, t.jsx)(a.rX, { children: d }, "mark-as-read-or-favorite"),
                    (0, t.jsx)(a.rX, { children: o }),
                    (0, t.jsx)(a.rX, { children: l }, "channel-actions"),
                    (0, t.jsxs)(a.rX, { children: [N, f ? b : O] }, "notifications"),
                    (0, t.jsx)(a.rX, { children: M }),
                    (0, t.jsx)(a.rX, { children: j }),
                    (0, t.jsx)(a.rX, { children: k }, "developer-actions"),
                ],
            });
        },
        { object: j.ZSU.CONTEXT_MENU },
    ),
    [o.A.CONTEXT_MENU, o.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
