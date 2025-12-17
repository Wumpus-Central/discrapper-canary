n.d(t, { Z: () => g }), n(472816), n(794429), n(539854), n(388685);
var a = n(473749),
    r = n(392711),
    l = n.n(r),
    i = n(95015),
    o = n(442837),
    c = n(570140),
    d = n(724213),
    s = n(9156),
    u = n(823379),
    b = n(549817),
    p = n(45966),
    f = n(526761);
function h(e) {
    c.Z.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e,
    });
}
let m = {};
function g(e) {
    let t = (0, o.e7)([p.Z], () => {
        var t;
        return null != (t = p.Z.getPendingResponseOptions(e)) ? t : m;
    }, [e]);
    return (
        a.useEffect(() => (h(e), () => h(e)), [e]),
        a.useEffect(() => {
            null != t && 0 !== Object.keys(t).length && b.Z.updateOnboardingResponses(e);
        }, [e, t]),
        {
            handleSelectOption: a.useCallback(
                (t, n, a) => {
                    let r = p.Z.getOnboardingResponses(e),
                        { addedRoleIds: o, removedRoleIds: h } = (function (e, t, n, a) {
                            var r, i, o, c, d;
                            let s = [],
                                b = [];
                            if (e.singleSelect && n) {
                                let n = e.options.find((e) => a.includes(e.id));
                                (s = l().difference(
                                    null != (r = t.roleIds) ? r : [],
                                    null != (i = null == n ? void 0 : n.roleIds) ? i : [],
                                )),
                                    (b = l().difference(
                                        null != (o = null == n ? void 0 : n.roleIds) ? o : [],
                                        null != (c = t.roleIds) ? c : [],
                                    ));
                            } else if (n) (s = null != (d = t.roleIds) ? d : []), (b = []);
                            else {
                                let n = e.options.filter((e) => a.includes(e.id)),
                                    r = n.filter((e) => t.id !== e.id),
                                    i = n
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm),
                                    o = r
                                        .map((e) => e.roleIds)
                                        .flat()
                                        .filter(u.lm);
                                (s = []), (b = l().difference(i, o));
                            }
                            return {
                                addedRoleIds: s,
                                removedRoleIds: b,
                            };
                        })(t, n, a, r),
                        { addedChannelIds: m, removedChannelIds: g } = (function (e) {
                            var t, n, a, r, i;
                            let { guildId: o, prompt: c, option: s, selected: b, responses: f } = e,
                                h = [],
                                m = [];
                            if (c.singleSelect && b) {
                                let e = c.options.find((e) => f.includes(e.id));
                                (h = l().difference(
                                    null != (t = s.channelIds) ? t : [],
                                    null != (n = null == e ? void 0 : e.channelIds) ? n : [],
                                )),
                                    (m = l().difference(
                                        null != (a = null == e ? void 0 : e.channelIds) ? a : [],
                                        null != (r = s.channelIds) ? r : [],
                                    ));
                            } else if (b) (h = null != (i = s.channelIds) ? i : []), (m = []);
                            else {
                                let e = c.options.filter((e) => f.includes(e.id)),
                                    t = e.filter((e) => s.id !== e.id),
                                    n = e
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm),
                                    a = t
                                        .map((e) => e.channelIds)
                                        .flat()
                                        .filter(u.lm);
                                (h = []), (m = l().difference(n, a));
                            }
                            return (
                                (0, d.hi)(o) && h.push(...p.Z.getDefaultChannelIds(o)),
                                {
                                    addedChannelIds: h,
                                    removedChannelIds: m,
                                }
                            );
                        })({
                            guildId: e,
                            prompt: t,
                            option: n,
                            selected: a,
                            responses: r,
                        }),
                        x = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })(
                            {},
                            m.reduce((t, n) => {
                                let a = s.ZP.getChannelIdFlags(e, n);
                                return (t[n] = { flags: (0, i.mB)(a, f.ic.OPT_IN_ENABLED, !0) }), t;
                            }, {}),
                            g.reduce((t, n) => {
                                let a = s.ZP.getChannelIdFlags(e, n);
                                return (t[n] = { flags: (0, i.mB)(a, f.ic.OPT_IN_ENABLED, !1) }), t;
                            }, {}),
                        );
                    b.Z.selectOption(e, t.id, n.id, a),
                        c.Z.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: x,
                        }),
                        b.Z.updateRolesLocal(e, o, h);
                },
                [e],
            ),
        }
    );
}
