n.d(e, {
    Je: function () {
        return u;
    },
    gs: function () {
        return d;
    },
    mh: function () {
        return a;
    },
    p9: function () {
        return c;
    },
    uV: function () {
        return s;
    }
});
var i = n(544891),
    r = n(881052),
    l = n(73346),
    o = n(981631);
let u = async (t, e, n) => {
        let { priceTier: l, imageName: u, createNewRole: a, unlinkRole: s, ...c } = n;
        try {
            return (
                await i.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(t, e),
                    body: {
                        ...c,
                        image_name: u,
                        price_tier: l,
                        create_new_role: a,
                        unlink_role: s
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    a = async (t, e) => {
        try {
            await i.tn.del({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(t, e),
                rejectWithError: !1
            });
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    s = async (t) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(t),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    c = async (t, e) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(t, e),
                    rejectWithError: !1
                })
            ).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    d = async (t) => {
        let { guildId: e, productId: n, attachmentId: l } = t;
        try {
            return (
                await i.tn.post({
                    url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, l),
                    rejectWithError: !1
                })
            ).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    };
