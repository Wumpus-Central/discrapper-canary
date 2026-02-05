a.d(t, { A: () => f });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(311907),
    o = a(775602),
    c = a(435582),
    d = a(283488),
    u = a(735991),
    h = a(607470),
    m = a(486020),
    p = a(928194),
    _ = a(590354);
let g = 16 / 9,
    x = 325 / 72;
function A(e) {
    let { application: t, isHovered: a, botBannerUrl: s, botBannerUrlAnimated: r, iconURL: o } = e,
        m = (0, d.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        p = i.useMemo(() => {
            let e = (0, u.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, c.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: g, imageUrlAnimated: x } = i.useMemo(
            () => ("fetched" === m.state && null != m.url ? { imageUrl: m.url } : { imageUrl: s, imageUrlAnimated: r }),
            [m.state, m.url, s, r],
        ),
        A = null != g,
        f = null != p;
    return "loading" === m.state
        ? null
        : f
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    A
                        ? (0, n.jsx)(C, { isHovered: a, url: g, animatedUrl: void 0 })
                        : (0, n.jsx)(h.A, { src: p, className: l()(_._e, _.IH), muted: !0 }),
                    (0, n.jsx)(b, { isHovered: a, url: p, isVideo: !0 }),
                ],
            })
          : A
            ? (0, n.jsx)(C, { isHovered: a, url: g, animatedUrl: x })
            : (0, n.jsx)(v, { iconURL: o });
}
function C(e) {
    let { isHovered: t, url: a, animatedUrl: s } = e,
        [r, o] = i.useState(!1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: a, alt: "", className: l()(_._e, _.IH, { [_.Kc]: r }), onLoad: () => o(!0) }),
            null != s ? (0, n.jsx)(b, { isHovered: t, url: s, isVideo: !1 }) : null,
        ],
    });
}
function b(e) {
    let { isHovered: t, url: a, isVideo: s } = e,
        [r, o] = i.useState(!1),
        [c, d] = i.useState(t);
    return (i.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, n.jsx)("div", {
              className: l()(_.hY, { [_.Q]: !t, [_.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: s
                  ? (0, n.jsx)(h.A, {
                        src: a,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: _.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, n.jsx)("img", { src: a, alt: "", className: _.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function v(e) {
    let { iconURL: t } = e,
        { backgroundGradient: a, hasFetchedColors: i } = (0, p.d)(t);
    return (0, n.jsx)("div", { className: l()(_.IH, _.nY, { [_.Kc]: i }), style: { backgroundImage: a } });
}
let f = function (e) {
    let { application: t, bannerType: a, iconURL: s } = e,
        l = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [c, d] = i.useState(!1),
        h = i.useCallback(() => {
            d(!0);
        }, []),
        p = i.useCallback(() => d(!1), []),
        b = (0, u.Ag)(t),
        f = t.bot,
        { botBannerUrl: j, botBannerUrlAnimated: I } = i.useMemo(
            () =>
                f?.id == null || f?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.z)({ id: f.id, banner: f.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: l
                              ? void 0
                              : (0, m.z)({ id: f.id, banner: f.banner, canAnimate: !0, size: 600 }),
                      },
            [f?.id, f?.banner, l],
        );
    return (0, n.jsx)("div", {
        className: _.cI,
        style: { aspectRatio: "card" === a ? g : x },
        onMouseEnter: h,
        onFocus: h,
        onMouseLeave: p,
        onBlur: p,
        children:
            "card" === a && b
                ? (0, n.jsx)(A, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == j ? void 0 : j,
                      botBannerUrlAnimated: null == I ? void 0 : I,
                  })
                : null != j
                  ? (0, n.jsx)(C, { isHovered: c, url: j, animatedUrl: I })
                  : (0, n.jsx)(v, { iconURL: s }),
    });
};
