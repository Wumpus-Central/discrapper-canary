function i(e, t, n, i) {
    let l = null,
        a = null;
    n < i
        ? ((l = t[i]?.skuId ?? null), (a = t[i + 1]?.skuId ?? null))
        : ((l = t[i - 1]?.skuId ?? null), (a = t[i]?.skuId ?? null));
    let s = [...t],
        [r] = s.splice(n, 1);
    return s.splice(i, 0, r), { newWishlistData: e.set("items", s), previousSkuId: l, nextSkuId: a };
}
n.d(t, { A: () => i }), n(872472), n(394300);
