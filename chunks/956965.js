n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    o = n(607070),
    c = n(361213),
    d = n(778569),
    u = n(783097),
    m = n(70097),
    h = n(768581),
    p = n(829409),
    g = n(158409);
let _ = 16 / 9,
    x = 325 / 72;
function C(e) {
    let { application: t, isHovered: n, botBannerUrl: r, botBannerUrlAnimated: s, iconURL: o } = e,
        h = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        p = a.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: _, imageUrlAnimated: x } = a.useMemo(
            () =>
                'fetched' === h.state && null != h.url
                    ? { imageUrl: h.url }
                    : {
                          imageUrl: r,
                          imageUrlAnimated: s
                      },
            [h.state, h.url, r, s]
        ),
        C = null != _,
        b = null != p;
    return 'loading' === h.state
        ? null
        : b
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    C
                        ? (0, i.jsx)(v, {
                              isHovered: n,
                              url: _,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(m.Z, {
                              src: p,
                              className: l()(g.bannerImage, g.bannerContent),
                              muted: !0
                          }),
                    (0, i.jsx)(f, {
                        isHovered: n,
                        url: p,
                        isVideo: !0
                    })
                ]
            })
          : C
            ? (0, i.jsx)(v, {
                  isHovered: n,
                  url: _,
                  animatedUrl: x
              })
            : (0, i.jsx)(I, { iconURL: o });
}
function v(e) {
    let { isHovered: t, url: n, animatedUrl: r } = e,
        [s, o] = a.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: l()(g.bannerImage, g.bannerContent, { [g.loaded]: s }),
                onLoad: () => o(!0)
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
        [s, o] = a.useState(!1),
        [c, d] = a.useState(t);
    return (a.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)('div', {
              className: l()(g.bannerAnimatedContainer, {
                  [g.videoFadeOut]: !t,
                  [g.videoFadeIn]: t && s
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: r
                  ? (0, i.jsx)(m.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: g.bannerContent,
                        onLoadedData: () => o(!0)
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: g.bannerContent,
                        onLoad: () => o(!0)
                    })
          })
        : null;
}
function I(e) {
    let { iconURL: t } = e,
        { backgroundGradient: n, hasFetchedColors: a } = (0, p.u)(t);
    return (0, i.jsx)('div', {
        className: l()(g.bannerContent, g.bannerGradient, { [g.loaded]: a }),
        style: { backgroundImage: n }
    });
}
let b = function (e) {
    let { application: t, bannerType: n, iconURL: r } = e,
        l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        [c, d] = a.useState(!1),
        m = a.useCallback(() => {
            d(!0);
        }, []),
        p = a.useCallback(() => d(!1), []),
        f = (0, u.ye)(t),
        b = t.bot,
        { botBannerUrl: j, botBannerUrlAnimated: S } = a.useMemo(
            () =>
                (null == b ? void 0 : b.id) == null || (null == b ? void 0 : b.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, h.aN)({
                              id: b.id,
                              banner: b.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: l
                              ? void 0
                              : (0, h.aN)({
                                    id: b.id,
                                    banner: b.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == b ? void 0 : b.id, null == b ? void 0 : b.banner, l]
        );
    return (0, i.jsx)('div', {
        className: g.bannerContainer,
        style: { aspectRatio: 'card' === n ? _ : x },
        onMouseEnter: m,
        onFocus: m,
        onMouseLeave: p,
        onBlur: p,
        children:
            'card' === n && f
                ? (0, i.jsx)(C, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == j ? void 0 : j,
                      botBannerUrlAnimated: null == S ? void 0 : S
                  })
                : null != j
                  ? (0, i.jsx)(v, {
                        isHovered: c,
                        url: j,
                        animatedUrl: S
                    })
                  : (0, i.jsx)(I, { iconURL: r })
    });
};
