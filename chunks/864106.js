n.d(t, {
    FG: () => a,
    ad: () => c,
    ae: () => o,
    fO: () => s,
    sr: () => l
}),
    n(301563);
var r = n(392711),
    i = n(215023);
let o = (e) => e.split('_', 2).includes('a'),
    a = (e) => {
        if ('object' != typeof e || null == e || !('asset' in e) || 'string' != typeof e.asset) return null;
        let t = { asset: e.asset };
        return 'sku_id' in e && 'string' == typeof e.sku_id && (t.skuId = e.sku_id), 'skuId' in e && 'string' == typeof e.skuId && (t.skuId = e.skuId), 'expires_at' in e && 'number' == typeof e.expires_at && (t.expiresAt = e.expires_at), 'expiresAt' in e && 'number' == typeof e.expiresAt && (t.expiresAt = e.expiresAt), t;
    },
    s = (e) => (null == e ? void 0 : e.expiresAt) != null && 1000 * e.expiresAt + i.Cm < Date.now(),
    l = (e, t) => (null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t))),
    c = (e, t) => {
        var n;
        return null != t && !s(null == e ? void 0 : e.avatarDecoration) && (null == e || null == (n = e.avatarDecoration) ? void 0 : n.asset) != null;
    };
