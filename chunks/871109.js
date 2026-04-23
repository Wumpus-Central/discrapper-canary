u.d(e, { A: () => P, e: () => s }), u(321073);
var i,
    d = u(17928),
    l = u(713402),
    n = u(228366),
    r = u(927813),
    c = u(935208),
    s =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
let E = {},
    C = {},
    a = {},
    o = 10 * r.A.Millis.MINUTE;
function _(t) {
    return `guild:${t}`;
}
function T(t) {
    return `guild:${t}:published`;
}
let D = new l.J(
        (t) => {
            let e = [_(t.guild_id)];
            return t.published && e.push(T(t.guild_id)), e;
        },
        (t) => {
            let e;
            return (e = c.default.extractTimestamp(t.id)), t.published ? -e : -e + 1e12;
        },
    ),
    U = [];
class G extends d.Ay.Store {
    static displayName = "GuildProductsStore";
    getGuildProductsForGuildFetchState(t) {
        return E[t] ?? 0;
    }
    getGuildProduct(t) {
        return D.get(t);
    }
    getGuildProductsForGuild(t, e) {
        let { publishedOnly: u } = e;
        return null == t ? U : D.values(u ? T(t) : _(t));
    }
    getGuildProductFetchState(t) {
        return C[t] ?? 0;
    }
    isGuildProductsCacheExpired(t) {
        return Date.now() - (a[t] ?? 0) > o;
    }
}
let P = new G(n.h, {
    CONNECTION_OPEN: function () {
        D.clear(), (E = {}), (C = {}), (a = {});
    },
    GUILD_PRODUCTS_FETCH: function (t) {
        let { guildId: e } = t;
        (E[e] = 1),
            [...D.values(_(e))].forEach((t) => {
                D.delete(t.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { guildId: e, products: u } = t;
        (E[e] = 2),
            (a[e] = Date.now()),
            u.forEach((t) => {
                D.set(t.id, t), (C[t.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        E[e] = 2;
    },
    GUILD_PRODUCT_CREATE: function (t) {
        let { product: e } = t;
        D.set(e.id, e);
    },
    GUILD_PRODUCT_UPDATE: function (t) {
        let { product: e } = t;
        D.set(e.id, e);
    },
    GUILD_PRODUCT_DELETE: function (t) {
        let { productId: e } = t;
        D.delete(e);
    },
    GUILD_PRODUCT_FETCH: function (t) {
        let { productId: e } = t;
        C[e] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
        let { product: e } = t;
        (C[e.id] = 2), D.set(e.id, e);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (t) {
        let { productId: e, error: u } = t;
        (C[e] = 2), 404 === u.status && D.delete(e);
    },
});
