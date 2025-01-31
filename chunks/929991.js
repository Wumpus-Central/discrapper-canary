n.d(t, {
    FL: () => a,
    a8: () => r,
    rS: () => s
});
var i = n(570140);
function r(e, t, n) {
    i.Z.dispatch({
        type: 'ANALYTICS_FEED_ITEM_SEEN',
        id: e,
        feedItemId: t,
        timestampMillis: n
    });
}
function a(e, t, n) {
    i.Z.dispatch({
        type: 'ANALYTICS_FEED_ITEM_UNSEEN',
        id: e,
        feedItemId: t,
        timestampMillis: n
    });
}
function s(e, t) {
    i.Z.dispatch({
        type: 'ANALYTICS_FEED_FLUSH',
        id: e,
        force: t
    });
}
