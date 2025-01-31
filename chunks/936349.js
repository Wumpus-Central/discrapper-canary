n.d(t, { Z: () => h });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(70956);
function u(e, t, n) {
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
let c = {
        preferredRegions: null,
        lastTestTimestamp: null,
        lastGeoRankedOrder: null
    },
    d = c,
    f = 1 * l.Z.Millis.HOUR;
function _(e) {
    e.latencyRankedRegions.length > 0 && ((d.lastGeoRankedOrder = e.geoRankedRegions), (d.preferredRegions = e.latencyRankedRegions)), (d.lastTestTimestamp = Date.now());
}
class p extends (i = s.ZP.DeviceSettingsStore) {
    initialize(e) {
        d = null != e ? e : c;
    }
    shouldIncludePreferredRegion() {
        return null != d.preferredRegions;
    }
    getPreferredRegion() {
        var e, t;
        return null !== (t = null === (e = d.preferredRegions) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null;
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
        return null === d.preferredRegions || !a().isEqual(e, null !== (t = d.lastGeoRankedOrder) && void 0 !== t ? t : []) || Date.now() - (null !== (n = d.lastTestTimestamp) && void 0 !== n ? n : 0) >= f;
    }
}
u(p, 'displayName', 'RTCRegionStore'), u(p, 'persistKey', 'RTCRegionStore'), u(p, 'migrations', [(e) => (e.preferredRegion ? (e.preferredRegions = [e.preferredRegion]) : (e.preferredRegions = null), delete e.preferredRegion, e)]);
let h = new p(o.Z, { RTC_LATENCY_TEST_COMPLETE: _ });
