n.d(r, { default: () => C });
var i = n(477900);
n(582128);
var t = n(980707),
    a = n(477782),
    s = n(442433),
    d = n(847767),
    l = n(358367),
    c = n(793574),
    o = n(886393),
    h = n(317910),
    A = n(868548),
    p = n(995102),
    X = n(288104),
    _ = n(50268),
    j = n(438653),
    u = n(652215),
    x = n(39470),
    E = n(375708);
let C = (0, l.A)(
    (0, d.A)(
        function (e) {
            let { channel: r, onSelect: n } = e,
                d = (0, A.A)(r),
                l = (0, o.A)(r),
                c = (0, j.z)(r),
                u = (0, j.C)(r),
                C = (0, p.A)(r),
                N = (0, _.A)({ id: r.id, label: E.intl.string(E.t.gFHI3k) }),
                T = (0, h.A)(r),
                k = (0, X.A)(r);
            return (0, i.jsxs)(t.W, {
                "data-menu-migrated": !0,
                navId: "report-to-mod-channel-context",
                onClose: s.Z_,
                "aria-label": E.intl.string(x.default["zp+z/E"]),
                onSelect: n,
                children: [
                    (0, i.jsx)(a.rX, { children: d }, "mark-as-read-or-favorite"),
                    (0, i.jsx)(a.rX, { children: c }),
                    (0, i.jsx)(a.rX, { children: l }, "channel-actions"),
                    (0, i.jsxs)(a.rX, { children: [C, k] }, "notifications"),
                    (0, i.jsx)(a.rX, { children: T }),
                    (0, i.jsx)(a.rX, { children: u }),
                    (0, i.jsx)(a.rX, { children: N }, "developer-actions"),
                ],
            });
        },
        { object: u.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU],
);
