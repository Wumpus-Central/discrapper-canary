n.d(t, { Z: () => N }), n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(704907),
    c = n(581883),
    u = n(70956),
    d = n(926491),
    f = n(526761);
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
function p(e) {
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
u.Z.Millis.DAY;
let E = 20,
    b = new l.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => d.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: E
    }),
    y = () => {
        d.Z.isLoaded && b.compute();
    },
    v = (e) => {
        let { stickerIds: t } = e;
        null == t ||
            t.forEach((e) => {
                b.track(e),
                    g.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    });
            }),
            y();
    },
    O = () => {
        y();
    };
function I() {
    var e;
    let t = null == (e = c.Z.frecencyWithoutFetchingLatest.stickerFrecency) ? void 0 : e.stickers;
    if (null == t) return !1;
    b.overwriteHistory(
        o().mapValues(t, (e) => m(p({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        g.pendingUsages
    );
}
function S(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    g.pendingUsages = [];
}
class T extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z), null != e && (g = e), this.syncWith([d.Z], O), this.syncWith([c.Z], I);
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
_(T, 'displayName', 'StickersPersistedStore'), _(T, 'persistKey', 'StickersPersistedStoreV2');
let N = new T(s.Z, {
    STICKER_TRACK_USAGE: v,
    USER_SETTINGS_PROTO_UPDATE: S
});
