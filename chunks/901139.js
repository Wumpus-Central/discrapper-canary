l.d(t, { Ay: () => n, DE: () => s, TW: () => a });
let r = (0, l(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    a = () => ({
        getImgCache: (e) => {
            if (null != e) return r.getState().imgCache[e];
        },
        setImgCache: (e, t, l) => {
            r.setState((r) => ({ imgCache: { ...r.imgCache, [e]: { animatedUrl: t, staticUrl: l } } }));
        },
    }),
    s = () => ({
        toolsCache: r.getState().toolsCache,
        setToolsCache: (e, t, l) => {
            null != e &&
                null != t &&
                r.setState((r) => ({ toolsCache: { ...r.toolsCache, [e]: { url: t, palette: l } } }));
        },
        removeToolsCache: (e) => {
            r.setState((t) => {
                let {
                    toolsCache: { [e]: l, ...r },
                } = t;
                return { imgCache: t.imgCache, toolsCache: r };
            });
        },
    }),
    n = r;
