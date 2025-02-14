t.d(n, { Z: () => f }), t(536091), t(653041), t(47120), t(724458);
var l = t(192379),
    i = t(392711),
    a = t.n(i),
    r = t(442837),
    o = t(570140),
    s = t(724213),
    d = t(9156),
    c = t(630388),
    u = t(823379),
    h = t(549817),
    m = t(45966),
    x = t(526761);
function _(e) {
    o.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
let p = {};
function f(e) {
    let n = (0, r.e7)(
        [m.Z],
        () => {
            var n;
            return null !== (n = m.Z.getPendingResponseOptions(e)) && void 0 !== n ? n : p;
        },
        [e]
    );
    return (
        l.useEffect(() => (_(e), () => _(e)), [e]),
        l.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && h.Z.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: l.useCallback(
                (n, t, l) => {
                    let i = m.Z.getOnboardingResponses(e),
                        { addedRoleIds: r, removedRoleIds: _ } = (function (e, n, t, l) {
                            var i, r, o, s, d;
                            let c = [],
                                h = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => l.includes(e.id));
                                (c = a().difference(null !== (i = n.roleIds) && void 0 !== i ? i : [], null !== (r = null == t ? void 0 : t.roleIds) && void 0 !== r ? r : [])), (h = a().difference(null !== (o = null == t ? void 0 : t.roleIds) && void 0 !== o ? o : [], null !== (s = n.roleIds) && void 0 !== s ? s : []));
                            } else if (t) (c = null !== (d = n.roleIds) && void 0 !== d ? d : []), (h = []);
                            else {
                                let t = e.options.filter((e) => l.includes(e.id)),
                                    i = t.filter((e) => n.id !== e.id),
                                    r = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm),
                                    o = i
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm);
                                (c = []), (h = a().difference(r, o));
                            }
                            return {
                                addedRoleIds: c,
                                removedRoleIds: h
                            };
                        })(n, t, l, i),
                        { addedChannelIds: p, removedChannelIds: f } = (function (e) {
                            var n, t, l, i, r;
                            let { guildId: o, prompt: d, option: c, selected: h, responses: x } = e,
                                _ = [],
                                p = [];
                            if (d.singleSelect && h) {
                                let e = d.options.find((e) => x.includes(e.id));
                                (_ = a().difference(null !== (n = c.channelIds) && void 0 !== n ? n : [], null !== (t = null == e ? void 0 : e.channelIds) && void 0 !== t ? t : [])), (p = a().difference(null !== (l = null == e ? void 0 : e.channelIds) && void 0 !== l ? l : [], null !== (i = c.channelIds) && void 0 !== i ? i : []));
                            } else if (h) (_ = null !== (r = c.channelIds) && void 0 !== r ? r : []), (p = []);
                            else {
                                let e = d.options.filter((e) => x.includes(e.id)),
                                    n = e.filter((e) => c.id !== e.id),
                                    t = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    l = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                (_ = []), (p = a().difference(t, l));
                            }
                            return (
                                (0, s.hi)(o) && _.push(...m.Z.getDefaultChannelIds(o)),
                                {
                                    addedChannelIds: _,
                                    removedChannelIds: p
                                }
                            );
                        })({
                            guildId: e,
                            prompt: n,
                            option: t,
                            selected: l,
                            responses: i
                        }),
                        g = p.reduce((n, t) => {
                            let l = d.ZP.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, c.mB)(l, x.ic.OPT_IN_ENABLED, !0) }), n;
                        }, {}),
                        C = f.reduce((n, t) => {
                            let l = d.ZP.getChannelIdFlags(e, t);
                            return (n[t] = { flags: (0, c.mB)(l, x.ic.OPT_IN_ENABLED, !1) }), n;
                        }, {}),
                        v = {
                            ...g,
                            ...C
                        };
                    h.Z.selectOption(e, n.id, t.id, l),
                        o.Z.dispatch({
                            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                            guildId: e,
                            overrides: v
                        }),
                        h.Z.updateRolesLocal(e, r, _);
                },
                [e]
            )
        }
    );
}
