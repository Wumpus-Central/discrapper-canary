n.d(t, { Z: () => m }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(374023),
    o = n(188785);
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
let u = new Set(),
    c = {};
function d(e) {
    let { location: t } = e;
    if (u.has(t)) return !1;
    u.add(t);
}
function f(e) {
    let { location: t, enabled: n } = e;
    c[t] = n;
}
function _(e) {
    let { location: t } = e;
    if (null == c[t]) return !1;
    delete c[t];
}
function p(e) {
    let { hiddenHotspots: t } = e;
    u = new Set(t);
}
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (c = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && c[e];
        return !(o.a || s.s.isDisallowPopupsSet()) && (n || !u.has(e));
    }
    hasHiddenHotspot(e) {
        return u.has(e);
    }
    getHotspotOverride(e) {
        return c[e];
    }
    getState() {
        return {
            hiddenHotspots: u,
            hotspotOverrides: c
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
let m = new h(a.Z, {
    OVERLAY_INITIALIZE: p,
    HOTSPOT_HIDE: d,
    HOTSPOT_OVERRIDE_SET: f,
    HOTSPOT_OVERRIDE_CLEAR: _
});
