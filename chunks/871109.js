n.d(t, { A: () => x, e: () => d }), n(321073);
var i,
    l = n(311907),
    a = n(713402),
    s = n(73153),
    r = n(927813),
    o = n(661191),
    d =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
let c = {},
    u = {},
    m = {},
    _ = 10 * r.A.Millis.MINUTE;
function h(e) {
    return `guild:${e}`;
}
function p(e) {
    return `guild:${e}:published`;
}
let g = new a.J(
        (e) => {
            let t = [h(e.guild_id)];
            return e.published && t.push(p(e.guild_id)), t;
        },
        (e) => {
            let t;
            return (t = o.default.extractTimestamp(e.id)), e.published ? -t : -t + 1e12;
        },
    ),
    A = [];
class f extends l.Ay.Store {
    static displayName = "GuildProductsStore";
    getGuildProductsForGuildFetchState(e) {
        return c[e] ?? 0;
    }
    getGuildProduct(e) {
        return g.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? A : g.values(n ? p(e) : h(e));
    }
    getGuildProductFetchState(e) {
        return u[e] ?? 0;
    }
    isGuildProductsCacheExpired(e) {
        return Date.now() - (m[e] ?? 0) > _;
    }
}
let x = new f(s.h, {
    CONNECTION_OPEN: function () {
        g.clear(), (c = {}), (u = {}), (m = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (c[t] = 1),
            [...g.values(h(t))].forEach((e) => {
                g.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (c[t] = 2),
            (m[t] = Date.now()),
            n.forEach((e) => {
                g.set(e.id, e), (u[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        c[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        g.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        g.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        g.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        u[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (u[t.id] = 2), g.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (u[t] = 2), 404 === n.status && g.delete(t);
    },
});
