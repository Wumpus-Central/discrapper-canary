l.d(t, { A: () => I });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(77692),
    o = l(702841),
    c = l(297264),
    u = l(653887),
    d = l(866665),
    E = l(881636),
    p = l(661531),
    A = l(775602),
    f = l(607470),
    C = l(531685),
    S = l(993408),
    _ = l(62010),
    g = l(105292),
    h = l(543136);
let O = function (e) {
    let { category: t, daysRemainingText: l = g.t.Io7ozn, className: a } = e;
    if (!(0, S.HF)(t.unpublishedAt)) return null;
    let i = (0, S.WU)(t.unpublishedAt),
        s = i > 1 ? g.intl.formatToPlainString(l, { days: i }) : g.intl.string(g.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: r()(h.Z, a),
        children: (0, n.jsx)(_.E, { type: { text: s }, variant: "inverted" }),
    });
};
var b = l(212407),
    L = l(761977);
function I(e) {
    let { category: t, onSelect: l } = e,
        i = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        S = (0, o.bG)([C.A], () => C.A.isFocused()),
        { catalogBannerStatic: _, catalogBannerAnimated: h, catalogBannerRive: I } = (0, b.MV)(t),
        T = a.useRef(null),
        m = null != I,
        G =
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
        className: r()(L.sW, { [L.by]: m, [L.vk]: null != l }),
        ...G,
        children: [
            (0, n.jsx)(s.s, { children: (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: L.Db,
                children: m
                    ? (0, n.jsx)(u._, {
                          src: I,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: T,
                          autoplay: !0,
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: L.ze, src: _, alt: "" }),
                              null != h &&
                                  !i &&
                                  S &&
                                  (0, n.jsx)(f.A, { src: h, className: L.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(O, { category: t, className: L.v0, daysRemainingText: g.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: L.IG,
                    children: (0, n.jsx)(d.m, {
                        text: g.intl.string(g.t["o1ol+T"]),
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
(0, S.$b)(90);
