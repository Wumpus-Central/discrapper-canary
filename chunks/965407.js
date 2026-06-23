n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366),
    a = n(381941);
let s = {};
class r extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return s[e];
    }
}
let o = new r(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        null != n && (s[t.id] = { ...n, location: n.location ?? a.Hx.OTHER }),
            null != t.nonce && t.nonce !== t.id && t.nonce in s && delete s[t.nonce];
    },
});
