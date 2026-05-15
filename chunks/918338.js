t.d(s, { A: () => c });
var a = t(627968),
    i = t(64700),
    n = t(503698),
    o = t.n(n),
    d = t(859387),
    l = t(415441),
    u = t(516226),
    m = t(375708),
    r = t(989475);
function c(e) {
    let {
            quest: s,
            isInteracting: t,
            hideAssets: n,
            imageSize: c,
            containerClassName: p,
            imageClassName: h,
            assetRef: f,
        } = e,
        v = i.useMemo(() => (0, d.tW)(s, d.fY.HERO_IMAGE), [s]),
        A = i.useMemo(() => (0, d.tW)(s, d.fY.HERO_VIDEO), [s]),
        { onAssetLoadComplete: C } = i.useContext(u.M);
    return (0, a.jsx)("div", {
        className: o()(r.l1, p),
        children:
            !n &&
            (0, a.jsx)(l.N, {
                imageAsset:
                    null != v
                        ? {
                              asset: v,
                              assetId: "QuestTileBanner",
                              alt: m.intl.formatToPlainString(m.t["d/+YKd"], {
                                  questName: s.config.messages.questName,
                              }),
                              className: o()(r.LO, h),
                          }
                        : void 0,
                videoAsset: null != A ? { asset: A, assetId: "QuestTileBanner_heroAnimated", className: r.G9 } : void 0,
                showVideo: t,
                imageSize: c,
                onLoadComplete: C,
                assetRef: f,
            }),
    });
}
