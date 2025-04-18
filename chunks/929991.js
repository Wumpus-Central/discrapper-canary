n.d(t, {
    FL: () => a,
    a8: () => i,
    rS: () => o
});
var r = n(570140);
function i(e, t, n) {
    r.Z.dispatch({
        type: 'ANALYTICS_FEED_ITEM_SEEN',
        id: e,
        feedItemId: t,
        timestampMillis: n
    });
}
function a(e, t, n) {
    r.Z.dispatch({
        type: 'ANALYTICS_FEED_ITEM_UNSEEN',
        id: e,
        feedItemId: t,
        timestampMillis: n
    });
}
function o(e, t) {
    r.Z.dispatch({
        type: 'ANALYTICS_FEED_FLUSH',
        id: e,
        force: t
    });
}
