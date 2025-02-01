n.d(t, { Z: () => b }), n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(704907),
    u = n(581883),
    c = n(70956),
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
let p = { pendingUsages: [] };
c.Z.Millis.DAY;
let h = 20,
    m = new l.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => d.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: h
    }),
    g = () => {
        d.Z.isLoaded && m.compute();
    },
    E = (e) => {
        let { stickerIds: t } = e;
        null == t ||
            t.forEach((e) => {
                m.track(e),
                    p.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    });
            }),
            g();
    },
    v = () => {
        g();
    };
function y() {
    var e;
    let t = null === (e = u.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
    if (null == t) return !1;
    m.overwriteHistory(
        a().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        p.pendingUsages
    );
}
function I(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    p.pendingUsages = [];
}
class T extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z), null != e && (p = e), this.syncWith([d.Z], v), this.syncWith([u.Z], y);
    }
    getState() {
        return p;
    }
    hasPendingUsage() {
        return p.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return m;
    }
}
_(T, 'displayName', 'StickersPersistedStore'), _(T, 'persistKey', 'StickersPersistedStoreV2');
let b = new T(o.Z, {
    STICKER_TRACK_USAGE: E,
    USER_SETTINGS_PROTO_UPDATE: I
});
