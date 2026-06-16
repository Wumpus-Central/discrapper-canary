"use strict";
n.d(t, { A: () => _ });
var i = n(228366),
    r = n(376728),
    s = n(159001),
    a = n(960736),
    o = n(885386),
    l = n(174459),
    u = n(4274),
    c = n(115063),
    d = n(652215);
let _ = {
    acceptInvite(e, t) {
        let n = r.Ay.getInviteContext("Desktop Invite Modal", e),
            l = (0, a.tJ)(),
            d = (0, a.Z1)(),
            _ = (0, a.N9)();
        r.Ay.acceptInvite({
            inviteKey: e.code,
            context: { ...n, ...(null != t ? { invite_instance_id: t } : {}) },
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || r.Ay.transitionToInviteSync(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (d) {
                        if (o.$s.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, c.Tb)());
                            t.delete(e.guild.id), o.$s.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, c.Tb)());
                        t.add(e.guild?.id), o.$s.updateSetting(Array.from(t));
                    }
                    if (_) {
                        if (o.JG.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, c.Kk)());
                            t.delete(e.guild.id), o.JG.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, c.Kk)());
                        t.add(e.guild.id), o.JG.updateSetting(Array.from(t));
                    }
                    null != l && l.length > 0 && (0, s.GL)(e.guild.id, { nick: l });
                }
                this.close(e.code);
            },
            (e) => {
                i.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, u.s)(e.code) });
            },
        );
    },
    close(e) {
        let t = e ?? (0, a.p9)(),
            n = (0, a.xD)();
        if ((0, a.jJ)()) {
            let e = (0, a.tJ)(),
                i = (0, a.Z1)(),
                r = (0, a.N9)(),
                s = (0, a.qO)();
            l.default.track(d.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: t,
                guild_id: n,
                nickname_present: null != e && e.length > 0,
                dms_allowed: i,
                activity_status_shown: r,
                changed_from_default: s,
            });
        }
        (0, a.xP)(), i.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t });
    },
};
