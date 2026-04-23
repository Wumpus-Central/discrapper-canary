n.d(t, { A: () => g }), n(321073), n(735438);
var i = n(17928),
    l = n(228366),
    s = n(403362),
    a = n(324580),
    r = n(985018);
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
        let e = a.FZ.map((e) => c.find((t) => t.categoryId === e)).filter(s.Vq);
        return [{ categoryId: a.Iq, name: r.intl.string(r.t.Ym2Ri6) }, ...e];
    }
    getClanDiscoveryCategories() {
        let e = a.FZ.map((e) => c.find((t) => t.categoryId === e)).filter(s.Vq);
        return [{ categoryId: a.Iq, name: r.intl.string(r.t.QToH29) }, ...e];
    }
    getAllCategories() {
        return c;
    }
    getFetchedLocale() {
        return o;
    }
    getCategoryName(e) {
        return e === a.Iq ? r.intl.string(r.t.Ym2Ri6) : u[e];
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
                    let { id: n, name: i, is_primary: r } = e;
                    if (n !== a.ig) {
                        if (n === a.v) {
                            t = { categoryId: n, name: i };
                            return;
                        }
                        !0 === r && l.push({ categoryId: n, name: i }), s.push({ categoryId: n, name: i }), (u[n] = i);
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
