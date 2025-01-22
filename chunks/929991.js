r.d(n, {
    FL: function () {
        return o;
    },
    a8: function () {
        return a;
    },
    rS: function () {
        return s;
    }
});
var i = r(570140);
function a(e, n, r) {
    i.Z.dispatch({
        type: 'ANALYTICS_FEED_ITEM_SEEN',
        id: e,
        feedItemId: n,
        timestampMillis: r
    });
}
function o(e, n, r) {
    i.Z.dispatch({
        type: 'ANALYTICS_FEED_ITEM_UNSEEN',
        id: e,
        feedItemId: n,
        timestampMillis: r
    });
}
function s(e, n) {
    i.Z.dispatch({
        type: 'ANALYTICS_FEED_FLUSH',
        id: e,
        force: n
    });
}
