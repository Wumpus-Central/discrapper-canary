r.d(n, {
    FG: function () {
        return s;
    },
    ad: function () {
        return c;
    },
    ae: function () {
        return o;
    },
    fO: function () {
        return l;
    },
    sr: function () {
        return u;
    }
});
var i = r(392711);
var a = r(215023);
let o = (e) => e.split('_', 2).includes('a'),
    s = (e) => {
        if ('object' != typeof e || null == e || !('asset' in e) || 'string' != typeof e.asset) return null;
        let n = { asset: e.asset };
        return 'sku_id' in e && 'string' == typeof e.sku_id && (n.skuId = e.sku_id), 'skuId' in e && 'string' == typeof e.skuId && (n.skuId = e.skuId), 'expires_at' in e && 'number' == typeof e.expires_at && (n.expiresAt = e.expires_at), 'expiresAt' in e && 'number' == typeof e.expiresAt && (n.expiresAt = e.expiresAt), n;
    },
    l = (e) => {
        let n = (null == e ? void 0 : e.skuId) === '1251324401459265537' || (null == e ? void 0 : e.skuId) === '1252353273256480818' ? 950400000 : a.Cm;
        return (null == e ? void 0 : e.expiresAt) != null && 1000 * e.expiresAt + n < Date.now();
    },
    u = (e, n) => (null == e || null == n ? e === n : (0, i.isEqual)(s(e), s(n))),
    c = (e, n) => {
        var r;
        return null != n && !l(null == e ? void 0 : e.avatarDecoration) && (null == e ? void 0 : null === (r = e.avatarDecoration) || void 0 === r ? void 0 : r.asset) != null;
    };
