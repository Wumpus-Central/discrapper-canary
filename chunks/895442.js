n.d(t, { Z: () => o });
var l = n(592125),
    a = n(430824),
    r = n(594174),
    i = n(981631);
function s(e) {
    if (!e.isPrivate()) {
        let t = a.Z.getGuild(e.guild_id);
        return null != t && t.features.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = r.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function o(e, t) {
    var n;
    if (!(null == (n = r.default.getCurrentUser()) ? void 0 : n.isStaff())) return !1;
    let a = l.Z.getChannel(e.channel_id);
    return (
        null != a &&
        !!s(a) &&
        t.some((e) => {
            let t = l.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !s(t);
        })
    );
}
