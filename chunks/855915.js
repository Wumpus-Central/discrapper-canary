"use strict";
n.d(t, { A: () => c }), n(508300);
var i = n(64700),
    r = n(626584),
    s = n(403362),
    a = n(746002);
let o = new r.A("usePreloadLayerImages");
async function l(e, t) {
    let n;
    t.throwIfAborted();
    let i = new Image();
    i.src = e;
    try {
        await Promise.race([
            i.decode(),
            new Promise((e, r) => {
                (n = () => {
                    (i.src = ""), r(new DOMException("Aborted", "AbortError"));
                }),
                    t.addEventListener("abort", n, { once: !0 });
            }),
        ]);
    } finally {
        null != n && t.removeEventListener("abort", n);
    }
    return i;
}
function u(e) {
    return "id" in e ? e.id : e.src;
}
function c(e) {
    let { skuId: t, layers: n } = e,
        [r, c] = i.useState({}),
        [d, _] = i.useState(t);
    return (
        t !== d && (_(t), c({})),
        i.useEffect(() => {
            if (null == t || null == n || 0 === n.length) return;
            let e = new AbortController(),
                { signal: i } = e;
            return (
                n.forEach(async (e) => {
                    let n =
                        "id" in e
                            ? (0, a.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: e.id })
                            : e.src;
                    if (null != n)
                        try {
                            let t = await l(n, i);
                            i.aborted || c((n) => ({ ...n, [u(e)]: t }));
                        } catch (e) {
                            !i.aborted && (0, s.m6)() && o.error(`Failed to preload layer image: ${n}`, e);
                        }
                }),
                () => e.abort()
            );
        }, [t, n]),
        { loaded: null != n && n.every((e) => null != r[u(e)]), layerData: r }
    );
}
