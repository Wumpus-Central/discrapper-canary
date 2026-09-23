t.d(n, { A: () => E });
var l = t(477900),
    r = t(582128),
    i = t(503698),
    s = t.n(i),
    a = t(467324),
    o = t(702841),
    u = t(653887),
    c = t(297264),
    d = t(866665),
    p = t(881636),
    m = t(661531),
    h = t(775602),
    g = t(607470),
    A = t(531685),
    _ = t(993408),
    f = t(812993),
    x = t(375708),
    b = t(543136);
let N = function (e) {
    let { category: n, daysRemainingText: t = x.t.Io7ozn, className: r } = e;
    if (!(0, _.HF)(n.unpublishedAt)) return null;
    let i = (0, _.WU)(n.unpublishedAt),
        a = i > 1 ? x.intl.formatToPlainString(t, { days: i }) : x.intl.string(x.t.Bc13HF);
    return (0, l.jsx)(f.Lp, { disableColor: !0, text: a, className: s()(b.q, r) });
};
var v = t(212407),
    y = t(761977);
function E(e) {
    let { category: n, onSelect: t } = e,
        i = (0, o.bG)([h.Ay], () => h.Ay.useReducedMotion),
        _ = (0, o.bG)([A.A], () => A.A.isFocused()),
        { catalogBannerStatic: f, catalogBannerAnimated: b, catalogBannerRive: E } = (0, v.MV)(n),
        j = r.useRef(null),
        C = null != E,
        I =
            null != t
                ? {
                      role: "button",
                      tabIndex: 0,
                      "aria-label": n.name,
                      onClick: t,
                      onKeyDown: function (e) {
                          null != t && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), t());
                      },
                  }
                : {};
    return (0, l.jsxs)("div", {
        ref: j,
        className: s()(y.sW, { [y.by]: C, [y.vk]: null != t }),
        ...I,
        children: [
            (0, l.jsx)(a.s, { children: (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: n.name }) }),
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
            (0, l.jsx)(N, { category: n, className: y.v0, daysRemainingText: x.t["8gsP5M"] }),
            null != t &&
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
