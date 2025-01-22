var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(374023),
    u = r(188785);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = new Set(),
    f = {};
function p(e) {
    let { location: n } = e;
    if (d.has(n)) return !1;
    d.add(n);
}
function h(e) {
    let { location: n, enabled: r } = e;
    f[n] = r;
}
function _(e) {
    let { location: n } = e;
    if (null == f[n]) return !1;
    delete f[n];
}
function m(e) {
    let { hiddenHotspots: n } = e;
    d = new Set(n);
}
class g extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (Array.isArray(e.hiddenHotspots) && (d = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (f = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !n && f[e];
        return !(u.a || l.s.isDisallowPopupsSet()) && (r || !d.has(e));
    }
    hasHiddenHotspot(e) {
        return d.has(e);
    }
    getHotspotOverride(e) {
        return f[e];
    }
    getState() {
        return {
            hiddenHotspots: d,
            hotspotOverrides: f
        };
    }
}
c(g, 'displayName', 'HotspotStore'),
    c(g, 'persistKey', 'hotspots'),
    c(g, 'migrations', [
        (e) => ({
            hiddenHotspots: null != e ? e : [],
            hotspotOverrides: {}
        })
    ]),
    (n.Z = new g(s.Z, {
        OVERLAY_INITIALIZE: m,
        HOTSPOT_HIDE: p,
        HOTSPOT_OVERRIDE_SET: h,
        HOTSPOT_OVERRIDE_CLEAR: _
    }));
