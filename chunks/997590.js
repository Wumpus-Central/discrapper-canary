r.d(t, { A: () => h }), r(321073), r(735438);
var i = r(311907),
    a = r(73153),
    s = r(403362),
    n = r(324580),
    o = r(985018);
let l = null,
    c = [],
    _ = [],
    d = {};
class E extends i.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return c;
    }
    getDiscoveryCategories() {
        let e = n.FZ.map((e) => _.find((t) => t.categoryId === e)).filter(s.Vq);
        return [{ categoryId: n.Iq, name: o.intl.string(o.t.Ym2Ri6) }, ...e];
    }
    getClanDiscoveryCategories() {
        let e = n.FZ.map((e) => _.find((t) => t.categoryId === e)).filter(s.Vq);
        return [{ categoryId: n.Iq, name: o.intl.string(o.t.QToH29) }, ...e];
    }
    getAllCategories() {
        return _;
    }
    getFetchedLocale() {
        return l;
    }
    getCategoryName(e) {
        return e === n.Iq ? o.intl.string(o.t.Ym2Ri6) : d[e];
    }
}
let h = new E(a.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: r, locale: i } = e,
            a = [],
            s = [];
        if (
            (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: r, name: i, is_primary: o } = e;
                    if (r !== n.ig) {
                        if (r === n.v) {
                            t = { categoryId: r, name: i };
                            return;
                        }
                        !0 === o && a.push({ categoryId: r, name: i }), s.push({ categoryId: r, name: i }), (d[r] = i);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: r } = t;
            a.push({ categoryId: e, name: r }), (d[e] = r);
        }
        (l = i), (c = a), (_ = s);
    },
});
