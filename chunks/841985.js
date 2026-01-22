n.d(t, { A: () => _ }), n(896048);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(311907),
    c = n(775602),
    o = n(435582),
    d = n(283488),
    u = n(735991),
    p = n(607470),
    h = n(486020),
    m = n(928194),
    b = n(590354);
let f = 16 / 9,
    g = 325 / 72;
function x(e) {
    let { application: t, isHovered: n, botBannerUrl: r, botBannerUrlAnimated: s, iconURL: c } = e,
        h = (0, d.A)({
            applicationId: t.id,
            size: 600,
            names: ["embedded_cover"],
        }),
        m = a.useMemo(() => {
            let e = (0, u.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, o.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: f, imageUrlAnimated: g } = a.useMemo(
            () =>
                "fetched" === h.state && null != h.url
                    ? { imageUrl: h.url }
                    : {
                          imageUrl: r,
                          imageUrlAnimated: s,
                      },
            [h.state, h.url, r, s],
        ),
        x = null != f,
        _ = null != m;
    return "loading" === h.state
        ? null
        : _
          ? (0, l.jsxs)(l.Fragment, {
                children: [
                    x
                        ? (0, l.jsx)(v, {
                              isHovered: n,
                              url: f,
                              animatedUrl: void 0,
                          })
                        : (0, l.jsx)(p.A, {
                              src: m,
                              className: i()(b._e, b.IH),
                              muted: !0,
                          }),
                    (0, l.jsx)(j, {
                        isHovered: n,
                        url: m,
                        isVideo: !0,
                    }),
                ],
            })
          : x
            ? (0, l.jsx)(v, {
                  isHovered: n,
                  url: f,
                  animatedUrl: g,
              })
            : (0, l.jsx)(A, { iconURL: c });
}
function v(e) {
    let { isHovered: t, url: n, animatedUrl: r } = e,
        [s, c] = a.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", {
                src: n,
                alt: "",
                className: i()(b._e, b.IH, { [b.Kc]: s }),
                onLoad: () => c(!0),
            }),
            null != r
                ? (0, l.jsx)(j, {
                      isHovered: t,
                      url: r,
                      isVideo: !1,
                  })
                : null,
        ],
    });
}
function j(e) {
    let { isHovered: t, url: n, isVideo: r } = e,
        [s, c] = a.useState(!1),
        [o, d] = a.useState(t);
    return (a.useEffect(() => {
        t && d(!0);
    }, [t]),
    o)
        ? (0, l.jsx)("div", {
              className: i()(b.hY, {
                  [b.Q]: !t,
                  [b.nR]: t && s,
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: r
                  ? (0, l.jsx)(p.A, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: b.IH,
                        onLoadedData: () => c(!0),
                    })
                  : (0, l.jsx)("img", {
                        src: n,
                        alt: "",
                        className: b.IH,
                        onLoad: () => c(!0),
                    }),
          })
        : null;
}
function A(e) {
    let { iconURL: t } = e,
        { backgroundGradient: n, hasFetchedColors: a } = (0, m.d)(t);
    return (0, l.jsx)("div", {
        className: i()(b.IH, b.nY, { [b.Kc]: a }),
        style: { backgroundImage: n },
    });
}
let _ = function (e) {
    let { application: t, bannerType: n, iconURL: r } = e,
        i = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        [o, d] = a.useState(!1),
        p = a.useCallback(() => {
            d(!0);
        }, []),
        m = a.useCallback(() => d(!1), []),
        j = (0, u.Ag)(t),
        _ = t.bot,
        { botBannerUrl: y, botBannerUrlAnimated: O } = a.useMemo(
            () =>
                (null == _ ? void 0 : _.id) == null || (null == _ ? void 0 : _.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, h.z)({
                              id: _.id,
                              banner: _.banner,
                              canAnimate: !1,
                              size: 600,
                          }),
                          botBannerUrlAnimated: i
                              ? void 0
                              : (0, h.z)({
                                    id: _.id,
                                    banner: _.banner,
                                    canAnimate: !0,
                                    size: 600,
                                }),
                      },
            [null == _ ? void 0 : _.id, null == _ ? void 0 : _.banner, i],
        );
    return (0, l.jsx)("div", {
        className: b.cI,
        style: { aspectRatio: "card" === n ? f : g },
        onMouseEnter: p,
        onFocus: p,
        onMouseLeave: m,
        onBlur: m,
        children:
            "card" === n && j
                ? (0, l.jsx)(x, {
                      application: t,
                      isHovered: o,
                      botBannerUrl: null == y ? void 0 : y,
                      botBannerUrlAnimated: null == O ? void 0 : O,
                  })
                : null != y
                  ? (0, l.jsx)(v, {
                        isHovered: o,
                        url: y,
                        animatedUrl: O,
                    })
                  : (0, l.jsx)(A, { iconURL: r }),
    });
};
