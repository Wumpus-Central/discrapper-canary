l.d(t, { Ay: () => s, DE: () => r, TW: () => n });
let a = (0, l(196765).v)(() => ({ imgCache: {}, toolsCache: {} }));
function n() {
    return {
        getImgCache: function (e) {
            if (null != e) return a.getState().imgCache[e];
        },
        setImgCache: function (e, t, l) {
            a.setState((a) => ({ imgCache: { ...a.imgCache, [e]: { animatedUrl: t, staticUrl: l } } }));
        },
    };
}
function r() {
    return {
        toolsCache: a.getState().toolsCache,
        setToolsCache: function (e, t, l) {
            null != e &&
                null != t &&
                a.setState((a) => ({ toolsCache: { ...a.toolsCache, [e]: { url: t, palette: l } } }));
        },
        removeToolsCache: function (e) {
            a.setState((t) => {
                let {
                    toolsCache: { [e]: l, ...a },
                } = t;
                return { imgCache: t.imgCache, toolsCache: a };
            });
        },
    };
}
let s = 588245 != l.j ? a : null;
