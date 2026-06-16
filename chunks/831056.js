n.d(t, { KP: () => h, Kb: () => v, OH: () => C, lx: () => x, nY: () => f, pK: () => g, zj: () => p });
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(534514),
    u = n(939249),
    o = n(661531),
    c = n(445563),
    d = n(375708),
    m = n(834926);
function f(e) {
    let { url: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: m.bU });
}
function h() {
    return (0, r.jsx)("div", { className: m.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function p(e) {
    let { orientation: t, children: n } = e;
    return (0, r.jsx)("div", { className: i()(m.Pb, { [m.II]: "portrait" === t }), children: n });
}
function v(e) {
    let { url: t, orientation: n, ref: l } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              ref: l,
              src: t,
              alt: d.intl.string(c.default.E527vj),
              className: i()(m.C, { [m.TW]: "portrait" === n }),
          });
}
function g(e) {
    let { url: t, ref: n } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", { ref: n, src: t, alt: d.intl.string(c.default.E527vj), className: m.xc });
}
function x(e) {
    let { title: t, subtitle: n, ctaBtnLabel: l, onCTAClick: a, orientation: s, ctaIcon: u } = e;
    return (0, r.jsxs)("div", {
        className: i()(m.pP, { [m.iC]: "portrait" === s }),
        children: [(0, r.jsx)(E, { title: t, subtitle: n }), (0, r.jsx)(b, { label: l, icon: u, onClick: a })],
    });
}
function E(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: m.PH,
        children: [
            (0, r.jsx)(s.D, { variant: "heading-md/semibold", className: m.m5, children: t }),
            (0, r.jsx)(s.D, { variant: "heading-sm/normal", className: m.s$, children: n }),
        ],
    });
}
function b(e) {
    let { label: t, icon: n, onClick: a, className: c } = e,
        [d, f] = l.useState(!1),
        h = () => {
            f(!0);
        },
        p = () => {
            f(!1);
        };
    return (0, r.jsxs)(u.D, {
        className: i()(m.uU, m.iM, c),
        onMouseEnter: h,
        onMouseLeave: p,
        onFocus: h,
        onBlur: p,
        onClick: a,
        children: [
            (0, r.jsx)(s.D, { variant: "heading-md/semibold", className: m.ce, children: t }),
            null != n && (0, r.jsx)(n, { size: "md", color: d ? o.A.colors.WHITE : "#B5BAC1", className: m.J5 }),
        ],
    });
}
function C(e) {
    let { title: t, subtitle: n, icon: a, onClick: o, className: c, divider: d } = e,
        [f, h] = l.useState(!1),
        p = () => {
            h(!0);
        },
        v = () => {
            h(!1);
        };
    return (0, r.jsx)(u.D, {
        className: i()(m.Mr, m.iM, c),
        onMouseEnter: p,
        onMouseLeave: v,
        onFocus: p,
        onBlur: v,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: m.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: m.XU,
                    children: [
                        (0, r.jsx)(s.D, { variant: "heading-md/semibold", className: m.Zr, children: t }),
                        (0, r.jsx)(s.D, { variant: "heading-sm/normal", className: m.Hk, children: n }),
                    ],
                }),
                d,
                (0, r.jsx)(a, { size: "md", color: f ? "#FFFFFF" : "#B5BAC1", className: m.J5 }),
            ],
        }),
    });
}
