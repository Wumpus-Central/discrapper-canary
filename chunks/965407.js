var i = t(855986),
    l = t(73153),
    a = t(381941);
let o = {};
class r extends i.Ay.Store {
    static displayName = "SendMessageOptionsStore";
    getOptions(e) {
        return o[e];
    }
}
let s = new r(l.h, {
    MESSAGE_CREATE: function (e) {
        let { message: n, sendMessageOptions: t } = e;
        (null != t && (o[n.id] = { ...t, location: t.location ?? a.Hx.OTHER }),
            null != n.nonce && n.nonce !== n.id && n.nonce in o && delete o[n.nonce]);
    },
});
t.d(n, {}, { A: s });
