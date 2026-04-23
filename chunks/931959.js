"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(283047),
    l = n(617617),
    u = n(927813),
    c = n(679382),
    d = n(355097);
let _ = { pendingUsages: [] };
u.A.Millis.DAY;
let f = new o.A({
        computeBonus: () => 100,
        lookupKey: (e) => c.A.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: 20,
    }),
    p = () => {
        c.A.isLoaded && f.compute();
    },
    h = () => {
        p();
    };
function E() {
    let e = l.A.frecencyWithoutFetchingLatest.stickerFrecency?.stickers;
    if (null == e) return !1;
    f.overwriteHistory(
        i().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        _.pendingUsages,
    );
}
class m extends s.Ay.PersistedStore {
    static displayName = "StickersPersistedStore";
    static persistKey = "StickersPersistedStoreV2";
    initialize(e) {
        this.waitFor(c.A, l.A), null != e && (_ = e), this.syncWith([c.A], h), this.syncWith([l.A], E);
    }
    getState() {
        return _;
    }
    hasPendingUsage() {
        return _.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return f;
    }
}
let g = new m(a.h, {
    STICKER_TRACK_USAGE: (e) => {
        let { stickerIds: t } = e;
        t?.forEach((e) => {
            f.track(e), _.pendingUsages.push({ key: e, timestamp: Date.now() });
        }),
            p();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        _.pendingUsages = [];
    },
});
