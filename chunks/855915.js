t(508300);
var n = t(582128),
    l = t(626584),
    a = t(403362),
    u = t(746002);
let s = new l.A("usePreloadLayerImages");
function o(e) {
    return "id" in e ? e.id : e.src;
}
t.d(
    r,
    {},
    {
        A: function (e) {
            let { skuId: r, layers: t } = e,
                [l, c] = n.useState({}),
                [i, d] = n.useState(() => new Set()),
                [f, A] = n.useState(r);
            return (
                r !== f && (A(r), c({}), d(new Set())),
                n.useEffect(() => {
                    if (null == r || null == t || 0 === t.length) return;
                    let e = new AbortController(),
                        { signal: n } = e;
                    function l(e) {
                        return d((r) => (r.has(e) ? r : new Set(r).add(e)));
                    }
                    return (
                        t.forEach(async (e) => {
                            let t =
                                "id" in e
                                    ? (0, u.getCollectiblesItemAssetUrl)({
                                          skuId: r,
                                          assetFormat: "static",
                                          assetId: e.id,
                                      })
                                    : e.src;
                            if (null != t)
                                try {
                                    let r = await (async function (e, r) {
                                        let t;
                                        r.throwIfAborted();
                                        let n = new Image();
                                        n.src = e;
                                        try {
                                            await Promise.race([
                                                n.decode(),
                                                new Promise((e, n) => {
                                                    ((t = () => n(new DOMException("Aborted", "AbortError"))),
                                                        r.addEventListener("abort", t, { once: !0 }));
                                                }),
                                            ]);
                                        } finally {
                                            null != t && r.removeEventListener("abort", t);
                                        }
                                        return n;
                                    })(t, n);
                                    n.aborted || (c((t) => ({ ...t, [o(e)]: r })), l(o(e)));
                                } catch (r) {
                                    !n.aborted &&
                                        (l(o(e)), (0, a.m6)() && s.error(`Failed to preload layer image: ${t}`, r));
                                }
                        }),
                        () => e.abort()
                    );
                }, [r, t]),
                {
                    loaded: null != t && t.every((e) => null != l[o(e)]),
                    settled: null != t && t.every((e) => i.has(o(e))),
                    layerData: l,
                }
            );
        },
    },
);
