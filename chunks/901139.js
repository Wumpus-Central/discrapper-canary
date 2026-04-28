r.d(t, { Ay: () => n, DE: () => l, TW: () => s });
let a = (0, r(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    s = () => ({
        getImgCache: (e) => {
            if (null != e) return a.getState().imgCache[e];
        },
        setImgCache: (e, t, r) => {
            a.setState((a) => ({ imgCache: { ...a.imgCache, [e]: { animatedUrl: t, staticUrl: r } } }));
        },
    }),
    l = () => ({
        toolsCache: a.getState().toolsCache,
        setToolsCache: (e, t, r) => {
            null != e &&
                null != t &&
                a.setState((a) => ({ toolsCache: { ...a.toolsCache, [e]: { url: t, palette: r } } }));
        },
        removeToolsCache: (e) => {
            a.setState((t) => {
                let {
                    toolsCache: { [e]: r, ...a },
                } = t;
                return { imgCache: t.imgCache, toolsCache: a };
            });
        },
    }),
    n = a;
