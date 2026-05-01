"use strict";
n.d(t, { BW: () => l, CE: () => d, DS: () => u, Gy: () => c, m2: () => E });
var i,
    r = n(64700),
    s = n(647307),
    a = n(203027),
    o = n(167789),
    l = (((i = {}).Loading = "loading"), (i.Loaded = "loaded"), i);
let _ = (0, a.v)(() => ({ riveAssetCache: new Map(), riveOverrideCache: {} }));
function d(e) {
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
        n = "object" == typeof e && e instanceof ArrayBuffer,
        i = c(t),
        a = _((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, r.useEffect)(() => {
        if (null == t || null != i || n || _.getState().riveAssetCache.has(t)) return;
        let e = new s.RiveFile({ src: t });
        (0, o.O)(() => {
            e.init(),
                e.on(s.EventType.Load, () => {
                    let n = { status: "loaded", buffer: e.buffer };
                    _.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(t, n) }));
                }),
                e.on(s.EventType.LoadError, (e) => {
                    console.error("Rive file load error", t, e);
                });
        });
    }, [t, i, n]),
    null != i)
        ? { status: "loaded", buffer: i }
        : n
          ? { status: "loaded", buffer: e }
          : (a ?? { status: "loading", buffer: null });
}
function u(e, t) {
    let n = _.getState().riveOverrideCache;
    _.setState({ riveOverrideCache: { ...n, [e]: t } });
}
function c(e) {
    let t = _((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
}
function E(e) {
    return null != _((e) => e.riveOverrideCache)[e];
}
