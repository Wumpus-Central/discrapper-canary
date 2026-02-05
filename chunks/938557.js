n.d(t, { A: () => o });
var l = n(734057),
    a = n(71393),
    s = n(287809),
    i = n(652215);
function r(e) {
    if (!e.isPrivate()) {
        let t = a.A.getGuild(e.guild_id);
        return null != t && t.features.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = s.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function o(e, t) {
    if (!s.default.getCurrentUser()?.isStaff()) return !1;
    let n = l.A.getChannel(e.channel_id);
    return (
        null != n &&
        !!r(n) &&
        t.some((e) => {
            let t = l.A.getChannel(e);
            return !(null == t || t.isPrivate()) && !r(t);
        })
    );
}
