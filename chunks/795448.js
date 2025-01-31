n.d(t, {
    Gk: () => o,
    Ni: () => s,
    PV: () => a,
    d$: () => r
});
var i = n(570140);
function r() {
    i.Z.dispatch({ type: 'FRIENDS_LIST_GIFT_INTENTS_SHOWN' });
}
function a(e) {
    i.Z.dispatch({
        type: 'MESSAGE_GIFT_INTENT_SHOWN',
        recipientUserId: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'GIFT_INTENT_FLOW_PURCHASED_GIFT',
        recipientUserId: e
    });
}
function o() {
    i.Z.dispatch({ type: 'FRIENDS_TAB_BADGE_DISMISS' });
}
