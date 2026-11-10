(r(321073), r(435558));
var i = r(855986),
    a = r(73153),
    o = r(403362),
    _ = r(324580),
    s = r(792996);
let c = null,
    n = [],
    E = [],
    p = {};
class D extends i.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return n;
    }
    getDiscoveryCategories() {
        let t = _.FZ.map((t) => E.find((e) => e.categoryId === t)).filter(o.Vq);
        return [{ categoryId: -1, name: s.intl.string(s.t.Ym2Ri6) }, ...t];
    }
    getClanDiscoveryCategories() {
        let t = _.FZ.map((t) => E.find((e) => e.categoryId === t)).filter(o.Vq);
        return [{ categoryId: -1, name: s.intl.string(s.t.QToH29) }, ...t];
    }
    getAllCategories() {
        return E;
    }
    getFetchedLocale() {
        return c;
    }
    getCategoryName(t) {
        return -1 === t ? s.intl.string(s.t.Ym2Ri6) : p[t];
    }
}
let d = new D(a.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (t) {
        let e,
            { categories: r, locale: i } = t,
            a = [],
            o = [];
        if (
            (r
                .sort((t, e) => (t.name < e.name ? -1 : 1))
                .forEach((t) => {
                    let { id: r, name: i, is_primary: _ } = t;
                    if (0 !== r) {
                        if (13 === r) {
                            e = { categoryId: r, name: i };
                            return;
                        }
                        (!0 === _ && a.push({ categoryId: r, name: i }),
                            o.push({ categoryId: r, name: i }),
                            (p[r] = i));
                    }
                }),
            null != e)
        ) {
            let { categoryId: t, name: r } = e;
            (a.push({ categoryId: t, name: r }), (p[t] = r));
        }
        ((c = i), (n = a), (E = o));
    },
});
r.d(e, {}, { A: d });
