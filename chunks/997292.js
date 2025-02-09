t.d(n, { r: () => b });
var i = t(106351),
    r = t(475179),
    s = t(816782),
    l = t(358221),
    o = t(221292),
    a = t(687158),
    d = t(433355),
    c = t(592125),
    u = t(944486),
    E = t(914010),
    p = t(981631);
let b = {
    binds: ['mod+u'],
    comboKeysBindGlobal: !0,
    action() {
        let e = E.Z.getGuildId(),
            n = u.Z.getChannelId(e),
            t = c.Z.getChannel(n);
        if (null != n && null != t && t.type === i.d.GUILD_VOICE) return r.Z.updateChatOpen(n, !l.Z.getChatOpen(n)), !1;
        if (null != n && null != t && t.type === i.d.DM) {
            let e = d.ZP.getSection(n, null == t ? void 0 : t.isDM()),
                i = (0, a.Of)(t.getRecipientId()),
                r = e === p.ULH.PROFILE;
            return (
                (0, o.TY)({
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
