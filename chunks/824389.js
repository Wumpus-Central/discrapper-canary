e.d(n, {
    Je: function () {
        return o;
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
var i = e(544891),
    r = e(881052),
    l = e(73346),
    u = e(981631);
let o = async (t, n, e) => {
        let { priceTier: l, imageName: o, createNewRole: a, unlinkRole: s, ...c } = e;
        try {
            return (
                await i.tn.patch({
                    url: u.ANM.GUILD_PRODUCT_LISTINGS(t, n),
                    body: {
                        ...c,
                        image_name: o,
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
    a = async (t, n) => {
        try {
            await i.tn.del({
                url: u.ANM.GUILD_PRODUCT_LISTINGS(t, n),
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
                    url: u.ANM.GUILD_PRODUCT_LISTINGS(t),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    c = async (t, n) => {
        try {
            return (
                await (0, l.Kb)({
                    url: u.ANM.GUILD_PRODUCT_LISTINGS(t, n),
                    rejectWithError: !1
                })
            ).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    },
    d = async (t) => {
        let { guildId: n, productId: e, attachmentId: l } = t;
        try {
            return (
                await i.tn.post({
                    url: u.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, e, l),
                    rejectWithError: !1
                })
            ).body;
        } catch (t) {
            throw new r.Hx(t);
        }
    };
