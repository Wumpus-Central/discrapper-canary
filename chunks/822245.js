var i,
    a = r(653041);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(911969),
    d = r(704907),
    f = r(317381),
    p = r(581883),
    h = r(674563),
    _ = r(526761);
function m(e, n, r) {
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
let g = [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT],
    E = { pendingUsages: [] },
    v = new d.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: h.yP
    });
function y(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    if (n !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !r) return !1;
    E.pendingUsages = [];
}
function b(e) {
    var n;
    let { command: r } = e;
    if (!g.includes(r.type) || (null === (n = f.ZP.getLaunchState(r.applicationId)) || void 0 === n ? void 0 : n.isLaunching)) return !1;
    T(r.applicationId);
}
function I(e) {
    let { applicationId: n } = e;
    T(n);
}
function T(e) {
    E.pendingUsages.push({
        key: e,
        timestamp: Date.now()
    }),
        v.track(e),
        v.compute();
}
function S() {
    var e, n;
    let r = null !== (n = null === (e = p.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== n ? n : {};
    v.overwriteHistory(
        s().mapValues(r, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        E.pendingUsages
    );
}
class A extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (E = e), this.waitFor(f.ZP), this.syncWith([p.Z], S);
    }
    getState() {
        return E;
    }
    hasPendingUsage() {
        return E.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return v;
    }
    getScoreWithoutLoadingLatest(e) {
        var n;
        return null !== (n = v.getScore(e)) && void 0 !== n ? n : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return v.frequently;
    }
}
m(A, 'displayName', 'ApplicationFrecencyStore'),
    m(A, 'persistKey', 'ApplicationFrecency'),
    (n.Z = new A(u.Z, {
        APPLICATION_COMMAND_USED: b,
        EMBEDDED_ACTIVITY_OPEN: I,
        USER_SETTINGS_PROTO_UPDATE: y
    }));
