n.d(t, { Z: () => m });
var i,
    l,
    a,
    r = n(392711),
    s = n.n(r),
    o = n(442837),
    c = n(570140),
    d = n(430824);
let u = null,
    h = {};
class p extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
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
                : s().sample(n)
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
        return null != t ? s().sample(t) : null;
    }
    getRandomRegionId() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = this.getRandomRegion(e);
        return null != t ? t.id : null;
    }
    getRegions(e) {
        return null != e ? h[e] : u;
    }
}
(l = 'RegionStore'),
    (i = 'displayName') in p
        ? Object.defineProperty(p, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[i] = l);
let m = new p(c.Z, {
    LOAD_REGIONS: function (e) {
        let t = s().sortBy(e.regions, (e) => e.name);
        null != e.guildId ? (h[e.guildId] = t) : (u = t);
    },
    GUILD_DELETE: function (e) {
        delete h[e.guild.id];
    }
});
