"use strict";
n.d(t, { v: () => a });
var r = n(64700),
    i = n(93023);
let s = (e) => {
        let t = (0, i.y)(e),
            n = (e) =>
                (function (e, t = (e) => e) {
                    let n = r.useSyncExternalStore(
                        e.subscribe,
                        () => t(e.getState()),
                        () => t(e.getInitialState()),
                    );
                    return r.useDebugValue(n), n;
                })(t, e);
        return Object.assign(n, t), n;
    },
    a = (e) => (e ? s(e) : s);
