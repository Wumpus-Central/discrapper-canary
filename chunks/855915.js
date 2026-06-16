r.d(t, { A: () => c }), r(508300);
var n = r(64700),
    l = r(626584),
    a = r(403362),
    s = r(746002);
let i = new l.A("usePreloadLayerImages");
async function o(e, t) {
    let r;
    t.throwIfAborted();
    let n = new Image();
    n.src = e;
    try {
        await Promise.race([
            n.decode(),
            new Promise((e, l) => {
                (r = () => {
                    (n.src = ""), l(new DOMException("Aborted", "AbortError"));
                }),
                    t.addEventListener("abort", r, { once: !0 });
            }),
        ]);
    } finally {
        null != r && t.removeEventListener("abort", r);
    }
    return n;
}
function u(e) {
    return "id" in e ? e.id : e.src;
}
function c(e) {
    let { skuId: t, layers: r } = e,
        [l, c] = n.useState({}),
        [d, f] = n.useState(t);
    return (
        t !== d && (f(t), c({})),
        n.useEffect(() => {
            if (null == t || null == r || 0 === r.length) return;
            let e = new AbortController(),
                { signal: n } = e;
            return (
                r.forEach(async (e) => {
                    let r =
                        "id" in e
                            ? (0, s.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: e.id })
                            : e.src;
                    if (null != r)
                        try {
                            let t = await o(r, n);
                            n.aborted || c((r) => ({ ...r, [u(e)]: t }));
                        } catch (e) {
                            !n.aborted && (0, a.m6)() && i.error(`Failed to preload layer image: ${r}`, e);
                        }
                }),
                () => e.abort()
            );
        }, [t, r]),
        { loaded: null != r && r.every((e) => null != l[u(e)]), layerData: l }
    );
}
