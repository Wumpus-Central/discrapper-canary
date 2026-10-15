n.d(t, { A: () => E });
var i = n(858899),
    r = n(439372),
    a = n(666860),
    s = n(280450),
    l = n(174459),
    o = n(504049),
    d = n(587426),
    c = n(652215),
    u = n(105292);
class _ extends r.A {
    actions = {
        GUILD_BULK_BAN_FAILED: (e) => {
            ((0, i.P0)({ text: u.intl.string(u.t.mICAWY), variant: "critical" }),
                d.E.getState().clearSelection(e.guildId));
        },
        GUILD_BULK_BAN_UPDATE: (e) => {
            let { bannedUsers: t, failedUsers: n, targetUserIds: r } = e.bulkBan,
                _ = null != r ? r : [...t, ...n];
            (n.length > 0 && 0 === t.length
                ? (0, i.P0)({ text: u.intl.string(u.t.mICAWY), variant: "critical" })
                : ((0, i.P0)({ text: u.intl.string(u.t.AsCe5I), variant: "success" }),
                  l.default.track(c.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                      ...(0, a.H$)(e.guildId),
                      action_type: o.Nj.BAN,
                      target_user_ids: _,
                      mod_user_id: s.default.getId(),
                      successful_user_ids: t,
                      location: "MemberSafetyPageActionNotice",
                  })),
                d.E.getState().clearSelection(e.guildId));
        },
    };
}
let E = new _();
