"use strict";
n.d(t, { A: () => f });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(927813);
let l = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null },
    u = l,
    c = +o.A.Millis.HOUR;
function d(e) {
    e.latencyRankedRegions.length > 0 &&
        ((u.lastGeoRankedOrder = e.geoRankedRegions), (u.preferredRegions = e.latencyRankedRegions)),
        (u.lastTestTimestamp = Date.now());
}
class _ extends a.Ay.DeviceSettingsStore {
    static displayName = "RTCRegionStore";
    static persistKey = "RTCRegionStore";
    static migrations = [
        (e) => (
            e.preferredRegion ? (e.preferredRegions = [e.preferredRegion]) : (e.preferredRegions = null),
            delete e.preferredRegion,
            e
        ),
    ];
    initialize(e) {
        u = e ?? l;
    }
    shouldIncludePreferredRegion() {
        return null != u.preferredRegions;
    }
    getPreferredRegion() {
        return u.preferredRegions?.[0] ?? null;
    }
    getPreferredRegions() {
        return u.preferredRegions;
    }
    getRegion(e) {
        if (null != e) return e.substr(0, e.search(/\d/));
    }
    getUserAgnosticState() {
        return u;
    }
    shouldPerformLatencyTest(e) {
        return (
            null === u.preferredRegions ||
            !i().isEqual(e, u.lastGeoRankedOrder ?? []) ||
            Date.now() - (u.lastTestTimestamp ?? 0) >= c
        );
    }
}
let f = new _(s.h, { RTC_LATENCY_TEST_COMPLETE: d });
