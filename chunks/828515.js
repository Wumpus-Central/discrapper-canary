l.d(n, { A: () => _ });
var s = l(477900),
    t = l(582128),
    r = l(503698),
    i = l.n(r),
    a = l(467324),
    o = l(702841),
    u = l(653887),
    c = l(297264),
    d = l(866665),
    p = l(881636),
    h = l(661531),
    m = l(775602),
    A = l(607470),
    b = l(531685),
    x = l(993408),
    g = l(812993),
    N = l(375708),
    j = l(543136);
let f = function (e) {
    let { category: n, daysRemainingText: l = N.t.Io7ozn, className: t } = e;
    if (!(0, x.HF)(n.unpublishedAt)) return null;
    let r = (0, x.WU)(n.unpublishedAt),
        a = r > 1 ? N.intl.formatToPlainString(l, { days: r }) : N.intl.string(N.t.Bc13HF);
    return (0, s.jsx)(g.Lp, { disableColor: !0, text: a, className: i()(j.q, t) });
};
var v = l(212407),
    y = l(761977);
function _(e) {
    let { category: n, onSelect: l } = e,
        r = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        x = (0, o.bG)([b.A], () => b.A.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: j, catalogBannerRive: _ } = (0, v.MV)(n),
        R = t.useRef(null),
        T = null != _,
        C =
            null != l
                ? {
                      role: "button",
                      tabIndex: 0,
                      "aria-label": n.name,
                      onClick: l,
                      onKeyDown: function (e) {
                          null != l && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), l());
                      },
                  }
                : {};
    return (0, s.jsxs)("div", {
        ref: R,
        className: i()(y.sW, { [y.by]: T, [y.vk]: null != l }),
        ...C,
        children: [
            (0, s.jsx)(a.s, { children: (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: n.name }) }),
            (0, s.jsx)("div", {
                className: y.Db,
                children: T
                    ? (0, s.jsx)(u._, {
                          src: _,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: R,
                          autoplay: !0,
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("img", { className: y.ze, src: g, alt: "" }),
                              null != j &&
                                  !r &&
                                  x &&
                                  (0, s.jsx)(A.A, { src: j, className: y.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, s.jsx)(f, { category: n, className: y.v0, daysRemainingText: N.t["8gsP5M"] }),
            null != l &&
                (0, s.jsx)("div", {
                    className: y.IG,
                    children: (0, s.jsx)(d.m, {
                        text: N.intl.string(N.t["o1ol+T"]),
                        children: (0, s.jsx)(p.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: h.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, x.$b)(90);
