n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var l = n(534514),
    i = n(821609),
    r = n(320448),
    s = n(985018),
    o = n(274119);
function d(e) {
    let { children: t, title: n, onClickViewAll: d } = e;
    return (0, a.jsxs)("div", {
        className: o.k,
        children: [
            (0, a.jsxs)("div", {
                className: o.w,
                children: [
                    (0, a.jsx)(l.D, { variant: "heading-lg/medium", children: n }),
                    null != d &&
                        (0, a.jsx)(i.$, {
                            size: "sm",
                            icon: r._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: d,
                            text: s.intl.string(s.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
