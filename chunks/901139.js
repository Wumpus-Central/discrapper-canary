s.d(t, { Ay: () => n, DE: () => r, TW: () => a });
let l = (0, s(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    a = () => ({
        getImgCache: (e) => {
            if (null != e) return l.getState().imgCache[e];
        },
        setImgCache: (e, t, s) => {
            l.setState((l) => ({ imgCache: { ...l.imgCache, [e]: { animatedUrl: t, staticUrl: s } } }));
        },
    }),
    r = () => ({
        toolsCache: l.getState().toolsCache,
        setToolsCache: (e, t, s) => {
            null != e &&
                null != t &&
                l.setState((l) => ({ toolsCache: { ...l.toolsCache, [e]: { url: t, palette: s } } }));
        },
        removeToolsCache: (e) => {
            l.setState((t) => {
                let {
                    toolsCache: { [e]: s, ...l },
                } = t;
                return { imgCache: t.imgCache, toolsCache: l };
            });
        },
    }),
    n = l;
