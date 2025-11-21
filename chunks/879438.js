n.d(t, { z: () => o });
var r = n(663042),
    i = n(731965),
    l = n(535584),
    a = n(324805),
    s = n(231338);
let o = (0, r.U)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5000,
    logger: null,
    registerAssetLoad: () => {
        var n;
        let r = null != (n = t().logger) ? n : (0, l.T)({ location: a.dr.QUEST_HOME_DESKTOP });
        if (r.info === s.dG || t().elapsed >= 60000) return;
        let o = performance.now() - t().startTime;
        o > 60000 && (o = 60000);
        let c = { elapsed: o };
        o - t().lastOutputLogTime > 1000 &&
            (r.info("QuestHome asset loading duration so far: ".concat(o, "ms")), (c.lastOutputLogTime = o)),
            null == t().logger && (c.logger = r),
            (0, i.j)(() => e(c));
    },
}));
