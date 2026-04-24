n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366),
    a = n(381941);
let r = {};
class s extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return r[e];
    }
}
let o = new s(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        null != n && (r[t.id] = { ...n, location: n.location ?? a.Hx.OTHER }),
            null != t.nonce && t.nonce in r && delete r[t.nonce];
    },
});
