l.d(t, { A: () => I });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    o = l(77692),
    r = l(702841),
    c = l(534514),
    u = l(653887),
    d = l(866665),
    E = l(881636),
    A = l(661531),
    p = l(775602),
    C = l(607470),
    f = l(531685),
    S = l(993408),
    O = l(62010),
    b = l(105292),
    g = l(543136);
let _ = function (e) {
    let { category: t, daysRemainingText: l = b.t.Io7ozn, className: a } = e;
    if (!(0, S.HF)(t.unpublishedAt)) return null;
    let i = (0, S.WU)(t.unpublishedAt),
        o = i > 1 ? b.intl.formatToPlainString(l, { days: i }) : b.intl.string(b.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: s()(g.Z, a),
        children: (0, n.jsx)(O.E, { type: { text: o }, variant: "inverted" }),
    });
};
var L = l(212407),
    h = l(761977);
function I(e) {
    let { category: t, onSelect: l } = e,
        i = (0, r.bG)([p.Ay], () => p.Ay.useReducedMotion),
        S = (0, r.bG)([f.A], () => f.A.isFocused()),
        { catalogBannerStatic: O, catalogBannerAnimated: g, catalogBannerRive: I } = (0, L.MV)(t),
        T = a.useRef(null),
        G = null != I,
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
        className: s()(h.sW, { [h.by]: G, [h.vk]: null != l }),
        ...m,
        children: [
            (0, n.jsx)(o.s, { children: (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: h.Db,
                children: G
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
                              (0, n.jsx)("img", { className: h.ze, src: O, alt: "" }),
                              null != g &&
                                  !i &&
                                  S &&
                                  (0, n.jsx)(C.A, { src: g, className: h.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(_, { category: t, className: h.v0, daysRemainingText: b.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: h.IG,
                    children: (0, n.jsx)(d.m, {
                        text: b.intl.string(b.t["o1ol+T"]),
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
