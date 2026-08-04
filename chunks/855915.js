t.d(r, { A: () => i }), t(508300);
var n = t(582128),
    l = t(626584),
    a = t(403362),
    u = t(746002);
let s = new l.A("usePreloadLayerImages");
async function o(e, r) {
    let t;
    r.throwIfAborted();
    let n = new Image();
    n.src = e;
    try {
        await Promise.race([
            n.decode(),
            new Promise((e, n) => {
                (t = () => n(new DOMException("Aborted", "AbortError"))), r.addEventListener("abort", t, { once: !0 });
            }),
        ]);
    } finally {
        null != t && r.removeEventListener("abort", t);
    }
    return n;
}
function c(e) {
    return "id" in e ? e.id : e.src;
}
function i(e) {
    let { skuId: r, layers: t } = e,
        [l, i] = n.useState({}),
        [d, f] = n.useState(() => new Set()),
        [A, m] = n.useState(r);
    return (
        r !== A && (m(r), i({}), f(new Set())),
        n.useEffect(() => {
            if (null == r || null == t || 0 === t.length) return;
            let e = new AbortController(),
                { signal: n } = e,
                l = (e) => f((r) => (r.has(e) ? r : new Set(r).add(e)));
            return (
                t.forEach(async (e) => {
                    let t =
                        "id" in e
                            ? (0, u.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: e.id })
                            : e.src;
                    if (null != t)
                        try {
                            let r = await o(t, n);
                            n.aborted || (i((t) => ({ ...t, [c(e)]: r })), l(c(e)));
                        } catch (r) {
                            !n.aborted && (l(c(e)), (0, a.m6)() && s.error(`Failed to preload layer image: ${t}`, r));
                        }
                }),
                () => e.abort()
            );
        }, [r, t]),
        {
            loaded: null != t && t.every((e) => null != l[c(e)]),
            settled: null != t && t.every((e) => d.has(c(e))),
            layerData: l,
        }
    );
}
