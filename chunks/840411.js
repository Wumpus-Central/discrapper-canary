n.d(t, { A: () => i });
function i(e, t, n, i) {
    let l = null,
        a = null;
    n < i
        ? ((l = t[i]?.skuId ?? null), (a = t[i + 1]?.skuId ?? null))
        : ((l = t[i - 1]?.skuId ?? null), (a = t[i]?.skuId ?? null));
    let r = [...t],
        [s] = r.splice(n, 1);
    return r.splice(i, 0, s), { newWishlistData: e.set("items", r), previousSkuId: l, nextSkuId: a };
}
