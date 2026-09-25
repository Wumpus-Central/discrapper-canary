n.d(t, { A: () => E });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(467324),
    o = n(702841),
    u = n(653887),
    c = n(297264),
    d = n(866665),
    p = n(881636),
    m = n(661531),
    h = n(775602),
    g = n(607470),
    A = n(531685),
    _ = n(993408),
    f = n(812993),
    x = n(375708),
    b = n(543136);
let N = function (e) {
    let { category: t, daysRemainingText: n = x.t.Io7ozn, className: r } = e;
    if (!(0, _.HF)(t.unpublishedAt)) return null;
    let i = (0, _.WU)(t.unpublishedAt),
        a = i > 1 ? x.intl.formatToPlainString(n, { days: i }) : x.intl.string(x.t.Bc13HF);
    return (0, l.jsx)(f.Lp, { disableColor: !0, text: a, className: s()(b.q, r) });
};
var v = n(212407),
    y = n(761977);
function E(e) {
    let { category: t, onSelect: n } = e,
        i = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        _ = (0, o.bG)([A.A], () => A.A.isFocused()),
        { catalogBannerStatic: f, catalogBannerAnimated: b, catalogBannerRive: E } = (0, v.MV)(t),
        j = r.useRef(null),
        C = null != E,
        I =
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
        ref: j,
        className: s()(y.sW, { [y.by]: C, [y.vk]: null != n }),
        ...I,
        children: [
            (0, l.jsx)(a.s, { children: (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, l.jsx)("div", {
                className: y.Db,
                children: C
                    ? (0, l.jsx)(u._, {
                          src: E,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: j,
                          autoplay: !0,
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: y.ze, src: f, alt: "" }),
                              null != b &&
                                  !i &&
                                  _ &&
                                  (0, l.jsx)(g.A, { src: b, className: y.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, l.jsx)(N, { category: t, className: y.v0, daysRemainingText: x.t["8gsP5M"] }),
            null != n &&
                (0, l.jsx)("div", {
                    className: y.IG,
                    children: (0, l.jsx)(d.m, {
                        text: x.intl.string(x.t["o1ol+T"]),
                        children: (0, l.jsx)(p.u, {
                            "aria-hidden": "true",
                            size: "sm",
                            color: m.A.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                        }),
                    }),
                }),
        ],
    });
}
(0, _.$b)(90);
