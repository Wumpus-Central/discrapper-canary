n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366),
    s = n(381941);
let a = {};
class r extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return a[e];
    }
}
let o = new r(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        null != n && (a[t.id] = { ...n, location: n.location ?? s.Hx.OTHER }),
            null != t.nonce && t.nonce !== t.id && t.nonce in a && delete a[t.nonce];
    },
});
