n.d(t, { r: () => h });
var i = n(106351),
    s = n(475179),
    r = n(816782),
    l = n(358221),
    a = n(221292),
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
        if (null != t && null != n && n.type === i.d.GUILD_VOICE) return s.Z.updateChatOpen(t, !l.Z.getChatOpen(t)), !1;
        if (null != t && null != n && n.type === i.d.DM) {
            let e = c.ZP.getSection(t, null == n ? void 0 : n.isDM()),
                i = (0, o.Of)(n.getRecipientId()),
                s = e === g.ULH.PROFILE;
            return (
                (0, a.TY)({
                    displayProfile: i,
                    isProfileOpen: !s
                }),
                r.Z.toggleProfilePanelSection(),
                !1
            );
        }
        return r.Z.toggleMembersSection(), !1;
    }
};
