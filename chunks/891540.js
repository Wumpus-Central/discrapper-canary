"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    a = n(536194);
n(436317);
let s = new Set(),
    o = {};
function l(e) {
    let { location: t } = e;
    if (s.has(t)) return !1;
    s.add(t);
}
function u(e) {
    let { location: t, enabled: n } = e;
    o[t] = n;
}
function c(e) {
    let { location: t } = e;
    if (null == o[t]) return !1;
    delete o[t];
}
function d(e) {
    let { hiddenHotspots: t } = e;
    s = new Set(t);
}
class _ extends r.Ay.PersistedStore {
    static displayName = "HotspotStore";
    static persistKey = "hotspots";
    static migrations = [(e) => ({ hiddenHotspots: e ?? [], hotspotOverrides: {} })];
    initialize(e) {
        null != e &&
            (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)),
            null != e.hotspotOverrides && (o = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && o[e];
        return !a.P.isDisallowPopupsSet() && (n || !s.has(e));
    }
    hasHiddenHotspot(e) {
        return s.has(e);
    }
    getHotspotOverride(e) {
        return o[e];
    }
    getState() {
        return { hiddenHotspots: s, hotspotOverrides: o };
    }
}
let f = new _(i.h, { OVERLAY_INITIALIZE: d, HOTSPOT_HIDE: l, HOTSPOT_OVERRIDE_SET: u, HOTSPOT_OVERRIDE_CLEAR: c });
