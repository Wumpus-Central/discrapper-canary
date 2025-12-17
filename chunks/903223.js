n.d(t, { Z: () => f });
var i,
    r,
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(570140),
    c = n(430824);
let u = null,
    d = {};
class p extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getOptimalRegion() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = this.getRegions(t);
        return null != n
            ? null !=
              (e = n.find((e) => {
                  let { optimal: t } = e;
                  return t;
              }))
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
        return null != e ? d[e] : u;
    }
}
(i = "displayName") in p
    ? Object.defineProperty(p, i, {
          value: "RegionStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[i] = "RegionStore");
let f = new p(s.Z, {
    LOAD_REGIONS: function (e) {
        let t = a().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (d[e.guildId] = t) : (u = t);
    },
    GUILD_DELETE: function (e) {
        delete d[e.guild.id];
    },
});
