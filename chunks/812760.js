n.d(t, { A: () => b });
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
    h = n(775602),
    E = n(607470),
    f = n(531685),
    x = n(993408),
    C = n(805251),
    p = n(792996),
    S = n(543136);
let A = function (e) {
    let { category: t, daysRemainingText: n = p.t.Io7ozn, className: s } = e;
    if (!(0, x.HF)(t.unpublishedAt)) return null;
    let a = (0, x.WU)(t.unpublishedAt),
        r = a > 1 ? p.intl.formatToPlainString(n, { days: a }) : p.intl.string(p.t.Bc13HF);
    return (0, l.jsx)("div", {
        className: i()(S.Z, s),
        children: (0, l.jsx)(C.E, { type: { text: r }, variant: "inverted" }),
    });
};
var I = n(212407),
    _ = n(761977);
function b(e) {
    let { category: t, onSelect: n } = e,
        a = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        x = (0, o.bG)([f.A], () => f.A.isFocused()),
        { catalogBannerStatic: C, catalogBannerAnimated: S, catalogBannerRive: b } = (0, I.MV)(t),
        v = s.useRef(null),
        L = null != b,
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
        ref: v,
        className: i()(_.sW, { [_.by]: L, [_.vk]: null != n }),
        ...j,
        children: [
            (0, l.jsx)(r.s, { children: (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, l.jsx)("div", {
                className: _.Db,
                children: L
                    ? (0, l.jsx)(u._, {
                          src: b,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: v,
                          autoplay: !0,
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: _.ze, src: C, alt: "" }),
                              null != S &&
                                  !a &&
                                  x &&
                                  (0, l.jsx)(E.A, { src: S, className: _.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, l.jsx)(A, { category: t, className: _.v0, daysRemainingText: p.t["8gsP5M"] }),
            null != n &&
                (0, l.jsx)("div", {
                    className: _.IG,
                    children: (0, l.jsx)(d.m, {
                        text: p.intl.string(p.t["o1ol+T"]),
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
