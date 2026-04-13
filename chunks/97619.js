"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(376484),
    l = n(91299),
    u = n(471296),
    c = n(610223),
    d = n(275106),
    _ = n(178090),
    f = n(346640),
    p = n(75772),
    h = n(985018),
    m = n(554010);
function E(e) {
    switch (e) {
        case f.$p.CRAFTING:
            return f.zX;
        case f.$p.COMBAT:
            return f.P6;
    }
}
function g(e) {
    let { selectedClass: t, currentClass: n, handleClick: s, isDisabled: f, classData: E } = e,
        [g, A] = (0, i.useState)(!1),
        I = (0, o.A)(n),
        T = (0, c.W)(E.hoverSound),
        S = t === n,
        y = (0, i.useCallback)(() => {
            f?.(n) || (A(!0), T());
        }, [f, n, T]),
        v = (0, i.useCallback)(() => {
            f?.(n) || A(!1);
        }, [f, n]);
    return (0, r.jsx)(l.A, {
        onMouseEnter: y,
        onMouseLeave: v,
        onClick: () => s(n),
        className: a()({ [m.r9]: f?.(n) }),
        children: (0, r.jsxs)("div", {
            className: a()(m.rb, { [m.yo]: g }),
            children: [
                (0, r.jsxs)(d.A, {
                    className: m.c6,
                    children: [
                        (0, r.jsx)(u.A, {
                            "aria-hidden": !S,
                            className: a()(m.$R, { [m.H3]: S }),
                            textVariant: "text-lg/normal",
                            children: h.intl.string(p.default.lCPu7w),
                        }),
                        (0, r.jsx)("img", { src: E.asset, alt: h.intl.string(E.name), className: m.Tn }),
                        (0, r.jsx)(_.A, { variant: "heading-xl/normal", children: h.intl.string(E.name) }),
                        (0, r.jsx)(_.A, { variant: "text-lg/normal", children: h.intl.string(E.description) }),
                    ],
                }),
                (0, r.jsx)(_.A, {
                    variant: "text-lg/normal",
                    className: m.Uo,
                    children: (0, r.jsx)("span", { className: m.HD, children: I }),
                }),
            ],
        }),
    });
}
function A(e) {
    let { classType: t, onSelect: n, selectedClass: i, isDisabled: s } = e,
        a = E(t),
        o = (e) => {
            s?.(e) || (t === f.$p.CRAFTING ? n(e) : t === f.$p.COMBAT && n(e));
        };
    return (0, r.jsx)("div", {
        className: m.kL,
        children: (0, r.jsx)("div", {
            className: m.Ly,
            children: Object.entries(a).map((e) => {
                let [t, n] = e;
                return (0, r.jsx)(
                    g,
                    { selectedClass: i, currentClass: t, handleClick: o, isDisabled: s, classData: n },
                    t,
                );
            }),
        }),
    });
}
