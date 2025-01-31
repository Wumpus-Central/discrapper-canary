n.d(t, {
    Je: () => a,
    gs: () => c,
    mh: () => o,
    p9: () => u,
    uV: () => d
});
var i = n(544891),
    l = n(881052),
    r = n(73346),
    s = n(981631);
let a = async (e, t, n) => {
        let { priceTier: r, imageName: a, createNewRole: o, unlinkRole: d, ...u } = n;
        try {
            return (
                await i.tn.patch({
                    url: s.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body: {
                        ...u,
                        image_name: a,
                        price_tier: r,
                        create_new_role: o,
                        unlink_role: d
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    o = async (e, t) => {
        try {
            await i.tn.del({
                url: s.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    d = async (e) => {
        try {
            return (
                await (0, r.Kb)({
                    url: s.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    u = async (e, t) => {
        try {
            return (
                await (0, r.Kb)({
                    url: s.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    c = async (e) => {
        let { guildId: t, productId: n, attachmentId: r } = e;
        try {
            return (
                await i.tn.post({
                    url: s.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, r),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new l.Hx(e);
        }
    };
