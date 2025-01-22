var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(570140),
    u = r(70956);
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
let d = {
        preferredRegions: null,
        lastTestTimestamp: null,
        lastGeoRankedOrder: null
    },
    f = d,
    p = 1 * u.Z.Millis.HOUR;
function h(e) {
    e.latencyRankedRegions.length > 0 && ((f.lastGeoRankedOrder = e.geoRankedRegions), (f.preferredRegions = e.latencyRankedRegions)), (f.lastTestTimestamp = Date.now());
}
class _ extends (i = s.ZP.DeviceSettingsStore) {
    initialize(e) {
        f = null != e ? e : d;
    }
    shouldIncludePreferredRegion() {
        return null != f.preferredRegions;
    }
    getPreferredRegion() {
        var e, n;
        return null !== (n = null === (e = f.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null;
    }
    getPreferredRegions() {
        return f.preferredRegions;
    }
    getRegion(e) {
        if (null != e) return e.substr(0, e.search(/\d/));
    }
    getUserAgnosticState() {
        return f;
    }
    shouldPerformLatencyTest(e) {
        var n, r;
        return null === f.preferredRegions || !o().isEqual(e, null !== (n = f.lastGeoRankedOrder) && void 0 !== n ? n : []) || Date.now() - (null !== (r = f.lastTestTimestamp) && void 0 !== r ? r : 0) >= p;
    }
}
c(_, 'displayName', 'RTCRegionStore'), c(_, 'persistKey', 'RTCRegionStore'), c(_, 'migrations', [(e) => (e.preferredRegion ? (e.preferredRegions = [e.preferredRegion]) : (e.preferredRegions = null), delete e.preferredRegion, e)]), (n.Z = new _(l.Z, { RTC_LATENCY_TEST_COMPLETE: h }));
