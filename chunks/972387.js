n.d(t, { A: () => h });
var i = n(73153),
    l = n(846293),
    s = n(159001),
    a = n(960736),
    r = n(253932),
    o = n(954571),
    d = n(4274),
    c = n(115063),
    u = n(652215);
let h = {
    acceptInvite(e, t) {
        let n = l.Ay.getInviteContext("Desktop Invite Modal", e),
            o = (0, a.tJ)(),
            u = (0, a.Z1)(),
            h = (0, a.N9)();
        l.Ay.acceptInvite({
            inviteKey: e.code,
            context: { ...n, ...(null != t ? { invite_instance_id: t } : {}) },
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Ay.transitionToInvite(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (u) {
                        if (r.$s.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, c.Tb)());
                            t.delete(e.guild.id), r.$s.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, c.Tb)());
                        t.add(e.guild?.id), r.$s.updateSetting(Array.from(t));
                    }
                    if (h) {
                        if (r.JG.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, c.Kk)());
                            t.delete(e.guild.id), r.JG.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, c.Kk)());
                        t.add(e.guild.id), r.JG.updateSetting(Array.from(t));
                    }
                    null != o && o.length > 0 && (0, s.GL)(e.guild.id, { nick: o });
                }
                this.close(e.code);
            },
            (e) => {
                i.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, d.s)(e.code) });
            },
        );
    },
    close(e) {
        let t = e ?? (0, a.p9)(),
            n = (0, a.xD)();
        if ((0, a.jJ)()) {
            let e = (0, a.tJ)(),
                i = (0, a.Z1)(),
                l = (0, a.N9)(),
                s = (0, a.qO)();
            o.default.track(u.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: t,
                guild_id: n,
                nickname_present: null != e && e.length > 0,
                dms_allowed: i,
                activity_status_shown: l,
                changed_from_default: s,
            });
        }
        (0, a.xP)(), i.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t });
    },
};
