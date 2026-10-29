n.d(t, { BW: () => d, CE: () => f, DS: () => I, Gy: () => p, m2: () => T });
var i,
    r = n(582128),
    a = n(971940),
    s = n(888633),
    l = n(167789),
    o = n(432816),
    d = (((i = {}).Loading = "loading"), (i.Loaded = "loaded"), i);
let c = (0, s.v)(() => ({ riveAssetCache: new Map(), riveOverrideCache: {} })),
    u = new Set();
function _(e, t) {
    let n = { status: "loaded", buffer: t };
    c.setState((t) => ({ riveAssetCache: t.riveAssetCache.set(e, n) }));
}
function E(e, t) {
    console.error("Rive file load error", e, t);
}
async function A(e) {
    let t;
    try {
        t = await h(e);
    } catch (t) {
        (u.delete(e), E(e, t));
        return;
    }
    (u.delete(e), _(e, t));
}
async function h(e) {
    let t = await fetch(new Request(e));
    if (!t.ok) throw Error(`Failed to fetch the Rive file: HTTP ${t.status}`);
    return t.arrayBuffer();
}
function f(e) {
    let t = e instanceof ArrayBuffer ? e.byteLength.toString() : e?.toString(),
        n = "object" == typeof e && e instanceof ArrayBuffer,
        i = p(t),
        s = (function () {
            let e = (0, o.G9)().experiments?.enabledExperiments,
                [t] = (0, r.useState)(() => e?.includes("rive-web-perf") ?? !1);
            return t;
        })(),
        d = c((e) => (null == t ? null : e.riveAssetCache.get(t)));
    return ((0, r.useEffect)(() => {
        if (null == t || null != i || n || c.getState().riveAssetCache.has(t)) return;
        if (s) {
            if (u.has(t)) return;
            (u.add(t),
                (0, l.O)(() => {
                    A(t);
                }));
            return;
        }
        let e = new a.RiveFile({ src: t });
        (0, l.O)(() => {
            (e.init(),
                e.on(a.EventType.Load, () => {
                    _(t, e.buffer);
                }),
                e.on(a.EventType.LoadError, (e) => E(t, e)));
        });
    }, [t, i, n, s]),
    null != i)
        ? { status: "loaded", buffer: i }
        : n
          ? { status: "loaded", buffer: e }
          : (d ?? { status: "loading", buffer: null });
}
function I(e, t) {
    let n = c.getState().riveOverrideCache;
    c.setState({ riveOverrideCache: { ...n, [e]: t } });
}
function p(e) {
    let t = c((e) => e.riveOverrideCache);
    return null == e ? null : t[e];
}
function T(e) {
    return null != c((e) => e.riveOverrideCache)[e];
}
