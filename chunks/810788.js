n.d(t, { Z: () => m }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(374023),
    s = n(188785);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = new Set(),
    u = {};
function d(e) {
    let { location: t } = e;
    if (c.has(t)) return !1;
    c.add(t);
}
function f(e) {
    let { location: t, enabled: n } = e;
    u[t] = n;
}
function _(e) {
    let { location: t } = e;
    if (null == u[t]) return !1;
    delete u[t];
}
function p(e) {
    let { hiddenHotspots: t } = e;
    c = new Set(t);
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (Array.isArray(e.hiddenHotspots) && (c = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && u[e];
        return !(s.a || a.s.isDisallowPopupsSet()) && (n || !c.has(e));
    }
    hasHiddenHotspot(e) {
        return c.has(e);
    }
    getHotspotOverride(e) {
        return u[e];
    }
    getState() {
        return {
            hiddenHotspots: c,
            hotspotOverrides: u
        };
    }
}
l(h, 'displayName', 'HotspotStore'),
    l(h, 'persistKey', 'hotspots'),
    l(h, 'migrations', [
        (e) => ({
            hiddenHotspots: null != e ? e : [],
            hotspotOverrides: {}
        })
    ]);
let m = new h(o.Z, {
    OVERLAY_INITIALIZE: p,
    HOTSPOT_HIDE: d,
    HOTSPOT_OVERRIDE_SET: f,
    HOTSPOT_OVERRIDE_CLEAR: _
});
