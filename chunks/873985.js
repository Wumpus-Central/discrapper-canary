"use strict";
n.d(t, { A: () => c });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(927813);
let l = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null },
    d = l,
    _ = +o.A.Millis.HOUR;
class u extends s.Ay.DeviceSettingsStore {
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
        d = e ?? l;
    }
    shouldIncludePreferredRegion() {
        return null != d.preferredRegions;
    }
    getPreferredRegion() {
        return d.preferredRegions?.[0] ?? null;
    }
    getPreferredRegions() {
        return d.preferredRegions;
    }
    getRegion(e) {
        if (null != e) return e.substr(0, e.search(/\d/));
    }
    getUserAgnosticState() {
        return d;
    }
    shouldPerformLatencyTest(e) {
        return (
            null === d.preferredRegions ||
            !r().isEqual(e, d.lastGeoRankedOrder ?? []) ||
            Date.now() - (d.lastTestTimestamp ?? 0) >= _
        );
    }
}
let c = new u(a.h, {
    RTC_LATENCY_TEST_COMPLETE: function (e) {
        e.latencyRankedRegions.length > 0 &&
            ((d.lastGeoRankedOrder = e.geoRankedRegions), (d.preferredRegions = e.latencyRankedRegions)),
            (d.lastTestTimestamp = Date.now());
    },
});
