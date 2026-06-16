"use strict";
n.d(t, { A: () => p });
var i = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(439372),
    o = n(95561),
    l = n(495544),
    u = n(174459),
    c = n(504049),
    d = n(587426),
    _ = n(652215),
    h = n(375708);
class f extends a.A {
    actions = {
        GUILD_BULK_BAN_FAILED: (e) => {
            (0, i.P0)((0, r.o)(h.intl.string(h.t.mICAWY), s.Ck.FAILURE)), d.E.getState().clearSelection(e.guildId);
        },
        GUILD_BULK_BAN_UPDATE: (e) => {
            let { bannedUsers: t, failedUsers: n, targetUserIds: a } = e.bulkBan,
                f = null != a ? a : [...t, ...n];
            n.length > 0 && 0 === t.length
                ? (0, i.P0)((0, r.o)(h.intl.string(h.t.mICAWY), s.Ck.FAILURE))
                : ((0, i.P0)((0, r.o)(h.intl.string(h.t.AsCe5I), s.Ck.SUCCESS)),
                  u.default.track(_.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                      ...(0, o.H$)(e.guildId),
                      action_type: c.Nj.BAN,
                      target_user_ids: f,
                      mod_user_id: l.default.getId(),
                      successful_user_ids: t,
                      location: "MemberSafetyPageActionNotice",
                  })),
                d.E.getState().clearSelection(e.guildId);
        },
    };
}
let p = new f();
