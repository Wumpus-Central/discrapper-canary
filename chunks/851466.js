var i = n(311907),
    a = n(73153);
let r = {};
class l extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return r[e];
    }
}
new l(a.h, {
    CONNECTION_OPEN: function () {
        r = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (r[t] = n.sku.id);
    },
});
