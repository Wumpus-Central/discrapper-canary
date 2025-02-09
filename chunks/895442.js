n.d(t, { Z: () => o });
var a = n(592125),
    l = n(430824),
    i = n(594174),
    s = n(981631);
function r(e) {
    if (!e.isPrivate()) {
        let t = l.Z.getGuild(e.guild_id);
        return null != t && t.hasFeature(s.oNc.INTERNAL_EMPLOYEE_ONLY);
    }
    return e.recipients.every((e) => {
        let t = i.default.getUser(e);
        return null != t && t.isStaff();
    });
}
function o(e, t) {
    var n;
    if (!(null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff())) return !1;
    let l = a.Z.getChannel(e.channel_id);
    return (
        !!(null != l && r(l)) &&
        t.some((e) => {
            let t = a.Z.getChannel(e);
            return !(null == t || t.isPrivate()) && !r(t);
        })
    );
}
