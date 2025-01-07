t.d(n, {
    Z: function () {
        return i;
    }
});
var r = t(512722),
    o = t.n(r),
    u = t(493773),
    a = t(563132),
    c = t(390917),
    l = t(464797);
function i(e) {
    let { handleClose: n } = e,
        { guildProductListing: t, guildId: r } = (0, l._)(),
        { selectedSkuPricePreview: i } = (0, a.usePaymentContext)();
    return (
        (0, u.Z)(() => {
            o()(null != i, 'selectedSkuPricePreview cannot be null'),
                (0, c.u)({
                    guildId: r,
                    guildProductListingId: t.id,
                    skuPricePreview: i
                }),
                n();
        }),
        null
    );
}
