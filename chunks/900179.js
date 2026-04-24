"use strict";
n.d(t, { A: () => m });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(534514),
    o = n(834730),
    c = n(707554),
    d = n(915089),
    u = n(94343),
    _ = n(716804),
    p = n(87260);
function m(e) {
    let {
            children: t,
            heading: n,
            headingIcon: i,
            introText: m,
            className: h,
            scrollTargetId: f,
            headingClassName: g,
            headingVariant: b = "text-xs/semibold",
            headingColor: v = "text-default",
        } = e,
        A = (0, d.GV)(),
        x = r.useRef(null),
        E = (0, _.g)(),
        T = null != f && E === f;
    return (
        (0, u.A)(x, T),
        (0, a.jsxs)("section", {
            ref: T ? x : void 0,
            className: l()(p.uW, h),
            "aria-labelledby": null != n ? A : void 0,
            children: [
                null != n &&
                    (0, a.jsxs)("div", {
                        className: p.so,
                        children: [
                            (0, a.jsxs)("div", {
                                className: p.wx,
                                children: [
                                    (0, a.jsx)(s.D, { variant: b, color: v, className: g, id: A, children: n }),
                                    i,
                                ],
                            }),
                            null != m && (0, a.jsx)(o.E, { variant: "text-xs/normal", children: m }),
                        ],
                    }),
                (0, a.jsx)(c.F, { children: t }),
            ],
        })
    );
}
