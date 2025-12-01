n.d(t, { r: () => _ });
var r = n(106351),
    i = n(475179),
    a = n(816782),
    o = n(358221),
    s = n(221292),
    l = n(687158),
    c = n(433355),
    u = n(592125),
    d = n(944486),
    f = n(914010),
    p = n(981631);
let _ = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = f.Z.getGuildId(),
            t = d.Z.getChannelId(e),
            n = u.Z.getChannel(t);
        if (null != t && null != n && n.type === r.d.GUILD_VOICE) return i.Z.updateChatOpen(t, !o.Z.getChatOpen(t)), !1;
        if (null != t && null != n && n.type === r.d.DM) {
            let e = c.ZP.getSection(t, null == n ? void 0 : n.isDM()),
                r = (0, l.Of)(n.getRecipientId()),
                i = e === p.ULH.PROFILE;
            return (
                (0, s.TY)({
                    displayProfile: r,
                    isProfileOpen: !i,
                }),
                a.Z.toggleUserProfileSidebarSection(),
                !1
            );
        }
        return a.Z.toggleMembersSection(), !1;
    },
};
