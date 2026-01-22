n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(579473),
    l = n(415441),
    c = n(516226),
    u = n(985018),
    d = n(347564);

function f(e) {
    let {
            quest: t,
            isInteracting: n,
            hideAssets: a,
            imageSize: f,
            containerClassName: p,
            imageClassName: _,
            assetRef: h,
        } = e,
        m = i.useMemo(() => (0, o.tW)(t, o.fY.HERO_IMAGE), [t]),
        g = i.useMemo(() => (0, o.tW)(t, o.fY.HERO_VIDEO), [t]),
        { onAssetLoadComplete: E } = i.useContext(c.M);
    return (0, r.jsx)("div", {
        className: s()(d.l1, p),
        children:
            !a &&
            (0, r.jsx)(l.N, {
                imageAsset:
                    null != m
                        ? {
                              asset: m,
                              assetId: "QuestTileBanner",
                              alt: u.intl.string(u.t.jnijWz),
                              className: s()(d.LO, _),
                          }
                        : void 0,
                videoAsset:
                    null != g
                        ? {
                              asset: g,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: d.G9,
                          }
                        : void 0,
                showVideo: n,
                imageSize: f,
                onLoadComplete: E,
                assetRef: h,
            }),
    });
}
