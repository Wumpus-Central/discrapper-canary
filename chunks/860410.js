"use strict";
n.d(t, { A: () => h });
var r = n(691540),
    i = n(857250),
    s = n(97483),
    a = n(439372),
    o = n(58149),
    l = n(961350),
    u = n(954571),
    d = n(504049),
    c = n(587426),
    _ = n(652215),
    f = n(985018);
class E extends a.A {
    actions = {
        GUILD_BULK_BAN_FAILED: (e) => {
            (0, r.P0)((0, i.o)(f.intl.string(f.t.mICAWY), s.Ck.FAILURE)), c.E.getState().clearSelection(e.guildId);
        },
        GUILD_BULK_BAN_UPDATE: (e) => {
            let { bannedUsers: t, failedUsers: n, targetUserIds: a } = e.bulkBan,
                E = null != a ? a : [...t, ...n];
            n.length > 0 && 0 === t.length
                ? (0, r.P0)((0, i.o)(f.intl.string(f.t.mICAWY), s.Ck.FAILURE))
                : ((0, r.P0)((0, i.o)(f.intl.string(f.t.AsCe5I), s.Ck.SUCCESS)),
                  u.default.track(_.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                      ...(0, o.H$)(e.guildId),
                      action_type: d.Nj.BAN,
                      target_user_ids: E,
                      mod_user_id: l.default.getId(),
                      successful_user_ids: t,
                      location: "MemberSafetyPageActionNotice",
                  })),
                c.E.getState().clearSelection(e.guildId);
        },
    };
}
let h = new E();
