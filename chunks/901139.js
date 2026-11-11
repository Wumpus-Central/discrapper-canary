let l = (0, n(196765).v)(() => ({ imgCache: {}, toolsCache: {} }));
n.d(
    t,
    {},
    {
        Ay: l,
        DE: function () {
            return {
                toolsCache: l.getState().toolsCache,
                setToolsCache: function (e, t, n) {
                    null != e &&
                        null != t &&
                        l.setState((l) => ({ toolsCache: { ...l.toolsCache, [e]: { url: t, palette: n } } }));
                },
                removeToolsCache: function (e) {
                    l.setState((t) => {
                        let {
                            toolsCache: { [e]: n, ...l },
                        } = t;
                        return { imgCache: t.imgCache, toolsCache: l };
                    });
                },
            };
        },
        TW: function () {
            return {
                getImgCache: function (e) {
                    if (null != e) return l.getState().imgCache[e];
                },
                setImgCache: function (e, t, n) {
                    l.setState((l) => ({ imgCache: { ...l.imgCache, [e]: { animatedUrl: t, staticUrl: n } } }));
                },
            };
        },
    },
);
