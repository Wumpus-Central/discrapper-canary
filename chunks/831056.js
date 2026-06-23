"use strict";
n.d(t, { KP: () => f, Kb: () => E, OH: () => T, lx: () => g, nY: () => h, pK: () => m, zj: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(534514),
    l = n(939249),
    u = n(661531),
    c = n(445563),
    d = n(375708),
    _ = n(834926);
function h(e) {
    let { url: t } = e;
    return null == t ? null : (0, i.jsx)("img", { src: t, alt: "", className: _.bU });
}
function f() {
    return (0, i.jsx)("div", { className: _.MM, "data-testid": "discord-web-video-player-end-screen" });
}
function p(e) {
    let { orientation: t, children: n } = e;
    return (0, i.jsx)("div", { className: a()(_.Pb, { [_.II]: "portrait" === t }), children: n });
}
function E(e) {
    let { url: t, orientation: n, ref: r } = e;
    return null == t
        ? null
        : (0, i.jsx)("img", {
              ref: r,
              src: t,
              alt: d.intl.string(c.default.E527vj),
              className: a()(_.C, { [_.TW]: "portrait" === n }),
          });
}
function m(e) {
    let { url: t, ref: n } = e;
    return null == t
        ? null
        : (0, i.jsx)("img", { ref: n, src: t, alt: d.intl.string(c.default.E527vj), className: _.xc });
}
function g(e) {
    let { title: t, subtitle: n, ctaBtnLabel: r, onCTAClick: s, orientation: o, ctaIcon: l } = e;
    return (0, i.jsxs)("div", {
        className: a()(_.pP, { [_.iC]: "portrait" === o }),
        children: [(0, i.jsx)(A, { title: t, subtitle: n }), (0, i.jsx)(I, { label: r, icon: l, onClick: s })],
    });
}
function A(e) {
    let { title: t, subtitle: n } = e;
    return (0, i.jsxs)("div", {
        className: _.PH,
        children: [
            (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: _.m5, children: t }),
            (0, i.jsx)(o.D, { variant: "heading-sm/normal", className: _.s$, children: n }),
        ],
    });
}
function I(e) {
    let { label: t, icon: n, onClick: s, className: c } = e,
        [d, h] = r.useState(!1);
    function f() {
        h(!0);
    }
    function p() {
        h(!1);
    }
    return (0, i.jsxs)(l.D, {
        className: a()(_.uU, _.iM, c),
        onMouseEnter: f,
        onMouseLeave: p,
        onFocus: f,
        onBlur: p,
        onClick: s,
        children: [
            (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: _.ce, children: t }),
            null != n && (0, i.jsx)(n, { size: "md", color: d ? u.A.colors.WHITE : "#B5BAC1", className: _.J5 }),
        ],
    });
}
function T(e) {
    let { title: t, subtitle: n, icon: s, onClick: u, className: c, divider: d } = e,
        [h, f] = r.useState(!1);
    function p() {
        f(!0);
    }
    function E() {
        f(!1);
    }
    return (0, i.jsx)(l.D, {
        className: a()(_.Mr, _.iM, c),
        onMouseEnter: p,
        onMouseLeave: E,
        onFocus: p,
        onBlur: E,
        onClick: u,
        children: (0, i.jsxs)("div", {
            className: _.ee,
            children: [
                (0, i.jsxs)("div", {
                    className: _.XU,
                    children: [
                        (0, i.jsx)(o.D, { variant: "heading-md/semibold", className: _.Zr, children: t }),
                        (0, i.jsx)(o.D, { variant: "heading-sm/normal", className: _.Hk, children: n }),
                    ],
                }),
                d,
                (0, i.jsx)(s, { size: "md", color: h ? "#FFFFFF" : "#B5BAC1", className: _.J5 }),
            ],
        }),
    });
}
