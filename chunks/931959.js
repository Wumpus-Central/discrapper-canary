n.d(t, { A: () => T }), n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(283047),
    c = n(617617),
    u = n(927813),
    d = n(679382),
    f = n(355097);
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = { pendingUsages: [] };
u.A.Millis.DAY;
let E = 20,
    b = new l.A({
        computeBonus: () => 100,
        lookupKey: (e) => d.A.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: E,
    }),
    y = () => {
        d.A.isLoaded && b.compute();
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
    A = () => {
        y();
    };
function v() {
    var e;
    let t = null == (e = c.A.frecencyWithoutFetchingLatest.stickerFrecency) ? void 0 : e.stickers;
    if (null == t) return !1;
    b.overwriteHistory(
        a().mapValues(t, (e) => m(_({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        g.pendingUsages,
    );
}
function S(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if (t !== f.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    g.pendingUsages = [];
}
class I extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(d.A, c.A), null != e && (g = e), this.syncWith([d.A], A), this.syncWith([c.A], v);
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
p(I, "displayName", "StickersPersistedStore"), p(I, "persistKey", "StickersPersistedStoreV2");
let T = new I(o.h, {
    STICKER_TRACK_USAGE: O,
    USER_SETTINGS_PROTO_UPDATE: S,
});
