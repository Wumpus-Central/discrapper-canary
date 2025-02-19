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
    p = n(526761);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
    v = { pendingUsages: [] },
    b = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: f.yP
    });
function y(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== p.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    v.pendingUsages = [];
}
function O(e) {
    var t;
    let { command: n } = e;
    if (!E.includes(n.type) || (null === (t = u.ZP.getLaunchState(n.applicationId)) || void 0 === t ? void 0 : t.isLaunching)) return !1;
    I(n.applicationId);
}
function S(e) {
    let { applicationId: t } = e;
    I(t);
}
function I(e) {
    v.pendingUsages.push({
        key: e,
        timestamp: Date.now()
    }),
        b.track(e),
        b.compute();
}
function T() {
    var e, t;
    let n = null !== (t = null === (e = d.Z.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
    b.overwriteHistory(
        o().mapValues(n, (e) => g(h({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        v.pendingUsages
    );
}
class N extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (v = e), this.waitFor(u.ZP), this.syncWith([d.Z], T);
    }
    getState() {
        return v;
    }
    hasPendingUsage() {
        return v.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return b;
    }
    getScoreWithoutLoadingLatest(e) {
        var t;
        return null !== (t = b.getScore(e)) && void 0 !== t ? t : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return b.frequently;
    }
}
_(N, 'displayName', 'ApplicationFrecencyStore'), _(N, 'persistKey', 'ApplicationFrecency');
let A = new N(s.Z, {
    APPLICATION_COMMAND_USED: O,
    EMBEDDED_ACTIVITY_OPEN: S,
    USER_SETTINGS_PROTO_UPDATE: y
});
