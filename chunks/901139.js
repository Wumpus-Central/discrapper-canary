"use strict";
n.d(t, { Ay: () => a, DE: () => s, TW: () => i });
let r = (0, n(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    i = () => {
        let e = r;
        return {
            getImgCache: (t) => {
                if (null != t) return e.getState().imgCache[t];
            },
            setImgCache: (t, n, r) => {
                e.setState((e) => ({ imgCache: { ...e.imgCache, [t]: { animatedUrl: n, staticUrl: r } } }));
            },
        };
    },
    s = () => {
        let e = r;
        return {
            toolsCache: e.getState().toolsCache,
            setToolsCache: (t, n, r) => {
                null != t &&
                    null != n &&
                    e.setState((e) => ({ toolsCache: { ...e.toolsCache, [t]: { url: n, palette: r } } }));
            },
            removeToolsCache: (t) => {
                e.setState((e) => {
                    let {
                        toolsCache: { [t]: n, ...r },
                    } = e;
                    return { imgCache: e.imgCache, toolsCache: r };
                });
            },
        };
    },
    a = r;
