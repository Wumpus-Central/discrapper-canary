i.d(t, { A: () => p });
var l = i(228366),
    d = i(376728),
    n = i(159001),
    a = i(960736),
    c = i(885386),
    s = i(174459),
    u = i(4274),
    g = i(115063),
    _ = i(539895),
    o = i(652215);
let p = {
    acceptInvite(e, t) {
        let i = d.Ay.getInviteContext("Desktop Invite Modal", e),
            s = (0, a.tJ)(),
            o = (0, a.Z1)(),
            p = (0, a.N9)(),
            r = _.A.getInviteKey() ?? e.code;
        d.Ay.acceptInvite({
            inviteKey: r,
            context: { ...i, ...(null != t ? { invite_instance_id: t } : {}) },
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || d.Ay.transitionToInviteSync(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (o) {
                        if (c.$s.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, g.Tb)());
                            t.delete(e.guild.id), c.$s.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, g.Tb)());
                        t.add(e.guild?.id), c.$s.updateSetting(Array.from(t));
                    }
                    if (p) {
                        if (c.JG.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, g.Kk)());
                            t.delete(e.guild.id), c.JG.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, g.Kk)());
                        t.add(e.guild.id), c.JG.updateSetting(Array.from(t));
                    }
                    null != s && s.length > 0 && (0, n.GL)(e.guild.id, { nick: s });
                }
                this.close(e.code);
            },
            (e) => {
                l.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, u.s)(e.code) });
            },
        );
    },
    close(e) {
        let t = e ?? (0, a.p9)(),
            i = (0, a.xD)();
        if ((0, a.jJ)()) {
            let e = (0, a.tJ)(),
                l = (0, a.Z1)(),
                d = (0, a.N9)(),
                n = (0, a.qO)();
            s.default.track(o.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: t,
                guild_id: i,
                nickname_present: null != e && e.length > 0,
                dms_allowed: l,
                activity_status_shown: d,
                changed_from_default: n,
            });
        }
        (0, a.xP)(), l.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t });
    },
};
