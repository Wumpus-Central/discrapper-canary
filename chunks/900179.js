"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(534514),
    l = n(834730),
    u = n(707554),
    c = n(915089),
    d = n(94343),
    _ = n(716804),
    h = n(87260);
function f(e) {
    let {
            children: t,
            heading: n,
            headingIcon: s,
            introText: f,
            className: E,
            scrollTargetId: p,
            headingClassName: m,
            headingVariant: g = "text-xs/semibold",
            headingColor: A = "text-default",
        } = e,
        I = (0, c.GV)(),
        T = r.useRef(null),
        S = (0, _.g)(),
        N = null != p && S === p;
    return (
        (0, d.A)(T, N),
        (0, i.jsxs)("section", {
            ref: N ? T : void 0,
            className: a()(h.uW, E),
            "aria-labelledby": null != n ? I : void 0,
            children: [
                null != n &&
                    (0, i.jsxs)("div", {
                        className: h.so,
                        children: [
                            (0, i.jsxs)("div", {
                                className: h.wx,
                                children: [
                                    (0, i.jsx)(o.D, { variant: g, color: A, className: m, id: I, children: n }),
                                    s,
                                ],
                            }),
                            null != f && (0, i.jsx)(l.E, { variant: "text-xs/normal", children: f }),
                        ],
                    }),
                (0, i.jsx)(u.F, { children: t }),
            ],
        })
    );
}
