r.d(t, { Z: () => a });
var n = r(512722),
    o = r.n(n),
    c = r(493773),
    l = r(563132),
    i = r(390917),
    u = r(464797);
function a(e) {
    let { handleClose: t } = e,
        { guildProductListing: r, guildId: n } = (0, u._)(),
        { selectedSkuPricePreview: a } = (0, l.JL)();
    return (
        (0, c.ZP)(() => {
            o()(null != a, 'selectedSkuPricePreview cannot be null'),
                (0, i.u)({
                    guildId: n,
                    guildProductListingId: r.id,
                    skuPricePreview: a
                }),
                t();
        }),
        null
    );
}
