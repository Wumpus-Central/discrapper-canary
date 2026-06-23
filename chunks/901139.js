"use strict";
n.d(t, { Ay: () => a, DE: () => s, TW: () => r });
let i = (0, n(353640).v)(() => ({ imgCache: {}, toolsCache: {} }));
function r() {
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
let a = i;
