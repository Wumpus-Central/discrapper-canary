"use strict";
n.d(t, { BW: () => o, CE: () => c, DS: () => u, Gy: () => _, m2: () => E });
var i,
    r = n(64700),
    a = n(647307),
    s = n(203027),
    l = n(167789),
    o = (((i = {}).Loading = "loading"), (i.Loaded = "loaded"), i);
let d = (0, s.v)(() => ({ riveAssetCache: new Map(), riveOverrideCache: {} }));
function c(e) {
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
        n = "object" == typeof e && e instanceof ArrayBuffer,
        i = _(t),
        s = d((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, r.useEffect)(() => {
        if (null == t || null != i || n || d.getState().riveAssetCache.has(t)) return;
        let e = new a.RiveFile({ src: t });
        (0, l.O)(() => {
            e.init(),
                e.on(a.EventType.Load, () => {
                    let n = { status: "loaded", buffer: e.buffer };
                    d.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(t, n) }));
                }),
                e.on(a.EventType.LoadError, (e) => {
                    console.error("Rive file load error", t, e);
                });
        });
    }, [t, i, n]),
    null != i)
        ? { status: "loaded", buffer: i }
        : n
          ? { status: "loaded", buffer: e }
          : (s ?? { status: "loading", buffer: null });
}
function u(e, t) {
    let n = d.getState().riveOverrideCache;
    d.setState({ riveOverrideCache: { ...n, [e]: t } });
}
function _(e) {
    let t = d((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
}
function E(e) {
    return null != d((e) => e.riveOverrideCache)[e];
}
