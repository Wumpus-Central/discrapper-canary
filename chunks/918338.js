n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(579473),
    o = n(415441),
    d = n(516226),
    c = n(985018),
    u = n(347564);
function m(e) {
    let {
            quest: t,
            isInteracting: n,
            hideAssets: a,
            imageSize: m,
            containerClassName: _,
            imageClassName: h,
            assetRef: p,
        } = e,
        g = l.useMemo(() => (0, s.tW)(t, s.fY.HERO_IMAGE), [t]),
        A = l.useMemo(() => (0, s.tW)(t, s.fY.HERO_VIDEO), [t]),
        { onAssetLoadComplete: f } = l.useContext(d.M);
    return (0, i.jsx)("div", {
        className: r()(u.l1, _),
        children:
            !a &&
            (0, i.jsx)(o.N, {
                imageAsset:
                    null != g
                        ? {
                              asset: g,
                              assetId: "QuestTileBanner",
                              alt: c.intl.string(c.t.jnijWz),
                              className: r()(u.LO, h),
                          }
                        : void 0,
                videoAsset: null != A ? { asset: A, assetId: "QuestTileBanner_heroAnimated", className: u.G9 } : void 0,
                showVideo: n,
                imageSize: m,
                onLoadComplete: f,
                assetRef: p,
            }),
    });
}
