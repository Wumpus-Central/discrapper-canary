n.d(t, {
    a4: () => o,
    vc: () => d
});
var i = n(592125),
    l = n(650774),
    a = n(496675),
    s = n(594174),
    r = n(981631);
function o(e) {
    return (
        null != e &&
        (function (e) {
            if (null == e) return !1;
            let t = e.id,
                n = s.default.getCurrentUser();
            return null != n && n.id !== t && !0 !== e.system;
        })(e.author)
    );
}
function d(e) {
    return (
        null != e &&
        o(e) &&
        (function (e) {
            let t = i.Z.getChannel(e);
            if (null == t) return !1;
            if (t.type === r.d4z.DM || t.type === r.d4z.GROUP_DM) return !0;
            if (a.Z.canWithPartialContext(r.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = l.Z.getMemberCount(t.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
