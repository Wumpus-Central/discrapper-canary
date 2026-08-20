n.d(t, { A: () => I });
var s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    i = n(64659),
    o = n(702841),
    u = n(653887),
    c = n(297264),
    d = n(866665),
    E = n(881636),
    g = n(661531),
    _ = n(775602),
    A = n(607470),
    p = n(531685),
    S = n(993408),
    L = n(812993),
    m = n(375708),
    C = n(543136);
let h = function (e) {
    let { category: t, daysRemainingText: n = m.t.Io7ozn, className: l } = e;
    if (!(0, S.HF)(t.unpublishedAt)) return null;
    let r = (0, S.WU)(t.unpublishedAt),
        i = r > 1 ? m.intl.formatToPlainString(n, { days: r }) : m.intl.string(m.t.Bc13HF);
    return (0, s.jsx)(L.Lp, { disableColor: !0, text: i, className: a()(C.q, l) });
};
var O = n(212407),
    y = n(761977);
function I(e) {
    let { category: t, onSelect: n } = e,
        r = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        S = (0, o.bG)([p.A], () => p.A.isFocused()),
        { catalogBannerStatic: L, catalogBannerAnimated: C, catalogBannerRive: I } = (0, O.MV)(t),
        x = l.useRef(null),
        f = null != I,
        k =
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
    return (0, s.jsxs)("div", {
        ref: x,
        className: a()(y.sW, { [y.by]: f, [y.vk]: null != n }),
        ...k,
        children: [
            (0, s.jsx)(i.s, { children: (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, s.jsx)("div", {
                className: y.Db,
                children: f
                    ? (0, s.jsx)(u._, {
                          src: I,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: x,
                          autoplay: !0,
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("img", { className: y.ze, src: L, alt: "" }),
                              null != C &&
                                  !r &&
                                  S &&
                                  (0, s.jsx)(A.A, { src: C, className: y.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, s.jsx)(h, { category: t, className: y.v0, daysRemainingText: m.t["8gsP5M"] }),
            null != n &&
                (0, s.jsx)("div", {
                    className: y.IG,
                    children: (0, s.jsx)(d.m, {
                        text: m.intl.string(m.t["o1ol+T"]),
                        children: (0, s.jsx)(E.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: g.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, S.$b)(90);
