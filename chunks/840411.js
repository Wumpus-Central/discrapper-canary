function r(e, t, n, r) {
    var l, i, a, s, o, c, u, d;
    let f = null,
        p = null;
    n < r
        ? ((f = null != (l = null == (a = t[r]) ? void 0 : a.skuId) ? l : null),
          (p = null != (i = null == (s = t[r + 1]) ? void 0 : s.skuId) ? i : null))
        : ((f = null != (o = null == (u = t[r - 1]) ? void 0 : u.skuId) ? o : null),
          (p = null != (c = null == (d = t[r]) ? void 0 : d.skuId) ? c : null));
    let b = [...t],
        [g] = b.splice(n, 1);
    return (
        b.splice(r, 0, g),
        {
            newWishlistData: e.set("items", b),
            previousSkuId: f,
            nextSkuId: p,
        }
    );
}
n.d(t, { A: () => r }), n(896048);
