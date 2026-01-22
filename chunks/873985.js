n.d(t, {
    A: () => h,
}),
    n(747238);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(927813);

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
let u = {
        preferredRegions: null,
        lastTestTimestamp: null,
        lastGeoRankedOrder: null,
    },
    d = u,
    f = +l.A.Millis.HOUR;

function p(e) {
    e.latencyRankedRegions.length > 0 &&
        ((d.lastGeoRankedOrder = e.geoRankedRegions), (d.preferredRegions = e.latencyRankedRegions)),
        (d.lastTestTimestamp = Date.now());
}
class _ extends (r = s.Ay.DeviceSettingsStore) {
    initialize(e) {
        d = null != e ? e : u;
    }
    shouldIncludePreferredRegion() {
        return null != d.preferredRegions;
    }
    getPreferredRegion() {
        var e, t;
        return null != (e = null == (t = d.preferredRegions) ? void 0 : t[0]) ? e : null;
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
        var t, n;
        return (
            null === d.preferredRegions ||
            !a().isEqual(e, null != (t = d.lastGeoRankedOrder) ? t : []) ||
            Date.now() - (null != (n = d.lastTestTimestamp) ? n : 0) >= f
        );
    }
}
c(_, "displayName", "RTCRegionStore"),
    c(_, "persistKey", "RTCRegionStore"),
    c(_, "migrations", [
        (e) => (
            e.preferredRegion ? (e.preferredRegions = [e.preferredRegion]) : (e.preferredRegions = null),
            delete e.preferredRegion,
            e
        ),
    ]);
let h = new _(o.h, {
    RTC_LATENCY_TEST_COMPLETE: p,
});
