"use strict";
n.d(t, { BW: () => o, CE: () => u, DS: () => c, Gy: () => d, m2: () => _ });
var r = n(64700),
    i = n(647307),
    a = n(931239),
    s = n(167789),
    o = (function (e) {
        return (e.Loading = "loading"), (e.Loaded = "loaded"), e;
    })({});
let l = (0, a.v)(() => ({ riveAssetCache: new Map(), riveOverrideCache: {} }));
function u(e) {
    let t = d(e),
        n = l((t) => (null == e ? null : t.riveAssetCache.get(e)));
    return ((0, r.useEffect)(() => {
        if (null == e || null != t || l.getState().riveAssetCache.has(e)) return;
        let n = new i.RiveFile({ src: e }),
            r = () => {
                n.init(),
                    n.on(i.EventType.Load, () => {
                        let t = { status: "loaded", buffer: n.buffer };
                        l.setState((n) => ({ riveAssetCache: n.riveAssetCache.set(e, t) }));
                    }),
                    n.on(i.EventType.LoadError, (t) => {
                        console.error("Rive file load error", e, t);
                    });
            };
        (0, s.O)(r);
    }, [e, t]),
    null != t)
        ? { status: "loaded", buffer: t }
        : (n ?? { status: "loading", buffer: null });
}
function c(e, t) {
    let n = l.getState().riveOverrideCache;
    l.setState({ riveOverrideCache: { ...n, [e]: t } });
}
function d(e) {
    let t = l((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
}
function _(e) {
    return null != l((e) => e.riveOverrideCache)[e];
}
