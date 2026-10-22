l.d(t, { A: () => f });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(467324),
    o = l(702841),
    c = l(297264),
    u = l(653887),
    E = l(866665),
    d = l(881636),
    p = l(661531),
    A = l(775602),
    _ = l(607470),
    C = l(531685),
    O = l(993408),
    S = l(62010),
    L = l(105292),
    g = l(543136);
let G = function (e) {
    let { category: t, daysRemainingText: l = L.t.Io7ozn, className: a } = e;
    if (!(0, O.HF)(t.unpublishedAt)) return null;
    let i = (0, O.WU)(t.unpublishedAt),
        s = i > 1 ? L.intl.formatToPlainString(l, { days: i }) : L.intl.string(L.t.Bc13HF);
    return (0, n.jsx)("div", {
        className: r()(g.Z, a),
        children: (0, n.jsx)(S.E, { type: { text: s }, variant: "inverted" }),
    });
};
var T = l(212407),
    I = l(761977);
function f(e) {
    let { category: t, onSelect: l } = e,
        i = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        O = (0, o.bG)([C.A], () => C.A.isFocused()),
        { catalogBannerStatic: S, catalogBannerAnimated: g, catalogBannerRive: f } = (0, T.MV)(t),
        b = a.useRef(null),
        h = null != f,
        R =
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
        ref: b,
        className: r()(I.sW, { [I.by]: h, [I.vk]: null != l }),
        ...R,
        children: [
            (0, n.jsx)(s.s, { children: (0, n.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, n.jsx)("div", {
                className: I.Db,
                children: h
                    ? (0, n.jsx)(u._, {
                          src: f,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: b,
                          autoplay: !0,
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("img", { className: I.ze, src: S, alt: "" }),
                              null != g &&
                                  !i &&
                                  O &&
                                  (0, n.jsx)(_.A, { src: g, className: I.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, n.jsx)(G, { category: t, className: I.v0, daysRemainingText: L.t["8gsP5M"] }),
            null != l &&
                (0, n.jsx)("div", {
                    className: I.IG,
                    children: (0, n.jsx)(E.m, {
                        text: L.intl.string(L.t["o1ol+T"]),
                        children: (0, n.jsx)(d.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: p.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, O.$b)(90);
