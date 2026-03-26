n.d(t, { _: () => r });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(695842);
function r(e) {
    let {
        bannerIcon: t,
        bannerHeader: n,
        bannerSubtext: l,
        textStyles: r,
        headerStyles: o,
        containerStyles: c,
        children: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(a.Ew, c),
        children: [
            (0, i.jsxs)("div", {
                className: s()(a.lt, r),
                children: [
                    null != t && ("string" == typeof t ? (0, i.jsx)("img", { src: t, alt: "", className: a.q3 }) : t),
                    (0, i.jsxs)("div", {
                        className: a._M,
                        children: [
                            (0, i.jsx)("div", { className: s()(a.U_, o), children: n }),
                            null != l && (0, i.jsx)("div", { className: a.mi, children: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: a.uu, children: d }),
        ],
    });
}
