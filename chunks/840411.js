function i(e, t, n, i) {
    let a = null,
        l = null;
    n < i
        ? ((a = t[i]?.skuId ?? null), (l = t[i + 1]?.skuId ?? null))
        : ((a = t[i - 1]?.skuId ?? null), (l = t[i]?.skuId ?? null));
    let s = [...t],
        [r] = s.splice(n, 1);
    return s.splice(i, 0, r), { newWishlistData: e.set("items", s), previousSkuId: a, nextSkuId: l };
}
n.d(t, { Ap: () => i }), n(872472), n(394300), n(652215);
