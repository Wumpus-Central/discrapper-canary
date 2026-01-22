n.d(t, { A: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(391958),
    a = n(985018),
    c = n(816925);
function o(e) {
    let { onChange: t, initialValue: n, maxWordCount: o, collapsed: d = !1 } = e,
        [u, f] = i.useState(!d);
    return (0, r.jsx)(l.Nt8, {
        isExpanded: u,
        collapsibleContent: (0, r.jsx)(s.A, {
            onChangeText: t,
            maxWordCount: o,
            className: c.ft,
            textAreaClassName: c.cC,
            subtitleText: a.intl.formatToMarkdownString(a.t.qm7UZ8, {}),
            initialValue: n,
        }),
        className: c.uR,
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(l.DUT, {
                onClick: (e) => {
                    f(!u), t(e);
                },
                children: (0, r.jsxs)("div", {
                    className: c.wx,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "text-sm/medium",
                            children: a.intl.string(a.t.lbE2Nm),
                        }),
                        u
                            ? (0, r.jsx)(l.tN5, {
                                  size: "md",
                                  color: "currentColor",
                                  className: c.UE,
                              })
                            : (0, r.jsx)(l.abt, {
                                  size: "md",
                                  color: "currentColor",
                                  className: c.UE,
                              }),
                    ],
                }),
            });
        },
    });
}
