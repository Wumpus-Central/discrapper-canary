t.d(n, { A: () => o });
var i = t(17928),
    l = t(73153),
    a = t(381941);
let s = {};
class r extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return s[e];
    }
}
let o = new r(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: n, sendMessageOptions: t } = e;
        (null != t && (s[n.id] = { ...t, location: t.location ?? a.Hx.OTHER }),
            null != n.nonce && n.nonce !== n.id && n.nonce in s && delete s[n.nonce]);
    },
});
