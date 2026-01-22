n.d(t, { A: () => c });
var r,
    i,
    l = n(311907),
    a = n(73153);
let s = {};
class o extends (i = l.Ay.Store) {
    getSkuIdForChannel(e) {
        return s[e];
    }
}
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "ChannelSKUStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "ChannelSKUStore");
let c = new o(a.h, {
    CONNECTION_OPEN: function () {
        s = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (s[t] = n.sku.id);
    },
});
