r.d(e, { A: () => d }), r(321073), r(435558);
var i = r(17928),
    a = r(228366),
    _ = r(403362),
    o = r(324580),
    s = r(375708);
let n = null,
    c = [],
    E = [],
    p = {};
class D extends i.Ay.Store {
    static displayName = "GuildDiscoveryCategoryStore";
    getPrimaryCategories() {
        return c;
    }
    getDiscoveryCategories() {
        let t = o.FZ.map((t) => E.find((e) => e.categoryId === t)).filter(_.Vq);
        return [{ categoryId: o.Iq, name: s.intl.string(s.t.Ym2Ri6) }, ...t];
    }
    getClanDiscoveryCategories() {
        let t = o.FZ.map((t) => E.find((e) => e.categoryId === t)).filter(_.Vq);
        return [{ categoryId: o.Iq, name: s.intl.string(s.t.QToH29) }, ...t];
    }
    getAllCategories() {
        return E;
    }
    getFetchedLocale() {
        return n;
    }
    getCategoryName(t) {
        return t === o.Iq ? s.intl.string(s.t.Ym2Ri6) : p[t];
    }
}
let d = new D(a.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (t) {
        let e,
            { categories: r, locale: i } = t,
            a = [],
            _ = [];
        if (
            (r
                .sort((t, e) => (t.name < e.name ? -1 : 1))
                .forEach((t) => {
                    let { id: r, name: i, is_primary: s } = t;
                    if (r !== o.ig) {
                        if (r === o.v) {
                            e = { categoryId: r, name: i };
                            return;
                        }
                        !0 === s && a.push({ categoryId: r, name: i }), _.push({ categoryId: r, name: i }), (p[r] = i);
                    }
                }),
            null != e)
        ) {
            let { categoryId: t, name: r } = e;
            a.push({ categoryId: t, name: r }), (p[t] = r);
        }
        (n = i), (c = a), (E = _);
    },
});
