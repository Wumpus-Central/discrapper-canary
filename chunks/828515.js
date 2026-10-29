l.d(t, { A: () => I });
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
    A = l(661531),
    p = l(775602),
    C = l(607470),
    _ = l(531685),
    S = l(993408),
    O = l(62010),
    L = l(105292),
    g = l(543136);
let G = function (e) {
    let { category: t, daysRemainingText: l = L.t.Io7ozn, className: i } = e;
    if (!(0, S.HF)(t.unpublishedAt)) return null;
    let a = (0, S.WU)(t.unpublishedAt),
        s = a > 1 ? L.intl.formatToPlainString(l, { days: a }) : L.intl.string(L.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: r()(g.Z, i),
        children: (0, n.jsx)(O.E, { type: { text: s }, variant: "inverted" }),
    });
};
var T = l(212407),
    f = l(761977);
function I(e) {
    let { category: t, onSelect: l } = e,
        a = (0, o.bG)([p.Ay], () => p.Ay.useReducedMotion),
        S = (0, o.bG)([_.A], () => _.A.isFocused()),
        { catalogBannerStatic: O, catalogBannerAnimated: g, catalogBannerRive: I } = (0, T.MV)(t),
        h = i.useRef(null),
        b = null != I,
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
        ref: h,
        className: r()(f.sW, { [f.by]: b, [f.vk]: null != l }),
        ...m,
        children: [
            (0, n.jsx)(s.s, { children: (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: f.Db,
                children: b
                    ? (0, n.jsx)(u._, {
                          src: I,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: h,
                          autoplay: !0,
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: f.ze, src: O, alt: "" }),
                              null != g &&
                                  !a &&
                                  S &&
                                  (0, n.jsx)(C.A, { src: g, className: f.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(G, { category: t, className: f.v0, daysRemainingText: L.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: f.IG,
                    children: (0, n.jsx)(d.m, {
                        text: L.intl.string(L.t["o1ol+T"]),
                        children: (0, n.jsx)(E.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: A.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, S.$b)(90);
