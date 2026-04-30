"use strict";
n.d(t, { Ay: () => a, DE: () => s, TW: () => r });
let i = (0, n(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    r = () => ({
        getImgCache: (e) => {
            if (null != e) return i.getState().imgCache[e];
        },
        setImgCache: (e, t, n) => {
            i.setState((i) => ({ imgCache: { ...i.imgCache, [e]: { animatedUrl: t, staticUrl: n } } }));
        },
    }),
    s = () => ({
        toolsCache: i.getState().toolsCache,
        setToolsCache: (e, t, n) => {
            null != e &&
                null != t &&
                i.setState((i) => ({ toolsCache: { ...i.toolsCache, [e]: { url: t, palette: n } } }));
        },
        removeToolsCache: (e) => {
            i.setState((t) => {
                let {
                    toolsCache: { [e]: n, ...i },
                } = t;
                return { imgCache: t.imgCache, toolsCache: i };
            });
        },
    }),
    a = i;
