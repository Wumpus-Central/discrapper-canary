n.d(t, { A: () => h });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(439372),
    l = n(95561),
    o = n(280450),
    d = n(174459),
    c = n(504049),
    u = n(587426),
    _ = n(652215),
    E = n(375708);
class A extends s.A {
    actions = {
        GUILD_BULK_BAN_FAILED: (e) => {
            (0, i.P0)((0, r.o)(E.intl.string(E.t.mICAWY), a.Ck.FAILURE)), u.E.getState().clearSelection(e.guildId);
        },
        GUILD_BULK_BAN_UPDATE: (e) => {
            let { bannedUsers: t, failedUsers: n, targetUserIds: s } = e.bulkBan,
                A = null != s ? s : [...t, ...n];
            n.length > 0 && 0 === t.length
                ? (0, i.P0)((0, r.o)(E.intl.string(E.t.mICAWY), a.Ck.FAILURE))
                : ((0, i.P0)((0, r.o)(E.intl.string(E.t.AsCe5I), a.Ck.SUCCESS)),
                  d.default.track(_.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                      ...(0, l.H$)(e.guildId),
                      action_type: c.Nj.BAN,
                      target_user_ids: A,
                      mod_user_id: o.default.getId(),
                      successful_user_ids: t,
                      location: "MemberSafetyPageActionNotice",
                  })),
                u.E.getState().clearSelection(e.guildId);
        },
    };
}
let h = new A();
