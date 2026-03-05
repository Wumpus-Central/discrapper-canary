"use strict";
n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(158954),
    a = n(985018),
    r = n(355416);
function s(e) {
    let { children: t, title: n, onClickViewAll: s } = e;
    return (0, i.jsxs)("div", {
        className: r.k,
        children: [
            (0, i.jsxs)("div", {
                className: r.w,
                children: [
                    (0, i.jsx)(l.DZT, { variant: "heading-lg/medium", children: n }),
                    null != s &&
                        (0, i.jsx)(l.$nd, {
                            size: "sm",
                            icon: l._BQ,
                            iconPosition: "end",
                            variant: "secondary",
                            onClick: s,
                            text: a.intl.string(a.t.budhsM),
                        }),
                ],
            }),
            t,
        ],
    });
}
