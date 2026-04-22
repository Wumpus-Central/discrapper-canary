"use strict";
n.d(t, { BW: () => l, CE: () => d, DS: () => c, Gy: () => _, m2: () => f });
var r,
    i = n(64700),
    s = n(647307),
    a = n(931239),
    o = n(167789),
    l = (((r = {}).Loading = "loading"), (r.Loaded = "loaded"), r);
let u = (0, a.v)(() => ({ riveAssetCache: new Map(), riveOverrideCache: {} }));
function d(e) {
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
        n = "object" == typeof e && e instanceof ArrayBuffer,
        r = _(t),
        a = u((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, i.useEffect)(() => {
        if (null == t || null != r || n || u.getState().riveAssetCache.has(t)) return;
        let e = new s.RiveFile({ src: t });
        (0, o.O)(() => {
            e.init(),
                e.on(s.EventType.Load, () => {
                    let n = { status: "loaded", buffer: e.buffer };
                    u.setState((e) => ({ riveAssetCache: e.riveAssetCache.set(t, n) }));
                }),
                e.on(s.EventType.LoadError, (e) => {
                    console.error("Rive file load error", t, e);
                });
        });
    }, [t, r, n]),
    null != r)
        ? { status: "loaded", buffer: r }
        : n
          ? { status: "loaded", buffer: e }
          : (a ?? { status: "loading", buffer: null });
}
function c(e, t) {
    let n = u.getState().riveOverrideCache;
    u.setState({ riveOverrideCache: { ...n, [e]: t } });
}
function _(e) {
    let t = u((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
}
function f(e) {
    return null != u((e) => e.riveOverrideCache)[e];
}
