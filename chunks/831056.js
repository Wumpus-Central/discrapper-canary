t.d(n, { KP: () => f, Kb: () => x, OH: () => M, lx: () => j, nY: () => S, pK: () => h, zj: () => g });
var s = t(477900),
    l = t(582128),
    r = t(503698),
    a = t.n(r),
    c = t(661531),
    u = t(297264),
    i = t(939249),
    m = t(711127),
    d = t(375708),
    o = t(862649);
function S(e) {
    let { url: n } = e;
    return null == n ? null : (0, s.jsx)("img", { src: n, alt: "", className: o.bU });
}
function f() {
    return (0, s.jsx)("div", { className: o.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function g(e) {
    let { orientation: n, children: t } = e;
    return (0, s.jsx)("div", { className: a()(o.Pb, { [o.II]: "portrait" === n }), children: t });
}
function x(e) {
    let { url: n, orientation: t, ref: l } = e;
    return null == n
        ? null
        : (0, s.jsx)("img", {
              ref: l,
              src: n,
              alt: d.intl.string(m.default.E527vj),
              className: a()(o.C, { [o.TW]: "portrait" === t }),
          });
}
function h(e) {
    let { url: n, ref: t } = e;
    return null == n
        ? null
        : (0, s.jsx)("img", { ref: t, src: n, alt: d.intl.string(m.default.E527vj), className: o.xc });
}
function j(e) {
    let { title: n, subtitle: t, ctaBtnLabel: l, onCTAClick: r, orientation: c, ctaIcon: u } = e;
    return (0, s.jsxs)("div", {
        className: a()(o.pP, { [o.iC]: "portrait" === c }),
        children: [(0, s.jsx)(b, { title: n, subtitle: t }), (0, s.jsx)(v, { label: l, icon: u, onClick: r })],
    });
}
function b(e) {
    let { title: n, subtitle: t } = e;
    return (0, s.jsxs)("div", {
        className: o.PH,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-md/semibold", className: o.m5, children: n }),
            (0, s.jsx)(u.D, { variant: "heading-sm/normal", className: o.s$, children: t }),
        ],
    });
}
function v(e) {
    let { label: n, icon: t, onClick: r, className: m } = e,
        [d, S] = l.useState(!1);
    function f() {
        S(!0);
    }
    function g() {
        S(!1);
    }
    return (0, s.jsxs)(i.D, {
        className: a()(o.uU, o.iM, m),
        onMouseEnter: f,
        onMouseLeave: g,
        onFocus: f,
        onBlur: g,
        onClick: r,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-md/semibold", className: o.ce, children: n }),
            null != t && (0, s.jsx)(t, { size: "md", color: d ? c.A.colors.WHITE : "#B5BAC1", className: o.J5 }),
        ],
    });
}
function M(e) {
    let { title: n, subtitle: t, icon: r, onClick: c, className: m, divider: d } = e,
        [S, f] = l.useState(!1);
    function g() {
        f(!0);
    }
    function x() {
        f(!1);
    }
    return (0, s.jsx)(i.D, {
        className: a()(o.Mr, o.iM, m),
        onMouseEnter: g,
        onMouseLeave: x,
        onFocus: g,
        onBlur: x,
        onClick: c,
        children: (0, s.jsxs)("div", {
            className: o.ee,
            children: [
                (0, s.jsxs)("div", {
                    className: o.XU,
                    children: [
                        (0, s.jsx)(u.D, { variant: "heading-md/semibold", className: o.Zr, children: n }),
                        (0, s.jsx)(u.D, { variant: "heading-sm/normal", className: o.Hk, children: t }),
                    ],
                }),
                d,
                (0, s.jsx)(r, { size: "md", color: S ? "#FFFFFF" : "#B5BAC1", className: o.J5 }),
            ],
        }),
    });
}
