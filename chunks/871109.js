"use strict";
n.d(t, { A: () => T, e: () => d }), n(321073);
var i,
    r = n(17928),
    a = n(713402),
    s = n(228366),
    l = n(927813),
    o = n(935208),
    d =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
let c = {},
    u = {},
    _ = {},
    E = 10 * l.A.Millis.MINUTE;
function A(e) {
    return `guild:${e}`;
}
function h(e) {
    return `guild:${e}:published`;
}
let I = new a.J(
        (e) => {
            let t = [A(e.guild_id)];
            return e.published && t.push(h(e.guild_id)), t;
        },
        (e) => {
            let t;
            return (t = o.default.extractTimestamp(e.id)), e.published ? -t : -t + 1e12;
        },
    ),
    f = [];
class p extends r.Ay.Store {
    static displayName = "GuildProductsStore";
    getGuildProductsForGuildFetchState(e) {
        return c[e] ?? 0;
    }
    getGuildProduct(e) {
        return I.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? f : I.values(n ? h(e) : A(e));
    }
    getGuildProductFetchState(e) {
        return u[e] ?? 0;
    }
    isGuildProductsCacheExpired(e) {
        return Date.now() - (_[e] ?? 0) > E;
    }
}
let T = new p(s.h, {
    CONNECTION_OPEN: function () {
        I.clear(), (c = {}), (u = {}), (_ = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (c[t] = 1),
            [...I.values(A(t))].forEach((e) => {
                I.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (c[t] = 2),
            (_[t] = Date.now()),
            n.forEach((e) => {
                I.set(e.id, e), (u[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        c[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        I.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        I.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        I.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        u[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (u[t.id] = 2), I.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (u[t] = 2), 404 === n.status && I.delete(t);
    },
});
