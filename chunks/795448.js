n.d(t, {
    Ni: () => o,
    PV: () => a,
    Zm: () => s,
    d$: () => i,
});
var r = n(570140);
function i() {
    r.Z.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
}
function a(e) {
    r.Z.dispatch({
        type: "MESSAGE_GIFT_INTENT_SHOWN",
        recipientUserId: e,
    });
}
function o(e) {
    r.Z.dispatch({
        type: "GIFT_INTENT_FLOW_PURCHASED_GIFT",
        recipientUserId: e,
    });
}
function s() {
    r.Z.dispatch({ type: "GIFT_UNREAD_NOTIFICATION_DISMISS" });
}
