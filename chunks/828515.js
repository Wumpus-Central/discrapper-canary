n.d(t, { A: () => O });
var l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(126031),
    o = n(702841),
    u = n(653887),
    c = n(990078),
    d = n(297264),
    g = n(408278),
    E = n(881636),
    _ = n(775602),
    m = n(607470),
    S = n(531685),
    A = n(993408),
    p = n(812993),
    L = n(375708),
    y = n(616459);
let C = function (e) {
    let { category: t, daysRemainingText: n = L.t.Io7ozn, className: s } = e;
    if (!(0, A.HF)(t.unpublishedAt)) return null;
    let r = (0, A.WU)(t.unpublishedAt),
        i = r > 1 ? L.intl.formatToPlainString(n, { days: r }) : L.intl.string(L.t.Bc13HF);
    return (0, l.jsx)(p.Lp, { disableColor: !0, text: i, className: a()(y.q, s) });
};
var h = n(212407),
    I = n(215688);
function O(e) {
    let { category: t, onSelect: n } = e,
        r = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        A = (0, o.bG)([S.A], () => S.A.isFocused()),
        { catalogBannerStatic: p, catalogBannerAnimated: y, catalogBannerRive: O } = (0, h.MV)(t),
        k = s.useRef(null),
        x = null != O,
        v =
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
    return (0, l.jsxs)("div", {
        ref: k,
        className: a()(I.sW, { [I.by]: x, [I.vk]: null != n }),
        ...v,
        children: [
            (0, l.jsx)(i.s, { children: (0, l.jsx)(d.D, { variant: "heading-lg/semibold", children: t.name }) }),
            (0, l.jsx)("div", {
                className: I.Db,
                children: x
                    ? (0, l.jsx)(u._, {
                          src: O,
                          fit: "cover",
                          alignment: "center-left",
                          style: { width: "100%", height: "100%" },
                          eventTargetRef: k,
                          autoplay: !0,
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("img", { className: I.ze, src: p, alt: "" }),
                              null != y &&
                                  !r &&
                                  A &&
                                  (0, l.jsx)(m.A, { src: y, className: I.tr, autoPlay: !0, loop: !0 }),
                          ],
                      }),
            }),
            (0, l.jsx)(C, { category: t, className: I.v0, daysRemainingText: L.t["8gsP5M"] }),
            null != n &&
                (0, l.jsx)("div", {
                    className: I.IG,
                    children: (0, l.jsx)(c.m, {
                        text: L.intl.string(L.t["o1ol+T"]),
                        children: (0, l.jsx)(g.K, {
                            "aria-label": L.intl.string(L.t["o1ol+T"]),
                            onClick: (e) => {
                                e.stopPropagation(), n();
                            },
                            icon: E.u,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                }),
        ],
    });
}
(0, A.$b)(90);
