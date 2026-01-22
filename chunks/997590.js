r.d(t, {
    A: () => h,
}),
    r(638769),
    r(321073),
    r(896048),
    r(735438);
var i,
    n,
    a = r(311907),
    o = r(73153),
    s = r(403362),
    l = r(324580),
    c = r(985018);
let d = null,
    u = [],
    _ = [],
    p = {};
class E extends (i = a.Ay.Store) {
    getPrimaryCategories() {
        return u;
    }
    getDiscoveryCategories() {
        let e = l.FZ.map((e) => _.find((t) => t.categoryId === e)).filter(s.Vq);
        return [
            {
                categoryId: l.Iq,
                name: c.intl.string(c.t.Ym2Ri6),
            },
            ...e,
        ];
    }
    getClanDiscoveryCategories() {
        let e = l.FZ.map((e) => _.find((t) => t.categoryId === e)).filter(s.Vq);
        return [
            {
                categoryId: l.Iq,
                name: c.intl.string(c.t.QToH29),
            },
            ...e,
        ];
    }
    getAllCategories() {
        return _;
    }
    getFetchedLocale() {
        return d;
    }
    getCategoryName(e) {
        return e === l.Iq ? c.intl.string(c.t.Ym2Ri6) : p[e];
    }
}
(n = "displayName") in E
    ? Object.defineProperty(E, n, {
          value: "GuildDiscoveryCategoryStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (E[n] = "GuildDiscoveryCategoryStore");
let h = new E(o.h, {
    GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
        let t,
            { categories: r, locale: i } = e,
            n = [],
            a = [];
        if (
            (r
                .sort((e, t) => (e.name < t.name ? -1 : 1))
                .forEach((e) => {
                    let { id: r, name: i, is_primary: o } = e;
                    if (r !== l.ig) {
                        if (r === l.v) {
                            t = {
                                categoryId: r,
                                name: i,
                            };
                            return;
                        }
                        !0 === o &&
                            n.push({
                                categoryId: r,
                                name: i,
                            }),
                            a.push({
                                categoryId: r,
                                name: i,
                            }),
                            (p[r] = i);
                    }
                }),
            null != t)
        ) {
            let { categoryId: e, name: r } = t;
            n.push({
                categoryId: e,
                name: r,
            }),
                (p[e] = r);
        }
        (d = i), (u = n), (_ = a);
    },
});
