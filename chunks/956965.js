n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(442837),
    s = n(607070),
    c = n(361213),
    d = n(778569),
    u = n(783097),
    m = n(70097),
    p = n(768581),
    h = n(829409),
    g = n(226944);
let C = 16 / 9,
    x = 325 / 72;
function v(e) {
    let { application: t, isHovered: n, botBannerUrl: r, botBannerUrlAnimated: o, iconURL: s } = e,
        p = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        h = a.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: C, imageUrlAnimated: x } = a.useMemo(
            () =>
                'fetched' === p.state && null != p.url
                    ? { imageUrl: p.url }
                    : {
                          imageUrl: r,
                          imageUrlAnimated: o
                      },
            [p.state, p.url, r, o]
        ),
        v = null != C,
        I = null != h;
    return 'loading' === p.state
        ? null
        : I
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    v
                        ? (0, i.jsx)(_, {
                              isHovered: n,
                              url: C,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(m.Z, {
                              src: h,
                              className: l()(g.bannerImage, g.bannerContent),
                              muted: !0
                          }),
                    (0, i.jsx)(f, {
                        isHovered: n,
                        url: h,
                        isVideo: !0
                    })
                ]
            })
          : v
            ? (0, i.jsx)(_, {
                  isHovered: n,
                  url: C,
                  animatedUrl: x
              })
            : (0, i.jsx)(b, { iconURL: s });
}
function _(e) {
    let { isHovered: t, url: n, animatedUrl: r } = e,
        [o, s] = a.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: l()(g.bannerImage, g.bannerContent, { [g.loaded]: o }),
                onLoad: () => s(!0)
            }),
            null != r
                ? (0, i.jsx)(f, {
                      isHovered: t,
                      url: r,
                      isVideo: !1
                  })
                : null
        ]
    });
}
function f(e) {
    let { isHovered: t, url: n, isVideo: r } = e,
        [o, s] = a.useState(!1),
        [c, d] = a.useState(t);
    return (a.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)('div', {
              className: l()(g.bannerAnimatedContainer, {
                  [g.videoFadeOut]: !t,
                  [g.videoFadeIn]: t && o
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: r
                  ? (0, i.jsx)(m.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: g.bannerContent,
                        onLoadedData: () => s(!0)
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: g.bannerContent,
                        onLoad: () => s(!0)
                    })
          })
        : null;
}
function b(e) {
    let { iconURL: t } = e,
        { backgroundGradient: n, hasFetchedColors: a } = (0, h.u)(t);
    return (0, i.jsx)('div', {
        className: l()(g.bannerContent, g.bannerGradient, { [g.loaded]: a }),
        style: { backgroundImage: n }
    });
}
t.Z = function (e) {
    let { application: t, bannerType: n, iconURL: r } = e,
        l = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [c, d] = a.useState(!1),
        m = a.useCallback(() => {
            d(!0);
        }, []),
        h = a.useCallback(() => d(!1), []),
        f = (0, u.ye)(t),
        I = t.bot,
        { botBannerUrl: S, botBannerUrlAnimated: j } = a.useMemo(
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
    return (0, i.jsx)('div', {
        className: g.bannerContainer,
        style: { aspectRatio: 'card' === n ? C : x },
        onMouseEnter: m,
        onFocus: m,
        onMouseLeave: h,
        onBlur: h,
        children:
            'card' === n && f
                ? (0, i.jsx)(v, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == S ? void 0 : S,
                      botBannerUrlAnimated: null == j ? void 0 : j
                  })
                : null != S
                  ? (0, i.jsx)(_, {
                        isHovered: c,
                        url: S,
                        animatedUrl: j
                    })
                  : (0, i.jsx)(b, { iconURL: r })
    });
};
