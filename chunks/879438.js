n.d(t, { z: () => s });
var r = n(381814),
    i = n(731965),
    l = n(5881),
    a = n(46140),
    o = n(231338);
let s = (0, r.U)((e, t) => ({
    startTime: performance.now(),
    elapsed: 0,
    lastOutputLogTime: -5000,
    logger: null,
    registerAssetLoad: () => {
        var n;
        let r = null != (n = t().logger) ? n : (0, l.T)({ location: a.dr.QUEST_HOME_DESKTOP });
        if (r.info === o.dG || t().elapsed >= 60000) return;
        let s = performance.now() - t().startTime;
        s > 60000 && (s = 60000);
        let c = { elapsed: s };
        s - t().lastOutputLogTime > 1000 && (r.info('QuestHome asset loading duration so far: '.concat(s, 'ms')), (c.lastOutputLogTime = s)), null == t().logger && (c.logger = r), (0, i.j)(() => e(c));
    }
}));
