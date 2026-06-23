s.d(t, { A: () => I });
var l = s(627968),
    r = s(64700),
    n = s(503698),
    a = s.n(n),
    i = s(126031),
    o = s(702841),
    u = s(653887),
    c = s(990078),
    d = s(534514),
    g = s(408278),
    E = s(881636),
    _ = s(775602),
    m = s(607470),
    S = s(531685),
    A = s(993408),
    L = s(812993),
    p = s(375708),
    h = s(616459);
let y = (e) => {
    let { category: t, daysRemainingText: s = p.t.Io7ozn, className: r } = e;
    if (!(0, A.HF)(t.unpublishedAt)) return null;
    let n = (0, A.WU)(t.unpublishedAt),
        i = n > 1 ? p.intl.formatToPlainString(s, { days: n }) : p.intl.string(p.t.Bc13HF);
    return (0, l.jsx)(L.Lp, { disableColor: !0, text: i, className: a()(h.q, r) });
};
var C = s(212407),
    O = s(215688);
function I(e) {
    let { category: t, onArrowClick: s } = e,
        n = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        A = (0, o.bG)([S.A], () => S.A.isFocused()),
        { catalogBannerStatic: L, catalogBannerAnimated: h, catalogBannerRive: I } = (0, C.MV)(t),
        x = r.useRef(null),
        v = null != I;
    return (0, l.jsxs)("div", {
        ref: x,
        className: a()(O.sW, { [O.by]: v }),
        children: [
            (0, l.jsx)(i.s, { children: (0, l.jsx)(d.D, { variant: "heading-lg/semibold", children: t.name }) }),
            v
                ? (0, l.jsx)(u._, {
                      src: I,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: x,
                      autoplay: !0,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("img", { className: O.ze, src: L, alt: "" }),
                          null != h && !n && A && (0, l.jsx)(m.A, { src: h, className: O.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, l.jsx)(y, { category: t, className: O.v0, daysRemainingText: p.t["8gsP5M"] }),
            null != s &&
                (0, l.jsx)("div", {
                    className: O.IG,
                    children: (0, l.jsx)(c.m, {
                        text: p.intl.string(p.t["o1ol+T"]),
                        children: (0, l.jsx)(g.K, {
                            "aria-label": p.intl.string(p.t["o1ol+T"]),
                            onClick: s,
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
