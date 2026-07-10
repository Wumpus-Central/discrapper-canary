i.d(s, { Ap: () => t, gm: () => l }), i(993046);
var n = i(428262);
function t(e, s, i, n) {
    let t = null,
        l = null;
    i < n
        ? ((t = s[n]?.skuId ?? null), (l = s[n + 1]?.skuId ?? null))
        : ((t = s[n - 1]?.skuId ?? null), (l = s[n]?.skuId ?? null));
    let a = [...s],
        [r] = a.splice(i, 1);
    return a.splice(n, 0, r), { newWishlistData: e.set("items", a), previousSkuId: t, nextSkuId: l };
}
function l(e) {
    let s = e.findIndex((e) => n.Ay.isPremiumSku(e.skuId));
    if (s <= 0) return e;
    let i = [...e],
        [t] = i.splice(s, 1);
    return [t, ...i];
}
i(872472), i(394300), i(721932), i(652215);
