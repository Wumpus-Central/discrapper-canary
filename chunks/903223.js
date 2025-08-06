n.d(t, { Z: () => h });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(430824);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = null,
    d = {};
function f(e) {
    let t = o().sortBy(e.regions, (e) => e.name);
    null != e.guildId ? (d[e.guildId] = t) : (u = t);
}
function _(e) {
    delete d[e.guild.id];
}
class p extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
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
                : o().sample(n)
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
        return null != t ? o().sample(t) : null;
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
c(p, "displayName", "RegionStore");
let h = new p(s.Z, {
    LOAD_REGIONS: f,
    GUILD_DELETE: _,
});
