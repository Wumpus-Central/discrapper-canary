n.d(t, {
    Fi: () => s,
    a4: () => c,
    vc: () => u
});
var i = n(592125),
    r = n(650774),
    l = n(496675),
    a = n(594174),
    o = n(981631);
function s(e) {
    if (null == e) return !1;
    let t = e.id,
        n = a.default.getCurrentUser();
    return null != n && n.id !== t && !0 !== e.system;
}
function c(e) {
    return null != e && s(e.author);
}
function u(e) {
    return (
        null != e &&
        c(e) &&
        (function (e) {
            let t = i.Z.getChannel(e);
            if (null == t) return !1;
            if (t.type === o.d4z.DM || t.type === o.d4z.GROUP_DM) return !0;
            if (l.Z.canWithPartialContext(o.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = r.Z.getMemberCount(t.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
