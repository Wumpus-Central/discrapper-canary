n.d(t, {
    Fi: () => c,
    a4: () => u,
    vc: () => f
});
var r = n(592125),
    i = n(650774),
    o = n(496675),
    a = n(594174),
    s = n(981631);
let l = 50;
function c(e) {
    if (null == e) return !1;
    let t = e.id,
        n = a.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function u(e) {
    return null != e && c(e.author);
}
function d(e) {
    let t = r.Z.getChannel(e);
    if (null == t) return !1;
    if (t.type === s.d4z.DM || t.type === s.d4z.GROUP_DM) return !0;
    if (o.Z.canWithPartialContext(s.Plq.MANAGE_MESSAGES, { channelId: e })) {
        let e = i.Z.getMemberCount(t.getGuildId());
        return null != e && e >= l;
    }
    return !1;
}
function f(e) {
    return null != e && u(e) && d(e.getChannelId());
}
