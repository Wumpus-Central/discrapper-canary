var l = i(73153),
    n = i(574332),
    d = i(159001),
    a = i(960736),
    u = i(253932),
    s = i(46653),
    r = i(696451),
    g = i(71393),
    c = i(129230),
    o = i(4274),
    _ = i(115063),
    f = i(539895),
    p = i(652215);
i.d(
    t,
    {},
    {
        A: {
            acceptInvite(e, t) {
                let i = n.Ay.getInviteContext("Desktop Invite Modal", e),
                    c = (0, a.tJ)(),
                    p = s.default.getId(),
                    h = (0, a.Z1)(),
                    A = (0, a.N9)(),
                    I = f.A.getInviteKey() ?? e.code;
                n.Ay.acceptInvite({
                    inviteKey: I,
                    context: { ...i, ...(null != t ? { invite_instance_id: t } : {}) },
                    callback: (e) => {
                        null == e ||
                            null == e.guild ||
                            null == e.channel ||
                            __OVERLAY__ ||
                            n.Ay.transitionToInvite(e, { forceTransition: !0 });
                    },
                }).then(
                    () => {
                        if (null != e.guild) {
                            if (h) {
                                if (u.$s.getSetting().includes(e.guild.id)) {
                                    let t = new Set((0, _.Tb)());
                                    (t.delete(e.guild.id), u.$s.updateSetting(Array.from(t)));
                                }
                            } else {
                                let t = new Set((0, _.Tb)());
                                (t.add(e.guild?.id), u.$s.updateSetting(Array.from(t)));
                            }
                            if (A) {
                                if (u.JG.getSetting().includes(e.guild.id)) {
                                    let t = new Set((0, _.Kk)());
                                    (t.delete(e.guild.id), u.JG.updateSetting(Array.from(t)));
                                }
                            } else {
                                let t = new Set((0, _.Kk)());
                                (t.add(e.guild.id), u.JG.updateSetting(Array.from(t)));
                            }
                            null != c &&
                                c.length > 0 &&
                                (function (e, t, i) {
                                    if (s.default.getId() !== i) return;
                                    let l = !1;
                                    r.Ay.addConditionalChangeListener(() => {
                                        if (s.default.getId() !== i) return !1;
                                        if (null != g.A.getGuild(e)) l = !0;
                                        else if (l) return !1;
                                        let n = r.Ay.getSelfMember(e);
                                        return null == n || !0 === n.isPending || ((0, d.GL)(e, { nick: t }), !1);
                                    });
                                })(e.guild.id, c, p);
                        }
                        this.close(e.code);
                    },
                    (e) => {
                        l.h.dispatch({ type: "INVITE_MODAL_ERROR", message: (0, o.s)(e.code) });
                    },
                );
            },
            close(e) {
                let t = e ?? (0, a.p9)(),
                    i = (0, a.xD)();
                if ((0, a.jJ)()) {
                    let e = (0, a.tJ)(),
                        l = (0, a.Z1)(),
                        n = (0, a.N9)(),
                        d = (0, a.qO)();
                    c.default.track(p.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                        invite_code: t,
                        guild_id: i,
                        nickname_present: null != e && e.length > 0,
                        dms_allowed: l,
                        activity_status_shown: n,
                        changed_from_default: d,
                    });
                }
                ((0, a.xP)(), l.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t }));
            },
        },
    },
);
