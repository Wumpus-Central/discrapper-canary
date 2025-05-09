n.d(t, {
    Fi: () => o,
    a4: () => d,
    vc: () => c
});
var i = n(592125),
    r = n(650774),
    l = n(496675),
    a = n(594174),
    u = n(981631);
function o(e) {
    if (null == e) return !1;
    let t = e.id,
        n = a.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function d(e) {
    return null != e && o(e.author);
}
function c(e) {
    return (
        null != e &&
        d(e) &&
        (function (e) {
            let t = i.Z.getChannel(e);
            if (null == t) return !1;
            if (t.type === u.d4z.DM || t.type === u.d4z.GROUP_DM) return !0;
            if (l.Z.canWithPartialContext(u.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = r.Z.getMemberCount(t.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
