var d = i(73153),
    l = i(574332),
    n = i(159001),
    a = i(960736),
    s = i(253932),
    c = i(129230),
    u = i(4274),
    g = i(115063),
    o = i(539895),
    _ = i(652215);
i.d(
    t,
    {},
    {
        A: {
            acceptInvite(e, t) {
                let i = l.Ay.getInviteContext("Desktop Invite Modal", e),
                    c = (0, a.tJ)(),
                    _ = (0, a.Z1)(),
                    r = (0, a.N9)(),
                    p = o.A.getInviteKey() ?? e.code;
                l.Ay.acceptInvite({
                    inviteKey: p,
                    context: { ...i, ...(null != t ? { invite_instance_id: t } : {}) },
                    callback: (e) => {
                        null == e ||
                            null == e.guild ||
                            null == e.channel ||
                            __OVERLAY__ ||
                            l.Ay.transitionToInvite(e, { forceTransition: !0 });
                    },
                }).then(
                    () => {
                        if (null != e.guild) {
                            if (_) {
                                if (s.$s.getSetting().includes(e.guild.id)) {
                                    let t = new Set((0, g.Tb)());
                                    (t.delete(e.guild.id), s.$s.updateSetting(Array.from(t)));
                                }
                            } else {
                                let t = new Set((0, g.Tb)());
                                (t.add(e.guild?.id), s.$s.updateSetting(Array.from(t)));
                            }
                            if (r) {
                                if (s.JG.getSetting().includes(e.guild.id)) {
                                    let t = new Set((0, g.Kk)());
                                    (t.delete(e.guild.id), s.JG.updateSetting(Array.from(t)));
                                }
                            } else {
                                let t = new Set((0, g.Kk)());
                                (t.add(e.guild.id), s.JG.updateSetting(Array.from(t)));
                            }
                            null != c && c.length > 0 && (0, n.GL)(e.guild.id, { nick: c });
                        }
                        this.close(e.code);
                    },
                    (e) => {
                        d.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, u.s)(e.code) });
                    },
                );
            },
            close(e) {
                let t = e ?? (0, a.p9)(),
                    i = (0, a.xD)();
                if ((0, a.jJ)()) {
                    let e = (0, a.tJ)(),
                        d = (0, a.Z1)(),
                        l = (0, a.N9)(),
                        n = (0, a.qO)();
                    c.default.track(_.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                        invite_code: t,
                        guild_id: i,
                        nickname_present: null != e && e.length > 0,
                        dms_allowed: d,
                        activity_status_shown: l,
                        changed_from_default: n,
                    });
                }
                ((0, a.xP)(), d.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t }));
            },
        },
    },
);
