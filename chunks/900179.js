"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(915089),
    u = n(94343),
    c = n(716804),
    d = n(87260);
function _(e) {
    let {
            children: t,
            heading: n,
            headingIcon: s,
            introText: _,
            className: f,
            scrollTargetId: p,
            headingClassName: h,
            headingVariant: m = "text-xs/semibold",
            headingColor: E = "text-default",
        } = e,
        g = (0, l.GV)(),
        A = i.useRef(null),
        I = (0, c.g)(),
        T = null != p && I === p;
    return (
        (0, u.A)(A, T),
        (0, r.jsxs)("section", {
            ref: T ? A : void 0,
            className: a()(d.uW, f),
            "aria-labelledby": null != n ? g : void 0,
            children: [
                null != n &&
                    (0, r.jsxs)("div", {
                        className: d.so,
                        children: [
                            (0, r.jsxs)("div", {
                                className: d.wx,
                                children: [
                                    (0, r.jsx)(o.Heading, { variant: m, color: E, className: h, id: g, children: n }),
                                    s,
                                ],
                            }),
                            null != _ && (0, r.jsx)(o.Text, { variant: "text-xs/normal", children: _ }),
                        ],
                    }),
                (0, r.jsx)(o.Fmo, { children: t }),
            ],
        })
    );
}
