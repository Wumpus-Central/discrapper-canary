l.d(t, { A: () => G });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(467324),
    o = l(702841),
    c = l(297264),
    u = l(653887),
    d = l(866665),
    E = l(881636),
    p = l(661531),
    A = l(775602),
    C = l(607470),
    _ = l(531685),
    g = l(993408),
    S = l(62010),
    O = l(105292),
    f = l(543136);
let L = function (e) {
    let { category: t, daysRemainingText: l = O.t.Io7ozn, className: i } = e;
    if (!(0, g.HF)(t.unpublishedAt)) return null;
    let a = (0, g.WU)(t.unpublishedAt),
        s = a > 1 ? O.intl.formatToPlainString(l, { days: a }) : O.intl.string(O.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: r()(f.Z, i),
        children: (0, n.jsx)(S.E, { type: { text: s }, variant: "inverted" }),
    });
};
var b = l(212407),
    h = l(761977);
function G(e) {
    let { category: t, onSelect: l } = e,
        a = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        g = (0, o.bG)([_.A], () => _.A.isFocused()),
        { catalogBannerStatic: S, catalogBannerAnimated: f, catalogBannerRive: G } = (0, b.MV)(t),
        I = i.useRef(null),
        T = null != G,
        m =
            null != l
                ? {
                      role: "button",
                      tabIndex: 0,
                      "aria-label": t.name,
                      onClick: l,
                      onKeyDown: function (e) {
                          null != l && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), l());
                      },
                  }
                : {};
    return (0, n.jsxs)("div", {
        ref: I,
        className: r()(h.sW, { [h.by]: T, [h.vk]: null != l }),
        ...m,
        children: [
            (0, n.jsx)(s.s, { children: (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: h.Db,
                children: T
                    ? (0, n.jsx)(u._, {
                          src: G,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: I,
                          autoplay: !0,
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: h.ze, src: S, alt: "" }),
                              null != f &&
                                  !a &&
                                  g &&
                                  (0, n.jsx)(C.A, { src: f, className: h.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(L, { category: t, className: h.v0, daysRemainingText: O.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: h.IG,
                    children: (0, n.jsx)(d.m, {
                        text: O.intl.string(O.t["o1ol+T"]),
                        children: (0, n.jsx)(E.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: p.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, g.$b)(90);
