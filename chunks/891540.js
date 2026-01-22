n.d(t, {
    A: () => h,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(536194);

function o(e, t, n) {
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
n(436317);
let l = new Set(),
    c = {};

function u(e) {
    let { location: t } = e;
    if (l.has(t)) return !1;
    l.add(t);
}

function d(e) {
    let { location: t, enabled: n } = e;
    c[t] = n;
}

function f(e) {
    let { location: t } = e;
    if (null == c[t]) return !1;
    delete c[t];
}

function p(e) {
    let { hiddenHotspots: t } = e;
    l = new Set(t);
}
class _ extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e &&
            (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)),
            null != e.hotspotOverrides && (c = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && c[e];
        return !s.P.isDisallowPopupsSet() && (n || !l.has(e));
    }
    hasHiddenHotspot(e) {
        return l.has(e);
    }
    getHotspotOverride(e) {
        return c[e];
    }
    getState() {
        return {
            hiddenHotspots: l,
            hotspotOverrides: c,
        };
    }
}
o(_, "displayName", "HotspotStore"),
    o(_, "persistKey", "hotspots"),
    o(_, "migrations", [
        (e) => ({
            hiddenHotspots: null != e ? e : [],
            hotspotOverrides: {},
        }),
    ]);
let h = new _(a.h, {
    OVERLAY_INITIALIZE: p,
    HOTSPOT_HIDE: u,
    HOTSPOT_OVERRIDE_SET: d,
    HOTSPOT_OVERRIDE_CLEAR: f,
});
