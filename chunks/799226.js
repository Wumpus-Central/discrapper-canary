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
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
        n = "object" == typeof e && e instanceof ArrayBuffer,
        a = d(t),
        o = l((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, r.useEffect)(() => {
        if (null == t || null != a || n || l.getState().riveAssetCache.has(t)) return;
        let e = new i.RiveFile({ src: t }),
            r = () => {
                e.init(),
                    e.on(i.EventType.Load, () => {
                        let n = { status: "loaded", buffer: e.buffer };
                        l.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(t, n) }));
                    }),
                    e.on(i.EventType.LoadError, (e) => {
                        console.error("Rive file load error", t, e);
                    });
            };
        (0, s.O)(r);
    }, [t, a, n]),
    null != a)
        ? { status: "loaded", buffer: a }
        : n
          ? { status: "loaded", buffer: e }
          : (o ?? { status: "loading", buffer: null });
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
