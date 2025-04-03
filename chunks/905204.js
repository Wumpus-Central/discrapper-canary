t.d(n, { Z: () => x }), t(86693), t(536091), t(653041), t(47120);
var r = t(192379),
    l = t(392711),
    a = t.n(l),
    i = t(442837),
    o = t(570140),
    s = t(724213),
    c = t(9156),
    d = t(630388),
    u = t(823379),
    m = t(549817),
    h = t(45966),
    p = t(526761);
function f(e) {
    o.Z.dispatch({
        type: 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES',
        guildId: e
    });
}
let g = {};
function x(e) {
    let n = (0, i.e7)(
        [h.Z],
        () => {
            var n;
            return null != (n = h.Z.getPendingResponseOptions(e)) ? n : g;
        },
        [e]
    );
    return (
        r.useEffect(() => (f(e), () => f(e)), [e]),
        r.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && m.Z.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: r.useCallback(
                (n, t, r) => {
                    let l = h.Z.getOnboardingResponses(e),
                        { addedRoleIds: i, removedRoleIds: f } = (function (e, n, t, r) {
                            var l, i, o, s, c;
                            let d = [],
                                m = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => r.includes(e.id));
                                (d = a().difference(null != (l = n.roleIds) ? l : [], null != (i = null == t ? void 0 : t.roleIds) ? i : [])), (m = a().difference(null != (o = null == t ? void 0 : t.roleIds) ? o : [], null != (s = n.roleIds) ? s : []));
                            } else if (t) (d = null != (c = n.roleIds) ? c : []), (m = []);
                            else {
                                let t = e.options.filter((e) => r.includes(e.id)),
                                    l = t.filter((e) => n.id !== e.id),
                                    i = t
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
                        })(n, t, r, l),
                        { addedChannelIds: g, removedChannelIds: x } = (function (e) {
                            var n, t, r, l, i;
                            let { guildId: o, prompt: c, option: d, selected: m, responses: p } = e,
                                f = [],
                                g = [];
                            if (c.singleSelect && m) {
                                let e = c.options.find((e) => p.includes(e.id));
                                (f = a().difference(null != (n = d.channelIds) ? n : [], null != (t = null == e ? void 0 : e.channelIds) ? t : [])), (g = a().difference(null != (r = null == e ? void 0 : e.channelIds) ? r : [], null != (l = d.channelIds) ? l : []));
                            } else if (m) (f = null != (i = d.channelIds) ? i : []), (g = []);
                            else {
                                let e = c.options.filter((e) => p.includes(e.id)),
                                    n = e.filter((e) => d.id !== e.id),
                                    t = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    r = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                (f = []), (g = a().difference(t, r));
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
                            prompt: n,
                            option: t,
                            selected: r,
                            responses: l
                        }),
                        _ = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (n) {
                                        var r;
                                        (r = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[n] = r);
                                    });
                            }
                            return e;
                        })(
                            {},
                            g.reduce((n, t) => {
                                let r = c.ZP.getChannelIdFlags(e, t);
                                return (n[t] = { flags: (0, d.mB)(r, p.ic.OPT_IN_ENABLED, !0) }), n;
                            }, {}),
                            x.reduce((n, t) => {
                                let r = c.ZP.getChannelIdFlags(e, t);
                                return (n[t] = { flags: (0, d.mB)(r, p.ic.OPT_IN_ENABLED, !1) }), n;
                            }, {})
                        );
                    m.Z.selectOption(e, n.id, t.id, r),
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
