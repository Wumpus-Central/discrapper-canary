"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(534514),
    o = n(834730),
    d = n(707554),
    c = n(915089),
    u = n(94343),
    _ = n(716804),
    E = n(489564);
function A(e) {
    let {
            children: t,
            heading: n,
            headingIcon: a,
            introText: A,
            className: h,
            scrollTargetId: I,
            headingClassName: f,
            headingVariant: p = "text-xs/semibold",
            headingColor: T = "text-default",
        } = e,
        m = (0, c.GV)(),
        g = r.useRef(null),
        S = (0, _.g)(),
        N = null != I && S === I;
    return (
        (0, u.A)(g, N),
        (0, i.jsxs)("section", {
            ref: N ? g : void 0,
            className: s()(E.uW, h),
            "aria-labelledby": null != n ? m : void 0,
            children: [
                null != n &&
                    (0, i.jsxs)("div", {
                        className: E.so,
                        children: [
                            (0, i.jsxs)("div", {
                                className: E.wx,
                                children: [
                                    (0, i.jsx)(l.D, { variant: p, color: T, className: f, id: m, children: n }),
                                    a,
                                ],
                            }),
                            null != A && (0, i.jsx)(o.E, { variant: "text-xs/normal", children: A }),
                        ],
                    }),
                (0, i.jsx)(d.F, { children: t }),
            ],
        })
    );
}
