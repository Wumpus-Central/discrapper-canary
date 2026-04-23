n.d(t, { A: () => g }), n(321073), n(735438);
var i = n(311907),
    l = n(73153),
    s = n(403362),
    r = n(324580),
    a = n(985018);
let o = null,
    d = [],
    c = [],
    u = {};
class m extends i.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return d;
    }
    getDiscoveryCategories() {
        let e = r.FZ.map((e) => c.find((t) => t.categoryId === e)).filter(s.Vq);
        return [{ categoryId: r.Iq, name: a.intl.string(a.t.Ym2Ri6) }, ...e];
    }
    getClanDiscoveryCategories() {
        let e = r.FZ.map((e) => c.find((t) => t.categoryId === e)).filter(s.Vq);
        return [{ categoryId: r.Iq, name: a.intl.string(a.t.QToH29) }, ...e];
    }
    getAllCategories() {
        return c;
    }
    getFetchedLocale() {
        return o;
    }
    getCategoryName(e) {
        return e === r.Iq ? a.intl.string(a.t.Ym2Ri6) : u[e];
    }
}
let g = new m(l.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: n, locale: i } = e,
            l = [],
            s = [];
        if (
            (n
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: n, name: i, is_primary: a } = e;
                    if (n !== r.ig) {
                        if (n === r.v) {
                            t = { categoryId: n, name: i };
                            return;
                        }
                        !0 === a && l.push({ categoryId: n, name: i }), s.push({ categoryId: n, name: i }), (u[n] = i);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: n } = t;
            l.push({ categoryId: e, name: n }), (u[e] = n);
        }
        (o = i), (d = l), (c = s);
    },
});
