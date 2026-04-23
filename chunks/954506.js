n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(534514),
    i = n(821609),
    r = n(320448),
    s = n(985018),
    o = n(274119);
function c(e) {
    let { children: t, title: n, onClickViewAll: c } = e;
    return (0, l.jsxs)("div", {
        className: o.k,
        children: [
            (0, l.jsxs)("div", {
                className: o.w,
                children: [
                    (0, l.jsx)(a.D, { variant: "heading-lg/medium", children: n }),
                    null != c &&
                        (0, l.jsx)(i.$, {
                            size: "sm",
                            icon: r._,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: c,
                            text: s.intl.string(s.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
