n.d(t, {
    FG: () => a,
    ad: () => l,
    fO: () => o,
    sr: () => s,
});
var r = n(392711),
    i = n(215023);
let a = (e) => {
        if ("object" != typeof e || null == e || !("asset" in e) || "string" != typeof e.asset) return null;
        let t = { asset: e.asset };
        return (
            "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id),
            "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId),
            "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at),
            "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt),
            t
        );
    },
    o = (e) => (null == e ? void 0 : e.expiresAt) != null && 1000 * e.expiresAt + i.Cm < Date.now(),
    s = (e, t) => (null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t))),
    l = (e, t) => {
        var n;
        return (
            null != t &&
            !o(null == e ? void 0 : e.avatarDecoration) &&
            (null == e || null == (n = e.avatarDecoration) ? void 0 : n.asset) != null
        );
    };
