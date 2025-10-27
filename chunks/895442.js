n.d(t, { Z: () => o });
var a = n(592125),
    l = n(430824),
    r = n(594174),
    i = n(981631);
function s(e) {
    if (!e.isPrivate()) {
        let t = l.Z.getGuild(e.guild_id);
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
    let l = a.Z.getChannel(e.channel_id);
    return (
        null != l &&
        !!s(l) &&
        t.some((e) => {
            let t = a.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !s(t);
        })
    );
}
