n.d(t, { Z: () => x }), n(472816), n(794429), n(539854), n(388685);
var r = n(192379),
    l = n(392711),
    a = n.n(l),
    i = n(442837),
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
    let t = (0, i.e7)(
        [h.Z],
        () => {
            var t;
            return null != (t = h.Z.getPendingResponseOptions(e)) ? t : g;
        },
        [e]
    );
    return (
        r.useEffect(() => (f(e), () => f(e)), [e]),
        r.useEffect(() => {
            null != t && 0 !== Object.keys(t).length && m.Z.updateOnboardingResponses(e);
        }, [e, t]),
        {
            handleSelectOption: r.useCallback(
                (t, n, r) => {
                    let l = h.Z.getOnboardingResponses(e),
                        { addedRoleIds: i, removedRoleIds: f } = (function (e, t, n, r) {
                            var l, i, o, s, c;
                            let d = [],
                                m = [];
                            if (e.singleSelect && n) {
                                let n = e.options.find((e) => r.includes(e.id));
                                (d = a().difference(null != (l = t.roleIds) ? l : [], null != (i = null == n ? void 0 : n.roleIds) ? i : [])), (m = a().difference(null != (o = null == n ? void 0 : n.roleIds) ? o : [], null != (s = t.roleIds) ? s : []));
                            } else if (n) (d = null != (c = t.roleIds) ? c : []), (m = []);
                            else {
                                let n = e.options.filter((e) => r.includes(e.id)),
                                    l = n.filter((e) => t.id !== e.id),
                                    i = n
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm),
                                    o = l
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm);
                                (d = []), (m = a().difference(i, o));
                            }
                            return {
                                addedRoleIds: d,
                                removedRoleIds: m
                            };
                        })(t, n, r, l),
                        { addedChannelIds: g, removedChannelIds: x } = (function (e) {
                            var t, n, r, l, i;
                            let { guildId: o, prompt: c, option: d, selected: m, responses: p } = e,
                                f = [],
                                g = [];
                            if (c.singleSelect && m) {
                                let e = c.options.find((e) => p.includes(e.id));
                                (f = a().difference(null != (t = d.channelIds) ? t : [], null != (n = null == e ? void 0 : e.channelIds) ? n : [])), (g = a().difference(null != (r = null == e ? void 0 : e.channelIds) ? r : [], null != (l = d.channelIds) ? l : []));
                            } else if (m) (f = null != (i = d.channelIds) ? i : []), (g = []);
                            else {
                                let e = c.options.filter((e) => p.includes(e.id)),
                                    t = e.filter((e) => d.id !== e.id),
                                    n = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    r = t
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                (f = []), (g = a().difference(n, r));
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
                            selected: r,
                            responses: l
                        }),
                        _ = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {},
                            g.reduce((t, n) => {
                                let r = c.ZP.getChannelIdFlags(e, n);
                                return (t[n] = { flags: (0, d.mB)(r, p.ic.OPT_IN_ENABLED, !0) }), t;
                            }, {}),
                            x.reduce((t, n) => {
                                let r = c.ZP.getChannelIdFlags(e, n);
                                return (t[n] = { flags: (0, d.mB)(r, p.ic.OPT_IN_ENABLED, !1) }), t;
                            }, {})
                        );
                    m.Z.selectOption(e, t.id, n.id, r),
                        o.Z.dispatch({
                            type: 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK',
                            guildId: e,
                            overrides: _
                        }),
                        m.Z.updateRolesLocal(e, i, f);
                },
                [e]
            )
        }
    );
}
