n.d(t, { KP: () => f, Kb: () => v, OH: () => S, lx: () => x, nY: () => h, pK: () => g, zj: () => p });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(661531),
    u = n(297264),
    o = n(939249),
    c = n(871273),
    d = n(375708),
    m = n(862649);
function h(e) {
    let { url: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: m.bU });
}
function f() {
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
            (0, r.jsx)(u.D, { variant: "heading-md/semibold", className: m.m5, children: t }),
            (0, r.jsx)(u.D, { variant: "heading-sm/normal", className: m.s$, children: n }),
        ],
    });
}
function b(e) {
    let { label: t, icon: n, onClick: a, className: c } = e,
        [d, h] = l.useState(!1);
    function f() {
        h(!0);
    }
    function p() {
        h(!1);
    }
    return (0, r.jsxs)(o.D, {
        className: i()(m.uU, m.iM, c),
        onMouseEnter: f,
        onMouseLeave: p,
        onFocus: f,
        onBlur: p,
        onClick: a,
        children: [
            (0, r.jsx)(u.D, { variant: "heading-md/semibold", className: m.ce, children: t }),
            null != n && (0, r.jsx)(n, { size: "md", color: d ? s.A.colors.WHITE : "#B5BAC1", className: m.J5 }),
        ],
    });
}
function S(e) {
    let { title: t, subtitle: n, icon: a, onClick: s, className: c, divider: d } = e,
        [h, f] = l.useState(!1);
    function p() {
        f(!0);
    }
    function v() {
        f(!1);
    }
    return (0, r.jsx)(o.D, {
        className: i()(m.Mr, m.iM, c),
        onMouseEnter: p,
        onMouseLeave: v,
        onFocus: p,
        onBlur: v,
        onClick: s,
        children: (0, r.jsxs)("div", {
            className: m.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: m.XU,
                    children: [
                        (0, r.jsx)(u.D, { variant: "heading-md/semibold", className: m.Zr, children: t }),
                        (0, r.jsx)(u.D, { variant: "heading-sm/normal", className: m.Hk, children: n }),
                    ],
                }),
                d,
                (0, r.jsx)(a, { size: "md", color: h ? "#FFFFFF" : "#B5BAC1", className: m.J5 }),
            ],
        }),
    });
}
