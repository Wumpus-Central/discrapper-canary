"use strict";
n.d(t, { A: () => h });
var i = n(73153),
    s = n(846293),
    l = n(159001),
    r = n(960736),
    a = n(253932),
    o = n(954571),
    c = n(4274),
    d = n(115063),
    u = n(652215);
let h = {
    acceptInvite(e) {
        let t = s.Ay.getInviteContext("Desktop Invite Modal", e),
            n = (0, r.tJ)(),
            o = (0, r.Z1)(),
            u = (0, r.N9)();
        s.Ay.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || s.Ay.transitionToInvite(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (o) {
                        if (a.$s.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, d.Tb)());
                            t.delete(e.guild.id), a.$s.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, d.Tb)());
                        t.add(e.guild?.id), a.$s.updateSetting(Array.from(t));
                    }
                    if (u) {
                        if (a.JG.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, d.Kk)());
                            t.delete(e.guild.id), a.JG.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, d.Kk)());
                        t.add(e.guild.id), a.JG.updateSetting(Array.from(t));
                    }
                    null != n && n.length > 0 && (0, l.GL)(e.guild.id, { nick: n });
                }
                this.close();
            },
            (e) => {
                i.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, c.s)(e.code) });
            },
        );
    },
    close() {
        let e = (0, r.p9)(),
            t = (0, r.xD)();
        if ((0, r.jJ)()) {
            let n = (0, r.tJ)(),
                i = (0, r.Z1)(),
                s = (0, r.N9)(),
                l = (0, r.qO)();
            o.default.track(u.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: i,
                activity_status_shown: s,
                changed_from_default: l,
            });
        }
        (0, r.xP)(), i.h.dispatch({ type: "INVITE_MODAL_CLOSE" });
    },
};
