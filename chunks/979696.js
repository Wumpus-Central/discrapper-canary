n.d(t, { Z: () => f });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = { toastsEnabledForChannel: {} },
    l = s;
function c(e) {
    let { channelId: t, toastsEnabled: n } = e;
    l.toastsEnabledForChannel[t] = n;
}
function u() {
    l.toastsEnabledForChannel = {};
}
class d extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        l = null != e ? e : s;
    }
    getToastsEnabled(e) {
        var t;
        return null == (t = l.toastsEnabledForChannel[e]) || t;
    }
    getState() {
        return l;
    }
}
(o(d, 'displayName', 'CallChatToastsStore'), o(d, 'persistKey', 'CallChatToasts'));
let f = new d(a.Z, {
    CALL_CHAT_TOASTS_SET_ENABLED: c,
    LOGOUT: u
});
