function n(e, t, i, n) {
    let l = null,
        s = null;
    i < n
        ? ((l = t[n]?.skuId ?? null), (s = t[n + 1]?.skuId ?? null))
        : ((l = t[n - 1]?.skuId ?? null), (s = t[n]?.skuId ?? null));
    let a = [...t],
        [r] = a.splice(i, 1);
    return a.splice(n, 0, r), { newWishlistData: e.set("items", a), previousSkuId: l, nextSkuId: s };
}
i.d(t, { Ap: () => n }), i(872472), i(394300), i(652215);
