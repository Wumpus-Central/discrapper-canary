n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311678),
    r = n(939249),
    a = n(534514),
    o = n(900797),
    d = n(847374),
    c = n(391958),
    u = n(985018),
    m = n(759578);
function g(e) {
    let { onChange: t, initialValue: n, maxWordCount: g, collapsed: h = !1 } = e,
        [x, _] = l.useState(!h);
    return (0, i.jsx)(s.N, {
        isExpanded: x,
        collapsibleContent: (0, i.jsx)(c.A, {
            onChangeText: t,
            maxWordCount: g,
            className: m.ft,
            textAreaClassName: m.cC,
            subtitleText: u.intl.formatToMarkdownString(u.t.qm7UZ8, {}),
            initialValue: n,
        }),
        className: m.uR,
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(r.D, {
                onClick: (e) => {
                    _(!x), t(e);
                },
                children: (0, i.jsxs)("div", {
                    className: m.wx,
                    children: [
                        (0, i.jsx)(a.D, { variant: "text-sm/medium", children: u.intl.string(u.t.lbE2Nm) }),
                        x
                            ? (0, i.jsx)(o.t, { size: "md", color: "currentColor", className: m.UE })
                            : (0, i.jsx)(d.a, { size: "md", color: "currentColor", className: m.UE }),
                    ],
                }),
            });
        },
    });
}
