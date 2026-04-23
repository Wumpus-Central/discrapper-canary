a.d(t, { A: () => b });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(775602),
    c = a(435582),
    d = a(283488),
    u = a(735991),
    h = a(607470),
    m = a(486020),
    p = a(928194),
    _ = a(564096);
let g = 16 / 9,
    x = 325 / 72;
function A(e) {
    let { application: t, isHovered: a, botBannerUrl: i, botBannerUrlAnimated: r, iconURL: o } = e,
        m = (0, d.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        p = l.useMemo(() => {
            let e = (0, u.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, c.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: g, imageUrlAnimated: x } = l.useMemo(
            () => ("fetched" === m.state && null != m.url ? { imageUrl: m.url } : { imageUrl: i, imageUrlAnimated: r }),
            [m.state, m.url, i, r],
        ),
        A = null != g,
        b = null != p;
    return "loading" === m.state
        ? null
        : b
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    A
                        ? (0, n.jsx)(f, { isHovered: a, url: g, animatedUrl: void 0 })
                        : (0, n.jsx)(h.A, { src: p, className: s()(_._e, _.IH), muted: !0 }),
                    (0, n.jsx)(C, { isHovered: a, url: p, isVideo: !0 }),
                ],
            })
          : A
            ? (0, n.jsx)(f, { isHovered: a, url: g, animatedUrl: x })
            : (0, n.jsx)(v, { iconURL: o });
}
function f(e) {
    let { isHovered: t, url: a, animatedUrl: i } = e,
        [r, o] = l.useState(!1);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: a, alt: "", className: s()(_._e, _.IH, { [_.Kc]: r }), onLoad: () => o(!0) }),
            null != i ? (0, n.jsx)(C, { isHovered: t, url: i, isVideo: !1 }) : null,
        ],
    });
}
function C(e) {
    let { isHovered: t, url: a, isVideo: i } = e,
        [r, o] = l.useState(!1),
        [c, d] = l.useState(t);
    return (l.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, n.jsx)("div", {
              className: s()(_.hY, { [_.Q]: !t, [_.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: i
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
        { backgroundGradient: a, hasFetchedColors: l } = (0, p.d)(t);
    return (0, n.jsx)("div", { className: s()(_.IH, _.nY, { [_.Kc]: l }), style: { backgroundImage: a } });
}
let b = function (e) {
    let { application: t, bannerType: a, iconURL: i } = e,
        s = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [c, d] = l.useState(!1),
        h = l.useCallback(() => {
            d(!0);
        }, []),
        p = l.useCallback(() => d(!1), []),
        C = (0, u.Ag)(t),
        b = t.bot,
        { botBannerUrl: j, botBannerUrlAnimated: I } = l.useMemo(
            () =>
                b?.id == null || b?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.z)({ id: b.id, banner: b.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: s
                              ? void 0
                              : (0, m.z)({ id: b.id, banner: b.banner, canAnimate: !0, size: 600 }),
                      },
            [b?.id, b?.banner, s],
        );
    return (0, n.jsx)("div", {
        className: _.cI,
        style: { aspectRatio: "card" === a ? g : x },
        onMouseEnter: h,
        onFocus: h,
        onMouseLeave: p,
        onBlur: p,
        children:
            "card" === a && C
                ? (0, n.jsx)(A, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == j ? void 0 : j,
                      botBannerUrlAnimated: null == I ? void 0 : I,
                  })
                : null != j
                  ? (0, n.jsx)(f, { isHovered: c, url: j, animatedUrl: I })
                  : (0, n.jsx)(v, { iconURL: i }),
    });
};
