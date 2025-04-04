n.d(t, { Z: () => A }), n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(911969),
    c = n(704907),
    u = n(317381),
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
    b = { pendingUsages: [] },
    y = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: f.yP
    });
function v(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    b.pendingUsages = [];
}
function O(e) {
    var t;
    let { command: n } = e;
    if (!E.includes(n.type) || (null == (t = u.ZP.getLaunchState(n.applicationId)) ? void 0 : t.isLaunching)) return !1;
    S(n.applicationId);
}
function I(e) {
    let { applicationId: t } = e;
    S(t);
}
function S(e) {
    b.pendingUsages.push({
        key: e,
        timestamp: Date.now()
    }),
        y.track(e),
        y.compute();
}
function T() {
    var e, t;
    let n = null != (t = null == (e = d.Z.frecencyWithoutFetchingLatest.applicationFrecency) ? void 0 : e.applications) ? t : {};
    y.overwriteHistory(
        o().mapValues(n, (e) => g(h({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        b.pendingUsages
    );
}
class N extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (b = e), this.waitFor(u.ZP), this.syncWith([d.Z], T);
    }
    getState() {
        return b;
    }
    hasPendingUsage() {
        return b.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return y;
    }
    getScoreWithoutLoadingLatest(e) {
        var t;
        return null != (t = y.getScore(e)) ? t : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return y.frequently;
    }
}
p(N, 'displayName', 'ApplicationFrecencyStore'), p(N, 'persistKey', 'ApplicationFrecency');
let A = new N(s.Z, {
    APPLICATION_COMMAND_USED: O,
    EMBEDDED_ACTIVITY_OPEN: I,
    USER_SETTINGS_PROTO_UPDATE: v
});
