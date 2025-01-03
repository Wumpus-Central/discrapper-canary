t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(442837),
    s = t(607070),
    c = t(361213),
    d = t(778569),
    u = t(783097),
    m = t(70097),
    p = t(768581),
    _ = t(829409),
    g = t(226944);
let v = 16 / 9,
    f = 325 / 72;
function C(e) {
    let { application: n, isHovered: t, botBannerUrl: r, botBannerUrlAnimated: o, iconURL: s } = e,
        p = (0, d.Z)({
            applicationId: n.id,
            size: 600,
            names: ['embedded_cover']
        }),
        _ = i.useMemo(() => {
            let e = (0, u.yJ)(n);
            return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(n.id, e.activity_preview_video_asset_id) : null;
        }, [n]),
        { imageUrl: v, imageUrlAnimated: f } = i.useMemo(
            () =>
                'fetched' === p.state && null != p.url
                    ? { imageUrl: p.url }
                    : {
                          imageUrl: r,
                          imageUrlAnimated: o
                      },
            [p.state, p.url, r, o]
        ),
        C = null != v,
        I = null != _;
    return 'loading' === p.state
        ? null
        : I
          ? (0, a.jsxs)(a.Fragment, {
                children: [
                    C
                        ? (0, a.jsx)(x, {
                              isHovered: t,
                              url: v,
                              animatedUrl: void 0
                          })
                        : (0, a.jsx)(m.Z, {
                              src: _,
                              className: l()(g.bannerImage, g.bannerContent),
                              muted: !0
                          }),
                    (0, a.jsx)(h, {
                        isHovered: t,
                        url: _,
                        isVideo: !0
                    })
                ]
            })
          : C
            ? (0, a.jsx)(x, {
                  isHovered: t,
                  url: v,
                  animatedUrl: f
              })
            : (0, a.jsx)(b, { iconURL: s });
}
function x(e) {
    let { isHovered: n, url: t, animatedUrl: r } = e,
        [o, s] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('img', {
                src: t,
                alt: '',
                className: l()(g.bannerImage, g.bannerContent, { [g.loaded]: o }),
                onLoad: () => s(!0)
            }),
            null != r
                ? (0, a.jsx)(h, {
                      isHovered: n,
                      url: r,
                      isVideo: !1
                  })
                : null
        ]
    });
}
function h(e) {
    let { isHovered: n, url: t, isVideo: r } = e,
        [o, s] = i.useState(!1),
        [c, d] = i.useState(n);
    return (i.useEffect(() => {
        n && d(!0);
    }, [n]),
    c)
        ? (0, a.jsx)('div', {
              className: l()(g.bannerAnimatedContainer, {
                  [g.videoFadeOut]: !n,
                  [g.videoFadeIn]: n && o
              }),
              onAnimationEnd: () => (n ? null : d(!1)),
              children: r
                  ? (0, a.jsx)(m.Z, {
                        src: t,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: g.bannerContent,
                        onLoadedData: () => s(!0)
                    })
                  : (0, a.jsx)('img', {
                        src: t,
                        alt: '',
                        className: g.bannerContent,
                        onLoad: () => s(!0)
                    })
          })
        : null;
}
function b(e) {
    let { iconURL: n } = e,
        { backgroundGradient: t, hasFetchedColors: i } = (0, _.u)(n);
    return (0, a.jsx)('div', {
        className: l()(g.bannerContent, g.bannerGradient, { [g.loaded]: i }),
        style: { backgroundImage: t }
    });
}
n.Z = function (e) {
    let { application: n, bannerType: t, iconURL: r } = e,
        l = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [c, d] = i.useState(!1),
        m = i.useCallback(() => {
            d(!0);
        }, []),
        _ = i.useCallback(() => d(!1), []),
        h = (0, u.ye)(n),
        I = n.bot,
        { botBannerUrl: j, botBannerUrlAnimated: S } = i.useMemo(
            () =>
                (null == I ? void 0 : I.id) == null || (null == I ? void 0 : I.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, p.aN)({
                              id: I.id,
                              banner: I.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: l
                              ? void 0
                              : (0, p.aN)({
                                    id: I.id,
                                    banner: I.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == I ? void 0 : I.id, null == I ? void 0 : I.banner, l]
        );
    return (0, a.jsx)('div', {
        className: g.bannerContainer,
        style: { aspectRatio: 'card' === t ? v : f },
        onMouseEnter: m,
        onFocus: m,
        onMouseLeave: _,
        onBlur: _,
        children:
            'card' === t && h
                ? (0, a.jsx)(C, {
                      application: n,
                      isHovered: c,
                      botBannerUrl: null == j ? void 0 : j,
                      botBannerUrlAnimated: null == S ? void 0 : S
                  })
                : null != j
                  ? (0, a.jsx)(x, {
                        isHovered: c,
                        url: j,
                        animatedUrl: S
                    })
                  : (0, a.jsx)(b, { iconURL: r })
    });
};
