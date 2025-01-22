n.d(t, {
    Je: function () {
        return s;
    },
    gs: function () {
        return c;
    },
    mh: function () {
        return a;
    },
    p9: function () {
        return d;
    },
    uV: function () {
        return u;
    }
});
var i = n(544891),
    r = n(881052),
    l = n(73346),
    o = n(981631);
let s = async (e, t, n) => {
        let { priceTier: l, imageName: s, createNewRole: a, unlinkRole: u, ...d } = n;
        try {
            return (
                await i.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body: {
                        ...d,
                        image_name: s,
                        price_tier: l,
                        create_new_role: a,
                        unlink_role: u
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    a = async (e, t) => {
        try {
            await i.tn.del({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    u = async (e) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    d = async (e, t) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    c = async (e) => {
        let { guildId: t, productId: n, attachmentId: l } = e;
        try {
            return (
                await i.tn.post({
                    url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    };
