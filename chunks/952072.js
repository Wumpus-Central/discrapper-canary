"use strict";
n.d(t, { A: () => l });
var i = n(481613),
    s = n.n(i),
    r = n(547830);
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
                browser: { name: s().name, version: s().version },
                os: { name: s().os.family, version: s().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - r.fL,
};
