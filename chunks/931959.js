n.d(t, { A: () => p }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(283047),
    o = n(617617),
    d = n(927813),
    c = n(750385),
    u = n(355097);
let _ = { pendingUsages: [] };
d.A.Millis.DAY;
let E = new l.A({
    computeBonus: () => 100,
    lookupKey: (e) => c.A.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20,
});
function A() {
    c.A.isLoaded && E.compute();
}
function h() {
    A();
}
function I() {
    let e = o.A.frecencyWithoutFetchingLatest.stickerFrecency?.stickers;
    if (null == e) return !1;
    E.overwriteHistory(
        r().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        _.pendingUsages,
    );
}
class f extends a.Ay.PersistedStore {
    static displayName = "StickersPersistedStore";
    static persistKey = "StickersPersistedStoreV2";
    initialize(e) {
        this.waitFor(c.A, o.A), null != e && (_ = e), this.syncWith([c.A], h), this.syncWith([o.A], I);
    }
    getState() {
        return _;
    }
    hasPendingUsage() {
        return _.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return E;
    }
}
let p = new f(s.h, {
    STICKER_TRACK_USAGE: function (e) {
        let { stickerIds: t } = e;
        t?.forEach((e) => {
            E.track(e), _.pendingUsages.push({ key: e, timestamp: Date.now() });
        }),
            A();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== u.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        _.pendingUsages = [];
    },
});
