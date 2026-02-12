"use strict";
n.d(t, { A: () => f });
var r = n(397927),
    i = n(439372),
    a = n(58149),
    s = n(961350),
    o = n(954571),
    l = n(504049),
    u = n(225671),
    c = n(652215),
    d = n(985018);
class _ extends i.A {
    actions = {
        GUILD_BULK_BAN_FAILED: (e) => {
            (0, r.showToast)((0, r.createToast)(d.intl.string(d.t.mICAWY), r.ToastType.FAILURE)),
                u.E.getState().clearSelection(e.guildId);
        },
        GUILD_BULK_BAN_UPDATE: (e) => {
            let { bannedUsers: t, failedUsers: n, targetUserIds: i } = e.bulkBan,
                _ = null != i ? i : [...t, ...n];
            n.length > 0 && 0 === t.length
                ? (0, r.showToast)((0, r.createToast)(d.intl.string(d.t.mICAWY), r.ToastType.FAILURE))
                : ((0, r.showToast)((0, r.createToast)(d.intl.string(d.t.AsCe5I), r.ToastType.SUCCESS)),
                  o.default.track(c.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                      ...(0, a.H$)(e.guildId),
                      action_type: l.Nj.BAN,
                      target_user_ids: _,
                      mod_user_id: s.default.getId(),
                      successful_user_ids: t,
                      location: "MemberSafetyPageActionNotice",
                  })),
                u.E.getState().clearSelection(e.guildId);
        },
    };
}
let f = new _();
