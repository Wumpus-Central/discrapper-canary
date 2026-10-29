l.d(t, { A: () => G });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(77692),
    o = l(702841),
    c = l(297264),
    u = l(653887),
    d = l(866665),
    E = l(881636),
    p = l(661531),
    A = l(775602),
    C = l(607470),
    S = l(531685),
    _ = l(993408),
    g = l(62010),
    O = l(105292),
    h = l(543136);
let L = function (e) {
    let { category: t, daysRemainingText: l = O.t.Io7ozn, className: i } = e;
    if (!(0, _.HF)(t.unpublishedAt)) return null;
    let a = (0, _.WU)(t.unpublishedAt),
        s = a > 1 ? O.intl.formatToPlainString(l, { days: a }) : O.intl.string(O.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: r()(h.Z, i),
        children: (0, n.jsx)(g.E, { type: { text: s }, variant: "inverted" }),
    });
};
var f = l(212407),
    b = l(761977);
function G(e) {
    let { category: t, onSelect: l } = e,
        a = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        _ = (0, o.bG)([S.A], () => S.A.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: h, catalogBannerRive: G } = (0, f.MV)(t),
        T = i.useRef(null),
        I = null != G,
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
        ref: T,
        className: r()(b.sW, { [b.by]: I, [b.vk]: null != l }),
        ...m,
        children: [
            (0, n.jsx)(s.s, { children: (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: b.Db,
                children: I
                    ? (0, n.jsx)(u._, {
                          src: G,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: T,
                          autoplay: !0,
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: b.ze, src: g, alt: "" }),
                              null != h &&
                                  !a &&
                                  _ &&
                                  (0, n.jsx)(C.A, { src: h, className: b.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(L, { category: t, className: b.v0, daysRemainingText: O.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: b.IG,
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
(0, _.$b)(90);
