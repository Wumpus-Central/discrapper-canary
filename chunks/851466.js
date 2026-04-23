var i = n(311907),
    r = n(73153);
let a = {};
class l extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return a[e];
    }
}
new l(r.h, {
    CONNECTION_OPEN: function () {
        a = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (a[t] = n.sku.id);
    },
});
