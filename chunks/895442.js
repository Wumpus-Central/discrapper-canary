n.d(t, { Z: () => o });
var a = n(592125),
    r = n(430824),
    l = n(594174),
    i = n(981631);
function s(e) {
    if (!e.isPrivate()) {
        let t = r.Z.getGuild(e.guild_id);
        return null != t && t.hasFeature(i.oNc.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = l.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function o(e, t) {
    var n;
    if (!(null == (n = l.default.getCurrentUser()) ? void 0 : n.isStaff())) return !1;
    let r = a.Z.getChannel(e.channel_id);
    return (
        null != r &&
        !!s(r) &&
        t.some((e) => {
            let t = a.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !s(t);
        })
    );
}
