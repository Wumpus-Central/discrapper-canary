t.d(s, { A: () => M, k: () => p });
var a = t(477900),
    n = t(582128),
    i = t(503698),
    o = t.n(i),
    l = t(835517),
    d = t(291749),
    r = t(415441),
    u = t(516226),
    m = t(190107),
    c = t(375708),
    h = t(271182);
function p() {
    let e = m.i$ * Math.min(2, (0, l.A)());
    return { width: e, height: e / m.EM };
}
function M(e) {
    let { quest: s, isInteracting: t, variant: i, hideAssets: l, imageSize: m, assetRef: p } = e,
        M = n.useMemo(() => (0, d.tW)(s, d.fY.HERO_IMAGE), [s]),
        f = n.useMemo(() => (0, d.tW)(s, d.fY.HERO_VIDEO), [s]),
        { onAssetLoadComplete: A } = n.useContext(u.M);
    return (0, a.jsx)("div", {
        className: o()(h.l1, { [h.Zc]: "banner" === i, [h.M4]: "modalPanel" === i }),
        children:
            !l &&
            (0, a.jsx)(r.N, {
                imageAsset:
                    null != M
                        ? {
                              asset: M,
                              assetId: "QuestTileBanner",
                              alt: c.intl.formatToPlainString(c.t["d/+YKd"], {
                                  questName: s.config.messages.questName,
                              }),
                              className: h.LO,
                          }
                        : void 0,
                videoAsset: null != f ? { asset: f, assetId: "QuestTileBanner_heroAnimated", className: h.G9 } : void 0,
                showVideo: t,
                imageSize: m,
                onLoadComplete: A,
                assetRef: p,
            }),
    });
}
