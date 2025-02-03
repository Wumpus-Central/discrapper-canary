n.d(t, { Z: () => S }), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(911969),
    u = n(704907),
    c = n(317381),
    d = n(581883),
    f = n(674563),
    _ = n(526761);
function p(e, t, n) {
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
let h = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
    m = { pendingUsages: [] },
    g = new u.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: f.yP
    });
function E(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    m.pendingUsages = [];
}
function v(e) {
    var t;
    let { command: n } = e;
    if (!h.includes(n.type) || (null === (t = c.ZP.getLaunchState(n.applicationId)) || void 0 === t ? void 0 : t.isLaunching)) return !1;
    I(n.applicationId);
}
function y(e) {
    let { applicationId: t } = e;
    I(t);
}
function I(e) {
    m.pendingUsages.push({
        key: e,
        timestamp: Date.now()
    }),
        g.track(e),
        g.compute();
}
function b() {
    var e, t;
    let n = null !== (t = null === (e = d.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
    g.overwriteHistory(
        a().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        m.pendingUsages
    );
}
class T extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.waitFor(c.ZP), this.syncWith([d.Z], b);
    }
    getState() {
        return m;
    }
    hasPendingUsage() {
        return m.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return g;
    }
    getScoreWithoutLoadingLatest(e) {
        var t;
        return null !== (t = g.getScore(e)) && void 0 !== t ? t : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return g.frequently;
    }
}
p(T, 'displayName', 'ApplicationFrecencyStore'), p(T, 'persistKey', 'ApplicationFrecency');
let S = new T(o.Z, {
    APPLICATION_COMMAND_USED: v,
    EMBEDDED_ACTIVITY_OPEN: y,
    USER_SETTINGS_PROTO_UPDATE: E
});
