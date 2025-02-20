n.d(t, { Z: () => u });
var r,
    i = n(442837),
    l = n(570140);
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
let a = { toastsEnabledForChannel: {} },
    s = a;
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        s = null != e ? e : a;
    }
    getToastsEnabled(e) {
        var t;
        return null === (t = s.toastsEnabledForChannel[e]) || void 0 === t || t;
    }
    getState() {
        return s;
    }
}
o(c, 'displayName', 'CallChatToastsStore'), o(c, 'persistKey', 'CallChatToasts');
let u = new c(l.Z, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: t, toastsEnabled: n } = e;
        s.toastsEnabledForChannel[t] = n;
    },
    LOGOUT: function () {
        s.toastsEnabledForChannel = {};
    }
});
