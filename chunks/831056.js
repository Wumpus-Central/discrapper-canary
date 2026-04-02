n.d(t, { KP: () => E, Kb: () => f, OH: () => g, lx: () => S, nY: () => m, pK: () => p, zj: () => _ });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    l = n(158954),
    o = n(827734),
    u = n(961432),
    c = n(985018),
    d = n(246878);
function m(e) {
    let { url: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: d.bU });
}
function E() {
    return (0, r.jsx)("div", { className: d.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function _(e) {
    let { orientation: t, children: n } = e;
    return (0, r.jsx)("div", { className: a()(d.Pb, { [d.II]: "portrait" === t }), children: n });
}
function f(e) {
    let { url: t, orientation: n, ref: s } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              ref: s,
              src: t,
              alt: c.intl.string(u.default.E527vj),
              className: a()(d.C, { [d.TW]: "portrait" === n }),
          });
}
function p(e) {
    let { url: t, ref: n } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", { ref: n, src: t, alt: c.intl.string(u.default.E527vj), className: d.xc });
}
function S(e) {
    let { title: t, subtitle: n, ctaBtnLabel: s, onCTAClick: i, orientation: l, ctaIcon: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(d.pP, { [d.iC]: "portrait" === l }),
        children: [(0, r.jsx)(v, { title: t, subtitle: n }), (0, r.jsx)(h, { label: s, icon: o, onClick: i })],
    });
}
function v(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: d.PH,
        children: [
            (0, r.jsx)(l.DZT, { variant: "heading-md/semibold", className: d.m5, children: t }),
            (0, r.jsx)(l.DZT, { variant: "heading-sm/normal", className: d.s$, children: n }),
        ],
    });
}
function h(e) {
    let { label: t, icon: n, onClick: i, className: u } = e,
        [c, m] = s.useState(!1),
        E = () => {
            m(!0);
        },
        _ = () => {
            m(!1);
        };
    return (0, r.jsxs)(l.DUT, {
        className: a()(d.uU, d.iM, u),
        onMouseEnter: E,
        onMouseLeave: _,
        onFocus: E,
        onBlur: _,
        onClick: i,
        children: [
            (0, r.jsx)(l.DZT, { variant: "heading-md/semibold", className: d.ce, children: t }),
            null != n && (0, r.jsx)(n, { size: "md", color: c ? o.A.colors.WHITE : "#B5BAC1", className: d.J5 }),
        ],
    });
}
function g(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: u, divider: c } = e,
        [m, E] = s.useState(!1),
        _ = () => {
            E(!0);
        },
        f = () => {
            E(!1);
        };
    return (0, r.jsx)(l.DUT, {
        className: a()(d.Mr, d.iM, u),
        onMouseEnter: _,
        onMouseLeave: f,
        onFocus: _,
        onBlur: f,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: d.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: d.XU,
                    children: [
                        (0, r.jsx)(l.DZT, { variant: "heading-md/semibold", className: d.Zr, children: t }),
                        (0, r.jsx)(l.DZT, { variant: "heading-sm/normal", className: d.Hk, children: n }),
                    ],
                }),
                c,
                (0, r.jsx)(i, { size: "md", color: m ? "#FFFFFF" : "#B5BAC1", className: d.J5 }),
            ],
        }),
    });
}
