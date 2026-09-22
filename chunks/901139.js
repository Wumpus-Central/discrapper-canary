n.d(t, { Ay: () => r, DE: () => s, TW: () => l });
let i = (0, n(196765).v)(() => ({ imgCache: {}, toolsCache: {} }));
function l() {
    return {
        getImgCache: function (e) {
            if (null != e) return i.getState().imgCache[e];
        },
        setImgCache: function (e, t, n) {
            i.setState((i) => ({ imgCache: { ...i.imgCache, [e]: { animatedUrl: t, staticUrl: n } } }));
        },
    };
}
function s() {
    return {
        toolsCache: i.getState().toolsCache,
        setToolsCache: function (e, t, n) {
            null != e &&
                null != t &&
                i.setState((i) => ({ toolsCache: { ...i.toolsCache, [e]: { url: t, palette: n } } }));
        },
        removeToolsCache: function (e) {
            i.setState((t) => {
                let {
                    toolsCache: { [e]: n, ...i },
                } = t;
                return { imgCache: t.imgCache, toolsCache: i };
            });
        },
    };
}
let r = i;
