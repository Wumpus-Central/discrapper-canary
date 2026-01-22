n.d(t, {
    A: () => l,
});
var r = n(481613),
    i = n.n(r),
    s = n(547830);
let l = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: {
                    name: i().name,
                    version: i().version,
                },
                os: {
                    name: i().os.family,
                    version: i().os.version,
                },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - s.fL,
};
