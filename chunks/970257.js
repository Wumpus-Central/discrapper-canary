n.d(t, {
    a4: () => s,
    vc: () => c
});
var r = n(592125),
    i = n(650774),
    l = n(496675),
    a = n(594174),
    o = n(981631);
function s(e) {
    return (
        null != e &&
        (function (e) {
            if (null == e) return !1;
            let t = e.id,
                n = a.default.getCurrentUser();
            return null != n && n.id !== t && !0 !== e.system;
        })(e.author)
    );
}
function c(e) {
    return (
        null != e &&
        s(e) &&
        (function (e) {
            let t = r.Z.getChannel(e);
            if (null == t) return !1;
            if (t.type === o.d4z.DM || t.type === o.d4z.GROUP_DM) return !0;
            if (l.Z.canWithPartialContext(o.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = i.Z.getMemberCount(t.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
