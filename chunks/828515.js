n.d(t, { A: () => I });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(77692),
    c = n(702841),
    o = n(534514),
    d = n(653887),
    u = n(866665),
    m = n(881636),
    g = n(661531),
    E = n(775602),
    h = n(607470),
    f = n(531685),
    x = n(993408),
    C = n(62010),
    p = n(105292),
    S = n(543136);
let A = function (e) {
    let { category: t, daysRemainingText: n = p.t.Io7ozn, className: a } = e;
    if (!(0, x.HF)(t.unpublishedAt)) return null;
    let s = (0, x.WU)(t.unpublishedAt),
        r = s > 1 ? p.intl.formatToPlainString(n, { days: s }) : p.intl.string(p.t.Bc13HF);
    return (0, l.jsx)("div", {
        className: i()(S.Z, a),
        children: (0, l.jsx)(C.E, { type: { text: r }, variant: "inverted" }),
    });
};
var _ = n(212407),
    v = n(761977);
function I(e) {
    let { category: t, onSelect: n } = e,
        s = (0, c.bG)([E.Ay], () => E.Ay.useReducedMotion),
        x = (0, c.bG)([f.A], () => f.A.isFocused()),
        { catalogBannerStatic: C, catalogBannerAnimated: S, catalogBannerRive: I } = (0, _.MV)(t),
        b = a.useRef(null),
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
            (0, l.jsx)(r.s, { children: (0, l.jsx)(o.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, l.jsx)("div", {
                className: v.Db,
                children: L
                    ? (0, l.jsx)(d._, {
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
                              null != S &&
                                  !s &&
                                  x &&
                                  (0, l.jsx)(h.A, { src: S, className: v.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, l.jsx)(A, { category: t, className: v.v0, daysRemainingText: p.t["8gsP5M"] }),
            null != n &&
                (0, l.jsx)("div", {
                    className: v.IG,
                    children: (0, l.jsx)(u.m, {
                        text: p.intl.string(p.t["o1ol+T"]),
                        children: (0, l.jsx)(m.u, {
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
