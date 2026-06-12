r.d(t, { A: () => p }), r(321073), r(735438);
var i = r(17928),
    a = r(228366),
    n = r(403362),
    s = r(324580),
    l = r(375708);
let o = null,
    g = [],
    c = [],
    u = {};
class d extends i.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return g;
    }
    getDiscoveryCategories() {
        let e = s.FZ.map((e) => c.find((t) => t.categoryId === e)).filter(n.Vq);
        return [{ categoryId: s.Iq, name: l.intl.string(l.t.Ym2Ri6) }, ...e];
    }
    getClanDiscoveryCategories() {
        let e = s.FZ.map((e) => c.find((t) => t.categoryId === e)).filter(n.Vq);
        return [{ categoryId: s.Iq, name: l.intl.string(l.t.QToH29) }, ...e];
    }
    getAllCategories() {
        return c;
    }
    getFetchedLocale() {
        return o;
    }
    getCategoryName(e) {
        return e === s.Iq ? l.intl.string(l.t.Ym2Ri6) : u[e];
    }
}
let p = new d(a.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: r, locale: i } = e,
            a = [],
            n = [];
        if (
            (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: r, name: i, is_primary: l } = e;
                    if (r !== s.ig) {
                        if (r === s.v) {
                            t = { categoryId: r, name: i };
                            return;
                        }
                        !0 === l && a.push({ categoryId: r, name: i }), n.push({ categoryId: r, name: i }), (u[r] = i);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: r } = t;
            a.push({ categoryId: e, name: r }), (u[e] = r);
        }
        (o = i), (g = a), (c = n);
    },
});
