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
    S = n(531685),
    L = n(993408),
    m = n(812993),
    p = n(375708),
    C = n(247875);
let h = function (e) {
    let { category: t, daysRemainingText: n = p.t.Io7ozn, className: l } = e;
    if (!(0, L.HF)(t.unpublishedAt)) return null;
    let r = (0, L.WU)(t.unpublishedAt),
        i = r > 1 ? p.intl.formatToPlainString(n, { days: r }) : p.intl.string(p.t.Bc13HF);
    return (0, s.jsx)(m.Lp, { disableColor: !0, text: i, className: a()(C.q, l) });
};
var y = n(212407),
    O = n(346448);
function I(e) {
    let { category: t, onSelect: n } = e,
        r = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        L = (0, o.bG)([S.A], () => S.A.isFocused()),
        { catalogBannerStatic: m, catalogBannerAnimated: C, catalogBannerRive: I } = (0, y.MV)(t),
        k = l.useRef(null),
        x = null != I,
        f =
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
        ref: k,
        className: a()(O.sW, { [O.by]: x, [O.vk]: null != n }),
        ...f,
        children: [
            (0, s.jsx)(i.s, { children: (0, s.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, s.jsx)("div", {
                className: O.Db,
                children: x
                    ? (0, s.jsx)(u._, {
                          src: I,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: k,
                          autoplay: !0,
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)("img", { className: O.ze, src: m, alt: "" }),
                              null != C &&
                                  !r &&
                                  L &&
                                  (0, s.jsx)(A.A, { src: C, className: O.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, s.jsx)(h, { category: t, className: O.v0, daysRemainingText: p.t["8gsP5M"] }),
            null != n &&
                (0, s.jsx)("div", {
                    className: O.IG,
                    children: (0, s.jsx)(d.m, {
                        text: p.intl.string(p.t["o1ol+T"]),
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
(0, L.$b)(90);
