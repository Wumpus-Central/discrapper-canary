var i,
    a = r(653041);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(704907),
    d = r(581883),
    f = r(70956),
    p = r(926491),
    h = r(526761);
function _(e, n, r) {
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
let m = { pendingUsages: [] };
f.Z.Millis.DAY;
let g = 20,
    E = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        lookupKey: (e) => p.Z.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: g
    }),
    v = () => {
        p.Z.isLoaded && E.compute();
    },
    y = (e) => {
        let { stickerIds: n } = e;
        null == n ||
            n.forEach((e) => {
                E.track(e),
                    m.pendingUsages.push({
                        key: e,
                        timestamp: Date.now()
                    });
            }),
            v();
    },
    b = () => {
        v();
    };
function I() {
    var e;
    let n = null === (e = d.Z.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
    if (null == n) return !1;
    E.overwriteHistory(
        s().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        m.pendingUsages
    );
}
function T(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    if (n !== h.yP.FRECENCY_AND_FAVORITES_SETTINGS || !r) return !1;
    m.pendingUsages = [];
}
class S extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z), null != e && (m = e), this.syncWith([p.Z], b), this.syncWith([d.Z], I);
    }
    getState() {
        return m;
    }
    hasPendingUsage() {
        return m.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return E;
    }
}
_(S, 'displayName', 'StickersPersistedStore'),
    _(S, 'persistKey', 'StickersPersistedStoreV2'),
    (n.Z = new S(u.Z, {
        STICKER_TRACK_USAGE: y,
        USER_SETTINGS_PROTO_UPDATE: T
    }));
