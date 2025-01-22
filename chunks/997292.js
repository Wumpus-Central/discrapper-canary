n.d(t, {
    r: function () {
        return h;
    }
});
var i = n(106351),
    r = n(475179),
    s = n(816782),
    a = n(358221),
    l = n(221292),
    o = n(687158),
    c = n(433355),
    d = n(592125),
    u = n(944486),
    m = n(914010),
    g = n(981631);
let h = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let e = m.Z.getGuildId(),
            t = u.Z.getChannelId(e),
            n = d.Z.getChannel(t);
        if (null != t && null != n && n.type === i.d.GUILD_VOICE) return r.Z.updateChatOpen(t, !a.Z.getChatOpen(t)), !1;
        if (null != t && null != n && n.type === i.d.DM) {
            let e = c.ZP.getSection(t, null == n ? void 0 : n.isDM()),
                i = (0, o.Of)(n.getRecipientId()),
                r = e === g.ULH.PROFILE;
            return (
                (0, l.TY)({
                    displayProfile: i,
                    isProfileOpen: !r
                }),
                s.Z.toggleProfilePanelSection(),
                !1
            );
        }
        return s.Z.toggleMembersSection(), !1;
    }
};
