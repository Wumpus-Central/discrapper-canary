n.d(t, { _: () => r });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(402770);
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
        className: a()(s.Ew, c),
        children: [
            (0, i.jsxs)("div", {
                className: a()(s.lt, r),
                children: [
                    null != t && ("string" == typeof t ? (0, i.jsx)("img", { src: t, alt: "", className: s.q3 }) : t),
                    (0, i.jsxs)("div", {
                        className: s._M,
                        children: [
                            (0, i.jsx)("div", { className: a()(s.U_, o), children: n }),
                            null != l && (0, i.jsx)("div", { className: s.mi, children: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: s.uu, children: d }),
        ],
    });
}
