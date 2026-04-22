n.d(t, { KP: () => f, Kb: () => S, OH: () => A, lx: () => v, nY: () => m, pK: () => p, zj: () => _ });
var r = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(534514),
    u = n(939249),
    o = n(827734),
    c = n(445563),
    d = n(985018),
    E = n(834926);
function m(e) {
    let { url: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: E.bU });
}
function f() {
    return (0, r.jsx)("div", { className: E.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function _(e) {
    let { orientation: t, children: n } = e;
    return (0, r.jsx)("div", { className: l()(E.Pb, { [E.II]: "portrait" === t }), children: n });
}
function S(e) {
    let { url: t, orientation: n, ref: s } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              ref: s,
              src: t,
              alt: d.intl.string(c.default.E527vj),
              className: l()(E.C, { [E.TW]: "portrait" === n }),
          });
}
function p(e) {
    let { url: t, ref: n } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", { ref: n, src: t, alt: d.intl.string(c.default.E527vj), className: E.xc });
}
function v(e) {
    let { title: t, subtitle: n, ctaBtnLabel: s, onCTAClick: a, orientation: i, ctaIcon: u } = e;
    return (0, r.jsxs)("div", {
        className: l()(E.pP, { [E.iC]: "portrait" === i }),
        children: [(0, r.jsx)(g, { title: t, subtitle: n }), (0, r.jsx)(h, { label: s, icon: u, onClick: a })],
    });
}
function g(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: E.PH,
        children: [
            (0, r.jsx)(i.D, { variant: "heading-md/semibold", className: E.m5, children: t }),
            (0, r.jsx)(i.D, { variant: "heading-sm/normal", className: E.s$, children: n }),
        ],
    });
}
function h(e) {
    let { label: t, icon: n, onClick: a, className: c } = e,
        [d, m] = s.useState(!1),
        f = () => {
            m(!0);
        },
        _ = () => {
            m(!1);
        };
    return (0, r.jsxs)(u.D, {
        className: l()(E.uU, E.iM, c),
        onMouseEnter: f,
        onMouseLeave: _,
        onFocus: f,
        onBlur: _,
        onClick: a,
        children: [
            (0, r.jsx)(i.D, { variant: "heading-md/semibold", className: E.ce, children: t }),
            null != n && (0, r.jsx)(n, { size: "md", color: d ? o.A.colors.WHITE : "#B5BAC1", className: E.J5 }),
        ],
    });
}
function A(e) {
    let { title: t, subtitle: n, icon: a, onClick: o, className: c, divider: d } = e,
        [m, f] = s.useState(!1),
        _ = () => {
            f(!0);
        },
        S = () => {
            f(!1);
        };
    return (0, r.jsx)(u.D, {
        className: l()(E.Mr, E.iM, c),
        onMouseEnter: _,
        onMouseLeave: S,
        onFocus: _,
        onBlur: S,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: E.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: E.XU,
                    children: [
                        (0, r.jsx)(i.D, { variant: "heading-md/semibold", className: E.Zr, children: t }),
                        (0, r.jsx)(i.D, { variant: "heading-sm/normal", className: E.Hk, children: n }),
                    ],
                }),
                d,
                (0, r.jsx)(a, { size: "md", color: m ? "#FFFFFF" : "#B5BAC1", className: E.J5 }),
            ],
        }),
    });
}
