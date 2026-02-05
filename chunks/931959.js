"use strict";
n.d(t, { A: () => T }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(283047),
    l = n(617617),
    u = n(927813),
    c = n(679382),
    d = n(355097);
let _ = { pendingUsages: [] };
u.A.Millis.DAY;
let f = 20,
    p = new o.A({
        computeBonus: () => 100,
        lookupKey: (e) => c.A.getStickerById(e),
        afterCompute: () => {},
        numFrequentlyItems: f,
    }),
    h = () => {
        c.A.isLoaded && p.compute();
    },
    m = (e) => {
        let { stickerIds: t } = e;
        t?.forEach((e) => {
            p.track(e), _.pendingUsages.push({ key: e, timestamp: Date.now() });
        }),
            h();
    },
    g = () => {
        h();
    };
function E() {
    let e = l.A.frecencyWithoutFetchingLatest.stickerFrecency?.stickers;
    if (null == e) return !1;
    p.overwriteHistory(
        i().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        _.pendingUsages,
    );
}
function A(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    _.pendingUsages = [];
}
class I extends a.Ay.PersistedStore {
    static displayName = "StickersPersistedStore";
    static persistKey = "StickersPersistedStoreV2";
    initialize(e) {
        this.waitFor(c.A, l.A), null != e && (_ = e), this.syncWith([c.A], g), this.syncWith([l.A], E);
    }
    getState() {
        return _;
    }
    hasPendingUsage() {
        return _.pendingUsages.length > 0;
    }
    get stickerFrecencyWithoutFetchingLatest() {
        return p;
    }
}
let T = new I(s.h, { STICKER_TRACK_USAGE: m, USER_SETTINGS_PROTO_UPDATE: A });
