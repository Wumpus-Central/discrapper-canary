n.d(t, { A: () => I });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(126031),
    o = n(702841),
    u = n(653887),
    c = n(990078),
    d = n(297264),
    g = n(881636),
    E = n(661531),
    _ = n(775602),
    A = n(607470),
    S = n(531685),
    m = n(993408),
    L = n(812993),
    p = n(375708),
    C = n(616459);
let h = function (e) {
    let { category: t, daysRemainingText: n = p.t.Io7ozn, className: l } = e;
    if (!(0, m.HF)(t.unpublishedAt)) return null;
    let r = (0, m.WU)(t.unpublishedAt),
        i = r > 1 ? p.intl.formatToPlainString(n, { days: r }) : p.intl.string(p.t.Bc13HF);
    return (0, s.jsx)(L.Lp, { disableColor: !0, text: i, className: a()(C.q, l) });
};
var y = n(212407),
    O = n(215688);
function I(e) {
    let { category: t, onSelect: n } = e,
        r = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        m = (0, o.bG)([S.A], () => S.A.isFocused()),
        { catalogBannerStatic: L, catalogBannerAnimated: C, catalogBannerRive: I } = (0, y.MV)(t),
        k = l.useRef(null),
        x = null != I,
        f =
            null != n
                ? {
                      role: "button",
                      tabIndex: 0,
                      "aria-label": t.name,
                      onClick: n,
                      onKeyDown: (e) => {
                          null != n && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), n());
                      },
                  }
                : {};
    return (0, s.jsxs)("div", {
        ref: k,
        className: a()(O.sW, { [O.by]: x, [O.vk]: null != n }),
        ...f,
        children: [
            (0, s.jsx)(i.s, { children: (0, s.jsx)(d.D, { variant: "heading-lg/semibold", children: t.name }) }),
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
                              (0, s.jsx)("img", { className: O.ze, src: L, alt: "" }),
                              null != C &&
                                  !r &&
                                  m &&
                                  (0, s.jsx)(A.A, { src: C, className: O.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, s.jsx)(h, { category: t, className: O.v0, daysRemainingText: p.t["8gsP5M"] }),
            null != n &&
                (0, s.jsx)("div", {
                    className: O.IG,
                    children: (0, s.jsx)(c.m, {
                        text: p.intl.string(p.t["o1ol+T"]),
                        children: (0, s.jsx)(g.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: E.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, m.$b)(90);
