"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(283047),
    l = n(617617),
    d = n(927813),
    _ = n(750385),
    u = n(355097);
let c = { pendingUsages: [] };
d.A.Millis.DAY;
let E = new o.A({
        computeBonus: () => 100,
        lookupKey: (e) => _.A.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: 20,
    }),
    h = () => {
        _.A.isLoaded && E.compute();
    },
    m = () => {
        h();
    };
function f() {
    let e = l.A.frecencyWithoutFetchingLatest.stickerFrecency?.stickers;
    if (null == e) return !1;
    E.overwriteHistory(
        r().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        c.pendingUsages,
    );
}
class g extends s.Ay.PersistedStore {
    static displayName = "StickersPersistedStore";
    static persistKey = "StickersPersistedStoreV2";
    initialize(e) {
        this.waitFor(_.A, l.A), null != e && (c = e), this.syncWith([_.A], m), this.syncWith([l.A], f);
    }
    getState() {
        return c;
    }
    hasPendingUsage() {
        return c.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return E;
    }
}
let p = new g(a.h, {
    STICKER_TRACK_USAGE: (e) => {
        let { stickerIds: t } = e;
        t?.forEach((e) => {
            E.track(e), c.pendingUsages.push({ key: e, timestamp: Date.now() });
        }),
            h();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== u.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        c.pendingUsages = [];
    },
});
