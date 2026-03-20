n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(232122),
    d = n(985018),
    c = n(291085);
function u() {
    let [e, t] = s.useState(null),
        [n, l] = s.useState(null);
    return (0, i.jsxs)("div", {
        className: c.iE,
        children: [
            (0, i.jsx)(r.Heading, { variant: "heading-xl/normal", children: d.intl.string(d.t.HPJ6Nj) }),
            (0, i.jsx)("ul", {
                className: c.p_,
                children: o.m.map((s, o) => {
                    let d = e === o,
                        u = n === o,
                        _ = d || u ? "text-strong" : "text-muted";
                    return (0, i.jsxs)(
                        r.DUT,
                        {
                            tag: "li",
                            className: a()(c.Aw, { [c.$K]: d }),
                            onClick: () => t((e) => (e === o ? null : o)),
                            onMouseEnter: () => l(o),
                            onMouseLeave: () => l(null),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: c.k7,
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            className: c.b1,
                                            color: _,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, i.jsx)(r.abt, {
                                            size: "sm",
                                            color: r.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: c.q4,
                                            style: { transform: d ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                d &&
                                    (0, i.jsx)(r.Text, {
                                        className: c.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: s.getAnswer(),
                                    }),
                            ],
                        },
                        o,
                    );
                }),
            }),
        ],
    });
}
