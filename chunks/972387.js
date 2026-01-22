n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(73153),
    l = n(846293),
    i = n(159001),
    a = n(960736),
    s = n(253932),
    o = n(954571),
    c = n(4274),
    u = n(115063),
    d = n(652215);
let f = {
    acceptInvite(e) {
        let t = l.Ay.getInviteContext("Desktop Invite Modal", e),
            n = (0, a.tJ)(),
            o = (0, a.Z1)(),
            d = (0, a.N9)();
        l.Ay.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Ay.transitionToInvite(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (o) {
                        if (s.$s.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, u.Tb)());
                            t.delete(e.guild.id), s.$s.updateSetting(Array.from(t));
                        }
                    } else {
                        var t;
                        let n = new Set((0, u.Tb)());
                        n.add(null == (t = e.guild) ? void 0 : t.id), s.$s.updateSetting(Array.from(n));
                    }
                    if (d) {
                        if (s.JG.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, u.Kk)());
                            t.delete(e.guild.id), s.JG.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, u.Kk)());
                        t.add(e.guild.id), s.JG.updateSetting(Array.from(t));
                    }
                    null != n &&
                        n.length > 0 &&
                        (0, i.GL)(e.guild.id, {
                            nick: n,
                        });
                }
                this.close();
            },
            (e) => {
                r.h.dispatch({
                    type: "INVITE_MODAL_ERROR",
                    message: (0, c.s)(e.code),
                });
            },
        );
    },
    close() {
        let e = (0, a.p9)(),
            t = (0, a.xD)();
        if ((0, a.jJ)()) {
            let n = (0, a.tJ)(),
                r = (0, a.Z1)(),
                l = (0, a.N9)(),
                i = (0, a.qO)();
            o.default.track(d.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: r,
                activity_status_shown: l,
                changed_from_default: i,
            });
        }
        (0, a.xP)(),
            r.h.dispatch({
                type: "INVITE_MODAL_CLOSE",
            });
    },
};
