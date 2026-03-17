n.d(t, { A: () => s });
var a = n(627968);
n(64700);
var l = n(158954),
    i = n(985018),
    r = n(355416);
function s(e) {
    let { children: t, title: n, onClickViewAll: s } = e;
    return (0, a.jsxs)("div", {
        className: r.k,
        children: [
            (0, a.jsxs)("div", {
                className: r.w,
                children: [
                    (0, a.jsx)(l.DZT, { variant: "heading-lg/medium", children: n }),
                    null != s &&
                        (0, a.jsx)(l.$nd, {
                            size: "sm",
                            icon: l._BQ,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: s,
                            text: i.intl.string(i.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
