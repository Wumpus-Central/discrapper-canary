n.d(t, { KP: () => f, Kb: () => x, OH: () => M, lx: () => j, nY: () => S, pK: () => h, zj: () => g });
var s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    c = n(661531),
    u = n(534514),
    i = n(939249),
    m = n(267286),
    d = n(105292),
    o = n(862649);
function S(e) {
    let { url: t } = e;
    return null == t ? null : (0, s.jsx)("img", { src: t, alt: "", className: o.bU });
}
function f() {
    return (0, s.jsx)("div", { className: o.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function g(e) {
    let { orientation: t, children: n } = e;
    return (0, s.jsx)("div", { className: a()(o.Pb, { [o.II]: "portrait" === t }), children: n });
}
function x(e) {
    let { url: t, orientation: n, ref: l } = e;
    return null == t
        ? null
        : (0, s.jsx)("img", {
              ref: l,
              src: t,
              alt: d.intl.string(m.default.E527vj),
              className: a()(o.C, { [o.TW]: "portrait" === n }),
          });
}
function h(e) {
    let { url: t, ref: n } = e;
    return null == t
        ? null
        : (0, s.jsx)("img", { ref: n, src: t, alt: d.intl.string(m.default.E527vj), className: o.xc });
}
function j(e) {
    let { title: t, subtitle: n, ctaBtnLabel: l, onCTAClick: r, orientation: c, ctaIcon: u } = e;
    return (0, s.jsxs)("div", {
        className: a()(o.pP, { [o.iC]: "portrait" === c }),
        children: [(0, s.jsx)(v, { title: t, subtitle: n }), (0, s.jsx)(b, { label: l, icon: u, onClick: r })],
    });
}
function v(e) {
    let { title: t, subtitle: n } = e;
    return (0, s.jsxs)("div", {
        className: o.PH,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-md/semibold", className: o.m5, children: t }),
            (0, s.jsx)(u.D, { variant: "heading-sm/medium", className: o.s$, children: n }),
        ],
    });
}
function b(e) {
    let { label: t, icon: n, onClick: r, className: m } = e,
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
            (0, s.jsx)(u.D, { variant: "heading-md/semibold", className: o.ce, children: t }),
            null != n && (0, s.jsx)(n, { size: "md", color: d ? c.A.colors.WHITE : "#B5BAC1", className: o.J5 }),
        ],
    });
}
function M(e) {
    let { title: t, subtitle: n, icon: r, onClick: c, className: m, divider: d } = e,
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
                        (0, s.jsx)(u.D, { variant: "heading-md/semibold", className: o.Zr, children: t }),
                        (0, s.jsx)(u.D, { variant: "heading-sm/medium", className: o.Hk, children: n }),
                    ],
                }),
                d,
                (0, s.jsx)(r, { size: "md", color: S ? "#FFFFFF" : "#B5BAC1", className: o.J5 }),
            ],
        }),
    });
}
