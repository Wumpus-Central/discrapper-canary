t.d(r, { A: () => i }), t(508300);
var n = t(64700),
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
            new Promise((e, l) => {
                (t = () => {
                    (n.src = ""), l(new DOMException("Aborted", "AbortError"));
                }),
                    r.addEventListener("abort", t, { once: !0 });
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
        [d, f] = n.useState(r);
    return (
        r !== d && (f(r), i({})),
        n.useEffect(() => {
            if (null == r || null == t || 0 === t.length) return;
            let e = new AbortController(),
                { signal: n } = e;
            return (
                t.forEach(async (e) => {
                    let t =
                        "id" in e
                            ? (0, u.getCollectiblesItemAssetUrl)({ skuId: r, assetFormat: "static", assetId: e.id })
                            : e.src;
                    if (null != t)
                        try {
                            let r = await o(t, n);
                            n.aborted || i((t) => ({ ...t, [c(e)]: r }));
                        } catch (e) {
                            !n.aborted && (0, a.m6)() && s.error(`Failed to preload layer image: ${t}`, e);
                        }
                }),
                () => e.abort()
            );
        }, [r, t]),
        { loaded: null != t && t.every((e) => null != l[c(e)]), layerData: l }
    );
}
