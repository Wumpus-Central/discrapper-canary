n.d(t, { Z: () => h }), n(301563);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(70956);
function c(e, t, n) {
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
let u = {
        preferredRegions: null,
        lastTestTimestamp: null,
        lastGeoRankedOrder: null
    },
    d = u,
    f = +l.Z.Millis.HOUR;
function _(e) {
    e.latencyRankedRegions.length > 0 && ((d.lastGeoRankedOrder = e.geoRankedRegions), (d.preferredRegions = e.latencyRankedRegions)), (d.lastTestTimestamp = Date.now());
}
class p extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        d = null != e ? e : u;
    }
    shouldIncludePreferredRegion() {
        return null != d.preferredRegions;
    }
    getPreferredRegion() {
        var e, t;
        return null != (t = null == (e = d.preferredRegions) ? void 0 : e[0]) ? t : null;
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
        return null === d.preferredRegions || !o().isEqual(e, null != (t = d.lastGeoRankedOrder) ? t : []) || Date.now() - (null != (n = d.lastTestTimestamp) ? n : 0) >= f;
    }
}
c(p, 'displayName', 'RTCRegionStore'), c(p, 'persistKey', 'RTCRegionStore'), c(p, 'migrations', [(e) => (e.preferredRegion ? (e.preferredRegions = [e.preferredRegion]) : (e.preferredRegions = null), delete e.preferredRegion, e)]);
let h = new p(s.Z, { RTC_LATENCY_TEST_COMPLETE: _ });
