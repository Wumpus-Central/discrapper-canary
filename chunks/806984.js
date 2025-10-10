n.d(t, { Z: () => a });
var r = n(512722),
    o = n.n(r),
    c = n(493773),
    l = n(563132),
    i = n(390917),
    u = n(464797);
function a(e) {
    let { handleClose: t } = e,
        { guildProductListing: n, guildId: r } = (0, u._)(),
        { selectedSkuPricePreview: a } = (0, l.JL)();
    return (
        (0, c.ZP)(() => {
            o()(null != a, "selectedSkuPricePreview cannot be null"),
                (0, i.u)({
                    guildId: r,
                    guildProductListingId: n.id,
                    skuPricePreview: a,
                }),
                t();
        }),
        null
    );
}
