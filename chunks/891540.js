"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(536194);
n(436317);
let a = new Set(),
    o = {};
class l extends i.Ay.PersistedStore {
    static displayName = "HotspotStore";
    static persistKey = "hotspots";
    static migrations = [(e) => ({ hiddenHotspots: e ?? [], hotspotOverrides: {} })];
    initialize(e) {
        null != e &&
            (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)),
            null != e.hotspotOverrides && (o = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && o[e];
        return !s.P.isDisallowPopupsSet() && (n || !a.has(e));
    }
    hasHiddenHotspot(e) {
        return a.has(e);
    }
    getHotspotOverride(e) {
        return o[e];
    }
    getState() {
        return { hiddenHotspots: a, hotspotOverrides: o };
    }
}
let d = new l(r.h, {
    OVERLAY_INITIALIZE: function (e) {
        let { hiddenHotspots: t } = e;
        a = new Set(t);
    },
    HOTSPOT_HIDE: function (e) {
        let { location: t } = e;
        if (a.has(t)) return !1;
        a.add(t);
    },
    HOTSPOT_OVERRIDE_SET: function (e) {
        let { location: t, enabled: n } = e;
        o[t] = n;
    },
    HOTSPOT_OVERRIDE_CLEAR: function (e) {
        let { location: t } = e;
        if (null == o[t]) return !1;
        delete o[t];
    },
});
