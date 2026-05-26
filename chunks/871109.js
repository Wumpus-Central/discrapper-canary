"use strict";
n.d(t, { A: () => A, e: () => u }), n(321073);
var i,
    r = n(17928),
    s = n(713402),
    a = n(228366),
    o = n(927813),
    l = n(935208),
    u =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
let c = {},
    d = {},
    _ = {},
    f = 10 * o.A.Millis.MINUTE;
function h(e) {
    return `guild:${e}`;
}
function p(e) {
    return `guild:${e}:published`;
}
let E = new s.J(
        (e) => {
            let t = [h(e.guild_id)];
            return e.published && t.push(p(e.guild_id)), t;
        },
        (e) => {
            let t;
            return (t = l.default.extractTimestamp(e.id)), e.published ? -t : -t + 1e12;
        },
    ),
    m = [];
class g extends r.Ay.Store {
    static displayName = "GuildProductsStore";
    getGuildProductsForGuildFetchState(e) {
        return c[e] ?? 0;
    }
    getGuildProduct(e) {
        return E.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? m : E.values(n ? p(e) : h(e));
    }
    getGuildProductFetchState(e) {
        return d[e] ?? 0;
    }
    isGuildProductsCacheExpired(e) {
        return Date.now() - (_[e] ?? 0) > f;
    }
}
let A = new g(a.h, {
    CONNECTION_OPEN: function () {
        E.clear(), (c = {}), (d = {}), (_ = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (c[t] = 1),
            [...E.values(h(t))].forEach((e) => {
                E.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (c[t] = 2),
            (_[t] = Date.now()),
            n.forEach((e) => {
                E.set(e.id, e), (d[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        c[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        E.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        E.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        E.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        d[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (d[t.id] = 2), E.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (d[t] = 2), 404 === n.status && E.delete(t);
    },
});
