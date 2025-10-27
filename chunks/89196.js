r.d(t, { Z: () => u }), r(388685);
var n,
    i = r(442837),
    l = r(570140);
function s(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let a = { sentGifts: {} };
function c(e, t) {
    return "".concat(e, ":").concat(t);
}
class o extends (n = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && ((a = e), this.cleanupExpiredGifts());
    }
    getState() {
        return a;
    }
    hasSentGift(e, t) {
        let r = c(e, t),
            n = a.sentGifts[r];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let r = c(e, t),
            n = a.sentGifts[r];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, r] of Object.entries(a.sentGifts)) new Date(r.expiresAt) < e && delete a.sentGifts[t];
    }
}
s(o, "displayName", "SentGiftsStore"), s(o, "persistKey", "SentGiftsStore");
let u = new o(l.Z, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = c(e.skuId, e.recipientId),
            r = new Date(),
            n = new Date(r.getTime() + 172800000);
        a.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: r.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
