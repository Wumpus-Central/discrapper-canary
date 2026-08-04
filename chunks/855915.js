"use strict";
n.d(t, { A: () => c }), n(508300);
var i = n(582128),
    r = n(626584),
    a = n(403362),
    s = n(746002);
let l = new r.A("usePreloadLayerImages");
async function o(e, t) {
    let n;
    t.throwIfAborted();
    let i = new Image();
    i.src = e;
    try {
        await Promise.race([
            i.decode(),
            new Promise((e, i) => {
                (n = () => i(new DOMException("Aborted", "AbortError"))), t.addEventListener("abort", n, { once: !0 });
            }),
        ]);
    } finally {
        null != n && t.removeEventListener("abort", n);
    }
    return i;
}
function d(e) {
    return "id" in e ? e.id : e.src;
}
function c(e) {
    let { skuId: t, layers: n } = e,
        [r, c] = i.useState({}),
        [u, _] = i.useState(() => new Set()),
        [E, A] = i.useState(t);
    return (
        t !== E && (A(t), c({}), _(new Set())),
        i.useEffect(() => {
            if (null == t || null == n || 0 === n.length) return;
            let e = new AbortController(),
                { signal: i } = e;
            function r(e) {
                return _((t) => (t.has(e) ? t : new Set(t).add(e)));
            }
            return (
                n.forEach(async (e) => {
                    let n =
                        "id" in e
                            ? (0, s.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: e.id })
                            : e.src;
                    if (null != n)
                        try {
                            let t = await o(n, i);
                            i.aborted || (c((n) => ({ ...n, [d(e)]: t })), r(d(e)));
                        } catch (t) {
                            !i.aborted && (r(d(e)), (0, a.m6)() && l.error(`Failed to preload layer image: ${n}`, t));
                        }
                }),
                () => e.abort()
            );
        }, [t, n]),
        {
            loaded: null != n && n.every((e) => null != r[d(e)]),
            settled: null != n && n.every((e) => u.has(d(e))),
            layerData: r,
        }
    );
}
