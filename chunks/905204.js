(n.d(t, { Z: () => x }), n(472816), n(794429), n(539854), n(388685));
var l = n(73800),
    r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(570140),
    s = n(724213),
    c = n(9156),
    d = n(630388),
    u = n(823379),
    m = n(549817),
    h = n(45966),
    p = n(526761);
function f(e) {
    o.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
let g = {};
function x(e) {
    let t = (0, a.e7)(
        [h.Z],
        () => {
            var t;
            return null != (t = h.Z.getPendingResponseOptions(e)) ? t : g;
        },
        [e]
    );
    return (
        l.useEffect(() => (f(e), () => f(e)), [e]),
        l.useEffect(() => {
            null != t && 0 !== Object.keys(t).length && m.Z.updateOnboardingResponses(e);
        }, [e, t]),
        {
            handleSelectOption: l.useCallback(
                (t, n, l) => {
                    let r = h.Z.getOnboardingResponses(e),
                        { addedRoleIds: a, removedRoleIds: f } = (function (e, t, n, l) {
                            var r, a, o, s, c;
                            let d = [],
                                m = [];
                            if (e.singleSelect && n) {
                                let n = e.options.find((e) => l.includes(e.id));
                                ((d = i().difference(null != (r = t.roleIds) ? r : [], null != (a = null == n ? void 0 : n.roleIds) ? a : [])), (m = i().difference(null != (o = null == n ? void 0 : n.roleIds) ? o : [], null != (s = t.roleIds) ? s : [])));
                            } else if (n) ((d = null != (c = t.roleIds) ? c : []), (m = []));
                            else {
                                let n = e.options.filter((e) => l.includes(e.id)),
                                    r = n.filter((e) => t.id !== e.id),
                                    a = n
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm),
                                    o = r
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm);
                                ((d = []), (m = i().difference(a, o)));
                            }
                            return {
                                addedRoleIds: d,
                                removedRoleIds: m
                            };
                        })(t, n, l, r),
                        { addedChannelIds: g, removedChannelIds: x } = (function (e) {
                            var t, n, l, r, a;
                            let { guildId: o, prompt: c, option: d, selected: m, responses: p } = e,
                                f = [],
                                g = [];
                            if (c.singleSelect && m) {
                                let e = c.options.find((e) => p.includes(e.id));
                                ((f = i().difference(null != (t = d.channelIds) ? t : [], null != (n = null == e ? void 0 : e.channelIds) ? n : [])), (g = i().difference(null != (l = null == e ? void 0 : e.channelIds) ? l : [], null != (r = d.channelIds) ? r : [])));
                            } else if (m) ((f = null != (a = d.channelIds) ? a : []), (g = []));
                            else {
                                let e = c.options.filter((e) => p.includes(e.id)),
                                    t = e.filter((e) => d.id !== e.id),
                                    n = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    l = t
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                ((f = []), (g = i().difference(n, l)));
                            }
                            return (
                                (0, s.hi)(o) && f.push(...h.Z.getDefaultChannelIds(o)),
                                {
                                    addedChannelIds: f,
                                    removedChannelIds: g
                                }
                            );
                        })({
                            guildId: e,
                            prompt: t,
                            option: n,
                            selected: l,
                            responses: r
                        }),
                        _ = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        ((l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = l));
                                    }));
                            }
                            return e;
                        })(
                            {},
                            g.reduce((t, n) => {
                                let l = c.ZP.getChannelIdFlags(e, n);
                                return ((t[n] = { flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, !0) }), t);
                            }, {}),
                            x.reduce((t, n) => {
                                let l = c.ZP.getChannelIdFlags(e, n);
                                return ((t[n] = { flags: (0, d.mB)(l, p.ic.OPT_IN_ENABLED, !1) }), t);
                            }, {})
                        );
                    (m.Z.selectOption(e, t.id, n.id, l),
                        o.Z.dispatch({
                            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                            guildId: e,
                            overrides: _
                        }),
                        m.Z.updateRolesLocal(e, a, f));
                },
                [e]
            )
        }
    );
}
