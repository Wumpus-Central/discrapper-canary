n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(442837),
    l = n(570140);
function a(e, t, n) {
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
let o = { sentGifts: {} };
function s(e, t) {
    return "".concat(e, ":").concat(t);
}
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((o = e), this.cleanupExpiredGifts());
    }
    getState() {
        return o;
    }
    hasSentGift(e, t) {
        let n = s(e, t),
            r = o.sentGifts[n];
        return !(null == r || new Date(r.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s(e, t),
            r = o.sentGifts[n];
        return null == r || new Date(r.expiresAt) < new Date() ? null : r;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(o.sentGifts)) new Date(n.expiresAt) < e && delete o.sentGifts[t];
    }
}
a(c, "displayName", "SentGiftsStore"), a(c, "persistKey", "SentGiftsStore");
let u = new c(l.Z, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = s(e.skuId, e.recipientId),
            n = new Date(),
            r = new Date(n.getTime() + 172800000);
        o.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: r.toISOString(),
        };
    },
});
