n.d(t, { Z: () => _ }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(607070),
    c = n(361213),
    d = n(778569),
    u = n(783097),
    p = n(70097),
    m = n(768581),
    h = n(829409),
    f = n(381993);
let g = 16 / 9,
    b = 325 / 72;
function x(e) {
    let { application: t, isHovered: n, botBannerUrl: i, botBannerUrlAnimated: s, iconURL: o } = e,
        m = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
        }),
        h = r.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, c.Z)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: g, imageUrlAnimated: b } = r.useMemo(
            () =>
                "fetched" === m.state && null != m.url
                    ? { imageUrl: m.url }
                    : {
                          imageUrl: i,
                          imageUrlAnimated: s,
                      },
            [m.state, m.url, i, s],
        ),
        x = null != g,
        _ = null != h;
    return "loading" === m.state
        ? null
        : _
          ? (0, a.jsxs)(a.Fragment, {
                children: [
                    x
                        ? (0, a.jsx)(v, {
                              isHovered: n,
                              url: g,
                              animatedUrl: void 0,
                          })
                        : (0, a.jsx)(p.Z, {
                              src: h,
                              className: l()(f.bannerImage, f.bannerContent),
                              muted: !0,
                          }),
                    (0, a.jsx)(C, {
                        isHovered: n,
                        url: h,
                        isVideo: !0,
                    }),
                ],
            })
          : x
            ? (0, a.jsx)(v, {
                  isHovered: n,
                  url: g,
                  animatedUrl: b,
              })
            : (0, a.jsx)(j, { iconURL: o });
}
function v(e) {
    let { isHovered: t, url: n, animatedUrl: i } = e,
        [s, o] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("img", {
                src: n,
                alt: "",
                className: l()(f.bannerImage, f.bannerContent, { [f.loaded]: s }),
                onLoad: () => o(!0),
            }),
            null != i
                ? (0, a.jsx)(C, {
                      isHovered: t,
                      url: i,
                      isVideo: !1,
                  })
                : null,
        ],
    });
}
function C(e) {
    let { isHovered: t, url: n, isVideo: i } = e,
        [s, o] = r.useState(!1),
        [c, d] = r.useState(t);
    return (r.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, a.jsx)("div", {
              className: l()(f.bannerAnimatedContainer, {
                  [f.videoFadeOut]: !t,
                  [f.videoFadeIn]: t && s,
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: i
                  ? (0, a.jsx)(p.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: f.bannerContent,
                        onLoadedData: () => o(!0),
                    })
                  : (0, a.jsx)("img", {
                        src: n,
                        alt: "",
                        className: f.bannerContent,
                        onLoad: () => o(!0),
                    }),
          })
        : null;
}
function j(e) {
    let { iconURL: t } = e,
        { backgroundGradient: n, hasFetchedColors: r } = (0, h.u)(t);
    return (0, a.jsx)("div", {
        className: l()(f.bannerContent, f.bannerGradient, { [f.loaded]: r }),
        style: { backgroundImage: n },
    });
}
let _ = function (e) {
    let { application: t, bannerType: n, iconURL: i } = e,
        l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        [c, d] = r.useState(!1),
        p = r.useCallback(() => {
            d(!0);
        }, []),
        h = r.useCallback(() => d(!1), []),
        C = (0, u.ye)(t),
        _ = t.bot,
        { botBannerUrl: y, botBannerUrlAnimated: I } = r.useMemo(
            () =>
                (null == _ ? void 0 : _.id) == null || (null == _ ? void 0 : _.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.aN)({
                              id: _.id,
                              banner: _.banner,
                              canAnimate: !1,
                              size: 600,
                          }),
                          botBannerUrlAnimated: l
                              ? void 0
                              : (0, m.aN)({
                                    id: _.id,
                                    banner: _.banner,
                                    canAnimate: !0,
                                    size: 600,
                                }),
                      },
            [null == _ ? void 0 : _.id, null == _ ? void 0 : _.banner, l],
        );
    return (0, a.jsx)("div", {
        className: f.bannerContainer,
        style: { aspectRatio: "card" === n ? g : b },
        onMouseEnter: p,
        onFocus: p,
        onMouseLeave: h,
        onBlur: h,
        children:
            "card" === n && C
                ? (0, a.jsx)(x, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == y ? void 0 : y,
                      botBannerUrlAnimated: null == I ? void 0 : I,
                  })
                : null != y
                  ? (0, a.jsx)(v, {
                        isHovered: c,
                        url: y,
                        animatedUrl: I,
                    })
                  : (0, a.jsx)(j, { iconURL: i }),
    });
};
