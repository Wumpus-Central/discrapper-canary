"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(391958),
    a = n(985018),
    o = n(25643);
function d(e) {
    let { onChange: t, initialValue: n, maxWordCount: d, collapsed: c = !1 } = e,
        [u, m] = s.useState(!c);
    return (0, i.jsx)(l.Nt8, {
        isExpanded: u,
        collapsibleContent: (0, i.jsx)(r.A, {
            onChangeText: t,
            maxWordCount: d,
            className: o.ft,
            textAreaClassName: o.cC,
            subtitleText: a.intl.formatToMarkdownString(a.t.qm7UZ8, {}),
            initialValue: n,
        }),
        className: o.uR,
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(l.DUT, {
                onClick: (e) => {
                    m(!u), t(e);
                },
                children: (0, i.jsxs)("div", {
                    className: o.wx,
                    children: [
                        (0, i.jsx)(l.Heading, { variant: "text-sm/medium", children: a.intl.string(a.t.lbE2Nm) }),
                        u
                            ? (0, i.jsx)(l.tN5, { size: "md", color: "currentColor", className: o.UE })
                            : (0, i.jsx)(l.abt, { size: "md", color: "currentColor", className: o.UE }),
                    ],
                }),
            });
        },
    });
}
