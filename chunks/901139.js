"use strict";
n.d(t, { Ay: () => a, DE: () => s, TW: () => i });
let l = (0, n(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    i = () => ({
        getImgCache: (e) => {
            if (null != e) return l.getState().imgCache[e];
        },
        setImgCache: (e, t, n) => {
            l.setState((l) => ({ imgCache: { ...l.imgCache, [e]: { animatedUrl: t, staticUrl: n } } }));
        },
    }),
    s = () => ({
        toolsCache: l.getState().toolsCache,
        setToolsCache: (e, t, n) => {
            null != e &&
                null != t &&
                l.setState((l) => ({ toolsCache: { ...l.toolsCache, [e]: { url: t, palette: n } } }));
        },
        removeToolsCache: (e) => {
            l.setState((t) => {
                let {
                    toolsCache: { [e]: n, ...l },
                } = t;
                return { imgCache: t.imgCache, toolsCache: l };
            });
        },
    }),
    a = l;
