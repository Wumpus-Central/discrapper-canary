t.d(n, { Z: () => c });
var r = t(512722),
    o = t.n(r),
    l = t(493773),
    s = t(563132),
    u = t(390917),
    a = t(464797);
function c(e) {
    let { handleClose: n } = e,
        { guildProductListing: t, guildId: r } = (0, a._)(),
        { selectedSkuPricePreview: c } = (0, s.JL)();
    return (
        (0, l.ZP)(() => {
            o()(null != c, 'selectedSkuPricePreview cannot be null'),
                (0, u.u)({
                    guildId: r,
                    guildProductListingId: t.id,
                    skuPricePreview: c
                }),
                n();
        }),
        null
    );
}
