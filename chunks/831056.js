n.d(t, { KP: () => f, Kb: () => g, OH: () => M, lx: () => v, nY: () => S, pK: () => h, zj: () => x });
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
function x(e) {
    let { orientation: t, children: n } = e;
    return (0, s.jsx)("div", { className: a()(o.Pb, { [o.II]: "portrait" === t }), children: n });
}
function g(e) {
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
function v(e) {
    let { title: t, subtitle: n, ctaBtnLabel: l, onCTAClick: r, orientation: c, ctaIcon: u } = e;
    return (0, s.jsxs)("div", {
        className: a()(o.pP, { [o.iC]: "portrait" === c }),
        children: [(0, s.jsx)(j, { title: t, subtitle: n }), (0, s.jsx)(b, { label: l, icon: u, onClick: r })],
    });
}
function j(e) {
    let { title: t, subtitle: n } = e;
    return (0, s.jsxs)("div", {
        className: o.PH,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-sm/semibold", className: o.m5, children: t }),
            (0, s.jsx)(u.D, { variant: "heading-xs/medium", className: o.s$, children: n }),
        ],
    });
}
function b(e) {
    let { label: t, icon: n, onClick: r, className: m } = e,
        [d, S] = l.useState(!1);
    function f() {
        S(!0);
    }
    function x() {
        S(!1);
    }
    return (0, s.jsxs)(i.D, {
        className: a()(o.uU, o.iM, m),
        onMouseEnter: f,
        onMouseLeave: x,
        onFocus: f,
        onBlur: x,
        onClick: r,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-sm/semibold", className: o.ce, children: t }),
            null != n && (0, s.jsx)(n, { size: "md", color: d ? c.A.colors.WHITE : "#B5BAC1", className: o.J5 }),
        ],
    });
}
function M(e) {
    let { title: t, subtitle: n, icon: r, onClick: c, className: m, divider: d } = e,
        [S, f] = l.useState(!1);
    function x() {
        f(!0);
    }
    function g() {
        f(!1);
    }
    return (0, s.jsx)(i.D, {
        className: a()(o.Mr, o.iM, m),
        onMouseEnter: x,
        onMouseLeave: g,
        onFocus: x,
        onBlur: g,
        onClick: c,
        children: (0, s.jsxs)("div", {
            className: o.ee,
            children: [
                (0, s.jsxs)("div", {
                    className: o.XU,
                    children: [
                        (0, s.jsx)(u.D, { variant: "heading-sm/semibold", className: o.Zr, children: t }),
                        (0, s.jsx)(u.D, { variant: "heading-xs/medium", className: o.Hk, children: n }),
                    ],
                }),
                d,
                (0, s.jsx)(r, { size: "md", color: S ? "#FFFFFF" : "#B5BAC1", className: o.J5 }),
            ],
        }),
    });
}
