"use strict";
n.d(t, { A: () => E });
var i = n(228366),
    r = n(376728),
    a = n(159001),
    s = n(960736),
    l = n(885386),
    o = n(174459),
    d = n(4274),
    c = n(115063),
    u = n(539895),
    _ = n(652215);
let E = {
    acceptInvite(e, t) {
        let n = r.Ay.getInviteContext("Desktop Invite Modal", e),
            o = (0, s.tJ)(),
            _ = (0, s.Z1)(),
            E = (0, s.N9)(),
            A = u.A.getInviteKey() ?? e.code;
        r.Ay.acceptInvite({
            inviteKey: A,
            context: { ...n, ...(null != t ? { invite_instance_id: t } : {}) },
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || r.Ay.transitionToInviteSync(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (_) {
                        if (l.$s.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, c.Tb)());
                            t.delete(e.guild.id), l.$s.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, c.Tb)());
                        t.add(e.guild?.id), l.$s.updateSetting(Array.from(t));
                    }
                    if (E) {
                        if (l.JG.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, c.Kk)());
                            t.delete(e.guild.id), l.JG.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, c.Kk)());
                        t.add(e.guild.id), l.JG.updateSetting(Array.from(t));
                    }
                    null != o && o.length > 0 && (0, a.GL)(e.guild.id, { nick: o });
                }
                this.close(e.code);
            },
            (e) => {
                i.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, d.s)(e.code) });
            },
        );
    },
    close(e) {
        let t = e ?? (0, s.p9)(),
            n = (0, s.xD)();
        if ((0, s.jJ)()) {
            let e = (0, s.tJ)(),
                i = (0, s.Z1)(),
                r = (0, s.N9)(),
                a = (0, s.qO)();
            o.default.track(_.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: t,
                guild_id: n,
                nickname_present: null != e && e.length > 0,
                dms_allowed: i,
                activity_status_shown: r,
                changed_from_default: a,
            });
        }
        (0, s.xP)(), i.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t });
    },
};
