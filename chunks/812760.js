n.d(t, { A: () => I });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(77692),
    o = n(164636),
    c = n(534514),
    u = n(653887),
    d = n(866665),
    m = n(881636),
    g = n(646514),
    E = n(775602),
    h = n(607470),
    f = n(531685),
    x = n(993408),
    C = n(805251),
    S = n(792996),
    p = n(543136);
let _ = function (e) {
    let { category: t, daysRemainingText: n = S.t.Io7ozn, className: s } = e;
    if (!(0, x.HF)(t.unpublishedAt)) return null;
    let a = (0, x.WU)(t.unpublishedAt),
        r = a > 1 ? S.intl.formatToPlainString(n, { days: a }) : S.intl.string(S.t.Bc13HF);
    return (0, l.jsx)("div", {
        className: i()(p.Z, s),
        children: (0, l.jsx)(C.E, { type: { text: r }, variant: "inverted" }),
    });
};
var A = n(212407),
    v = n(761977);
function I(e) {
    let { category: t, onSelect: n } = e,
        a = (0, o.bG)([E.Ay], () => E.Ay.useReducedMotion),
        x = (0, o.bG)([f.A], () => f.A.isFocused()),
        { catalogBannerStatic: C, catalogBannerAnimated: p, catalogBannerRive: I } = (0, A.MV)(t),
        b = s.useRef(null),
        L = null != I,
        j =
            null != n
                ? {
                      role: "button",
                      tabIndex: 0,
                      "aria-label": t.name,
                      onClick: n,
                      onKeyDown: function (e) {
                          null != n && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), n());
                      },
                  }
                : {};
    return (0, l.jsxs)("div", {
        ref: b,
        className: i()(v.sW, { [v.by]: L, [v.vk]: null != n }),
        ...j,
        children: [
            (0, l.jsx)(r.s, { children: (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, l.jsx)("div", {
                className: v.Db,
                children: L
                    ? (0, l.jsx)(u._, {
                          src: I,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: b,
                          autoplay: !0,
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: v.ze, src: C, alt: "" }),
                              null != p &&
                                  !a &&
                                  x &&
                                  (0, l.jsx)(h.A, { src: p, className: v.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, l.jsx)(_, { category: t, className: v.v0, daysRemainingText: S.t["8gsP5M"] }),
            null != n &&
                (0, l.jsx)("div", {
                    className: v.IG,
                    children: (0, l.jsx)(d.m, {
                        text: S.intl.string(S.t["o1ol+T"]),
                        children: (0, l.jsx)(m.ChevronLargeRightIcon, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: g.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, x.$b)(90);
