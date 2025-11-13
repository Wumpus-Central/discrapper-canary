n.d(t, { Z: () => u });
var i,
    r = n(442837),
    l = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = { toastsEnabledForChannel: {} },
    s = o;
class c extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        s = null != e ? e : o;
    }
    getToastsEnabled(e) {
        var t;
        return null == (t = s.toastsEnabledForChannel[e]) || t;
    }
    getState() {
        return s;
    }
}
a(c, "displayName", "CallChatToastsStore"), a(c, "persistKey", "CallChatToasts");
let u = new c(l.Z, {
    CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
        let { channelId: t, toastsEnabled: n } = e;
        s.toastsEnabledForChannel[t] = n;
    },
    LOGOUT: function () {
        s.toastsEnabledForChannel = {};
    },
});
