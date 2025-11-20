t.d(n, { Z: () => _ }), t(472816), t(794429), t(539854), t(388685);
var r = t(473749),
    l = t(392711),
    i = t.n(l),
    a = t(95015),
    o = t(442837),
    s = t(570140),
    c = t(724213),
    d = t(9156),
    u = t(823379),
    p = t(549817),
    h = t(45966),
    m = t(526761);
function f(e) {
    s.Z.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e,
    });
}
let g = {};
function _(e) {
    let n = (0, o.e7)([h.Z], () => {
        var n;
        return null != (n = h.Z.getPendingResponseOptions(e)) ? n : g;
    }, [e]);
    return (
        r.useEffect(() => (f(e), () => f(e)), [e]),
        r.useEffect(() => {
            null != n && 0 !== Object.keys(n).length && p.Z.updateOnboardingResponses(e);
        }, [e, n]),
        {
            handleSelectOption: r.useCallback(
                (n, t, r) => {
                    let l = h.Z.getOnboardingResponses(e),
                        { addedRoleIds: o, removedRoleIds: f } = (function (e, n, t, r) {
                            var l, a, o, s, c;
                            let d = [],
                                p = [];
                            if (e.singleSelect && t) {
                                let t = e.options.find((e) => r.includes(e.id));
                                (d = i().difference(
                                    null != (l = n.roleIds) ? l : [],
                                    null != (a = null == t ? void 0 : t.roleIds) ? a : [],
                                )),
                                    (p = i().difference(
                                        null != (o = null == t ? void 0 : t.roleIds) ? o : [],
                                        null != (s = n.roleIds) ? s : [],
                                    ));
                            } else if (t) (d = null != (c = n.roleIds) ? c : []), (p = []);
                            else {
                                let t = e.options.filter((e) => r.includes(e.id)),
                                    l = t.filter((e) => n.id !== e.id),
                                    a = t
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm),
                                    o = l
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm);
                                (d = []), (p = i().difference(a, o));
                            }
                            return {
                                addedRoleIds: d,
                                removedRoleIds: p,
                            };
                        })(n, t, r, l),
                        { addedChannelIds: g, removedChannelIds: _ } = (function (e) {
                            var n, t, r, l, a;
                            let { guildId: o, prompt: s, option: d, selected: p, responses: m } = e,
                                f = [],
                                g = [];
                            if (s.singleSelect && p) {
                                let e = s.options.find((e) => m.includes(e.id));
                                (f = i().difference(
                                    null != (n = d.channelIds) ? n : [],
                                    null != (t = null == e ? void 0 : e.channelIds) ? t : [],
                                )),
                                    (g = i().difference(
                                        null != (r = null == e ? void 0 : e.channelIds) ? r : [],
                                        null != (l = d.channelIds) ? l : [],
                                    ));
                            } else if (p) (f = null != (a = d.channelIds) ? a : []), (g = []);
                            else {
                                let e = s.options.filter((e) => m.includes(e.id)),
                                    n = e.filter((e) => d.id !== e.id),
                                    t = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    r = n
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                (f = []), (g = i().difference(t, r));
                            }
                            return (
                                (0, c.hi)(o) && f.push(...h.Z.getDefaultChannelIds(o)),
                                {
                                    addedChannelIds: f,
                                    removedChannelIds: g,
                                }
                            );
                        })({
                            guildId: e,
                            prompt: n,
                            option: t,
                            selected: r,
                            responses: l,
                        }),
                        x = (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    r = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (n) {
                                        var r;
                                        (r = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = r);
                                    });
                            }
                            return e;
                        })(
                            {},
                            g.reduce((n, t) => {
                                let r = d.ZP.getChannelIdFlags(e, t);
                                return (n[t] = { flags: (0, a.mB)(r, m.ic.OPT_IN_ENABLED, !0) }), n;
                            }, {}),
                            _.reduce((n, t) => {
                                let r = d.ZP.getChannelIdFlags(e, t);
                                return (n[t] = { flags: (0, a.mB)(r, m.ic.OPT_IN_ENABLED, !1) }), n;
                            }, {}),
                        );
                    p.Z.selectOption(e, n.id, t.id, r),
                        s.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: x,
                        }),
                        p.Z.updateRolesLocal(e, o, f);
                },
                [e],
            ),
        }
    );
}
