n.d(t, { Z: () => A }), n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(704907),
    c = n(581883),
    u = n(70956),
    d = n(926491),
    f = n(526761);
function p(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function h(e, t) {
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
let g = { pendingUsages: [] };
u.Z.Millis.DAY;
let E = 20,
    b = new l.Z({
        computeBonus: () => 100,
        lookupKey: (e) => d.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: E,
    }),
    y = () => {
        d.Z.isLoaded && b.compute();
    },
    O = (e) => {
        let { stickerIds: t } = e;
        null == t ||
            t.forEach((e) => {
                b.track(e),
                    g.pendingUsages.push({
                        key: e,
                        timestamp: Date.now(),
                    });
            }),
            y();
    },
    v = () => {
        y();
    };
function S() {
    var e;
    let t = null == (e = c.Z.frecencyWithoutFetchingLatest.stickerFrecency) ? void 0 : e.stickers;
    if (null == t) return !1;
    b.overwriteHistory(
        a().mapValues(t, (e) => h(_({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        g.pendingUsages,
    );
}
function I(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    g.pendingUsages = [];
}
class T extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z, c.Z), null != e && (g = e), this.syncWith([d.Z], v), this.syncWith([c.Z], S);
    }
    getState() {
        return g;
    }
    hasPendingUsage() {
        return g.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return b;
    }
}
p(T, "displayName", "StickersPersistedStore"), p(T, "persistKey", "StickersPersistedStoreV2");
let A = new T(s.Z, {
    STICKER_TRACK_USAGE: O,
    USER_SETTINGS_PROTO_UPDATE: I,
});
