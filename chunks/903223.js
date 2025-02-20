n.d(t, { Z: () => f });
var r,
    i,
    l,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(570140),
    u = n(430824);
let d = null,
    p = {};
class h extends (l = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getOptimalRegion() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = this.getRegions(t);
        return null != n
            ? null !==
                  (e = n.find((e) => {
                      let { optimal: t } = e;
                      return t;
                  })) && void 0 !== e
                ? e
                : a().sample(n)
            : null;
    }
    getOptimalRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getOptimalRegion(e);
        return null != t ? t.id : null;
    }
    getRandomRegion() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRegions(e);
        return null != t ? a().sample(t) : null;
    }
    getRandomRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRandomRegion(e);
        return null != t ? t.id : null;
    }
    getRegions(e) {
        return null != e ? p[e] : d;
    }
}
(i = 'RegionStore'),
    (r = 'displayName') in h
        ? Object.defineProperty(h, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[r] = i);
let f = new h(c.Z, {
    LOAD_REGIONS: function (e) {
        let t = a().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (p[e.guildId] = t) : (d = t);
    },
    GUILD_DELETE: function (e) {
        delete p[e.guild.id];
    }
});
