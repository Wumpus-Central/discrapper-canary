n.d(t, { A: () => I });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(126031),
    o = n(702841),
    u = n(653887),
    c = n(990078),
    d = n(534514),
    g = n(408278),
    E = n(881636),
    _ = n(775602),
    m = n(607470),
    S = n(531685),
    A = n(993408),
    L = n(812993),
    p = n(375708),
    h = n(616459);
let y = function (e) {
    let { category: t, daysRemainingText: n = p.t.Io7ozn, className: l } = e;
    if (!(0, A.HF)(t.unpublishedAt)) return null;
    let r = (0, A.WU)(t.unpublishedAt),
        i = r > 1 ? p.intl.formatToPlainString(n, { days: r }) : p.intl.string(p.t.Bc13HF);
    return (0, s.jsx)(L.Lp, { disableColor: !0, text: i, className: a()(h.q, l) });
};
var C = n(212407),
    O = n(215688);
function I(e) {
    let { category: t, onArrowClick: n } = e,
        r = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        A = (0, o.bG)([S.A], () => S.A.isFocused()),
        { catalogBannerStatic: L, catalogBannerAnimated: h, catalogBannerRive: I } = (0, C.MV)(t),
        x = l.useRef(null),
        v = null != I;
    return (0, s.jsxs)("div", {
        ref: x,
        className: a()(O.sW, { [O.by]: v }),
        children: [
            (0, s.jsx)(i.s, { children: (0, s.jsx)(d.D, { variant: "heading-lg/semibold", children: t.name }) }),
            v
                ? (0, s.jsx)(u._, {
                      src: I,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: x,
                      autoplay: !0,
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)("img", { className: O.ze, src: L, alt: "" }),
                          null != h && !r && A && (0, s.jsx)(m.A, { src: h, className: O.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, s.jsx)(y, { category: t, className: O.v0, daysRemainingText: p.t["8gsP5M"] }),
            null != n &&
                (0, s.jsx)("div", {
                    className: O.IG,
                    children: (0, s.jsx)(c.m, {
                        text: p.intl.string(p.t["o1ol+T"]),
                        children: (0, s.jsx)(g.K, {
                            "aria-label": p.intl.string(p.t["o1ol+T"]),
                            onClick: n,
                            icon: E.u,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                }),
        ],
    });
}
(0, A.$b)(90);
