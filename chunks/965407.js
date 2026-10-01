t.d(n, { A: () => o });
var i = t(17928),
    l = t(73153),
    a = t(381941);
let r = {};
class s extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return r[e];
    }
}
let o = new s(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: n, sendMessageOptions: t } = e;
        (null != t && (r[n.id] = { ...t, location: t.location ?? a.Hx.OTHER }),
            null != n.nonce && n.nonce !== n.id && n.nonce in r && delete r[n.nonce]);
    },
});
