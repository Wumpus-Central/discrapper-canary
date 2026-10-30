l.d(t, { A: () => G });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(77692),
    o = l(702841),
    u = l(297264),
    c = l(653887),
    d = l(866665),
    E = l(881636),
    p = l(661531),
    A = l(775602),
    f = l(607470),
    C = l(531685),
    S = l(993408),
    g = l(62010),
    _ = l(105292),
    O = l(543136);
let h = function (e) {
    let { category: t, daysRemainingText: l = _.t.Io7ozn, className: a } = e;
    if (!(0, S.HF)(t.unpublishedAt)) return null;
    let i = (0, S.WU)(t.unpublishedAt),
        s = i > 1 ? _.intl.formatToPlainString(l, { days: i }) : _.intl.string(_.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: r()(O.Z, a),
        children: (0, n.jsx)(g.E, { type: { text: s }, variant: "inverted" }),
    });
};
var b = l(212407),
    L = l(761977);
function G(e) {
    let { category: t, onSelect: l } = e,
        i = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        S = (0, o.bG)([C.A], () => C.A.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: O, catalogBannerRive: G } = (0, b.MV)(t),
        I = a.useRef(null),
        m = null != G,
        T =
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
        className: r()(L.sW, { [L.by]: m, [L.vk]: null != l }),
        ...T,
        children: [
            (0, n.jsx)(s.s, { children: (0, n.jsx)(u.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: L.Db,
                children: m
                    ? (0, n.jsx)(c._, {
                          src: G,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: I,
                          autoplay: !0,
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: L.ze, src: g, alt: "" }),
                              null != O &&
                                  !i &&
                                  S &&
                                  (0, n.jsx)(f.A, { src: O, className: L.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(h, { category: t, className: L.v0, daysRemainingText: _.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: L.IG,
                    children: (0, n.jsx)(d.m, {
                        text: _.intl.string(_.t["o1ol+T"]),
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
