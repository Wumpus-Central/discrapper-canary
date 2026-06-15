l.d(t, { Ay: () => n, DE: () => r, TW: () => s });
let a = (0, l(353640).v)(() => ({ imgCache: {}, toolsCache: {} })),
    s = () => ({
        getImgCache: (e) => {
            if (null != e) return a.getState().imgCache[e];
        },
        setImgCache: (e, t, l) => {
            a.setState((a) => ({ imgCache: { ...a.imgCache, [e]: { animatedUrl: t, staticUrl: l } } }));
        },
    }),
    r = () => ({
        toolsCache: a.getState().toolsCache,
        setToolsCache: (e, t, l) => {
            null != e &&
                null != t &&
                a.setState((a) => ({ toolsCache: { ...a.toolsCache, [e]: { url: t, palette: l } } }));
        },
        removeToolsCache: (e) => {
            a.setState((t) => {
                let {
                    toolsCache: { [e]: l, ...a },
                } = t;
                return { imgCache: t.imgCache, toolsCache: a };
            });
        },
    }),
    n = a;
