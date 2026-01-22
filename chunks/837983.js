n.d(t, {
    j_: () => B,
    pd: () => H,
}),
    n(896048),
    n(321073),
    n(747238),
    n(864466),
    n(443073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(485845),
    o = n(994369),
    l = n(311907),
    c = n(155718),
    u = n(887700),
    d = n(26909),
    f = n(264322),
    p = n(240591),
    _ = n(46477),
    h = n(630248),
    m = n(354138),
    g = n(651753),
    E = n(784472),
    b = n(500049),
    y = n(735991),
    O = n(73510);

function A(e) {
    let {
            context: t,
            onlyWithCommands: n,
            includeBuiltIn: i,
            allowFetch: a = !0,
            includeEmbeddedApps: s,
            includeNonEmbeddedApps: o,
        } = e,
        l = "channel" === t.type ? t.channel : void 0,
        u = (0, p.MW)(l, [c.kc.CHAT]).hasBaseAccessPermissions,
        d = (0, f.SD)(t, u, a),
        _ = (0, f.A4)(u, a),
        h = r.useCallback(
            (e) => {
                let t = e.descriptor.application;
                return (
                    null != t &&
                    (!!(s && (0, y.Ag)(t)) ||
                        (null != t && o && !(0, y.Ag)(t) && (!n || Object.keys(e.commands).length > 0)))
                );
            },
            [s, o, n],
        ),
        m = [],
        g = new Set();
    if (null != d.result)
        for (let e of Object.values(d.result.sections)) {
            let t = e.descriptor.application;
            null != t && h(e) && (m.push(t), g.add(t.id));
        }
    if (null != _.result)
        for (let e of Object.values(_.result.sections)) {
            let t = e.descriptor.application;
            null != t && !g.has(t.id) && h(e) && m.push(t);
        }
    return (
        o && i && m.push(y.N3),
        {
            apps: m,
            loading:
                (null == d ? void 0 : d.fetchState.fetching) === !0 ||
                (null == _ ? void 0 : _.fetchState.fetching) === !0,
        }
    );
}

function v(e) {
    var t, n;
    let { context: i, includeBuiltIn: a = !0, allowFetch: s = !0 } = e,
        o = (0, f.SD)(i, !0, s),
        l = (0, f.A4)(!0, s);
    return r.useMemo(() => {
        var e, t, n, r, s;
        let c = null != (e = null == (n = o.result) ? void 0 : n.sections) ? e : {},
            u = null != (t = null == (r = l.result) ? void 0 : r.sections) ? t : {},
            d = [...Object.keys(c), ...Object.keys(u).filter((e) => !(e in c))];
        a && d.push(O.Ik.BUILT_IN);
        let p = [],
            _ = {};
        for (let e of d) {
            let t = (0, f.Sx)(i, e),
                n = null != (s = t.sectionCommands) ? s : [];
            p.push(...n),
                n.forEach((e) => {
                    null != t.descriptor && (_[e.id] = t.descriptor);
                });
        }
        return {
            commands: p,
            commandSectionMap: _,
            loading: !0 === o.fetchState.fetching || !0 === l.fetchState.fetching,
        };
    }, [
        i,
        a,
        o.fetchState.fetching,
        null == (t = o.result) ? void 0 : t.sections,
        l.fetchState.fetching,
        null == (n = l.result) ? void 0 : n.sections,
    ]);
}

function S(e) {
    let t = (0, p.Bh)("channel" === e.type ? e.channel : void 0, [c.kc.CHAT, c.kc.PRIMARY_ENTRY_POINT]);
    return (n) => {
        let { context: r, userId: i, roleIds: a, isImpersonating: s } = t,
            { descriptor: o, sectionCommands: l, isGuildInstalled: c, isUserInstalled: u } = (0, f.Sx)(e, n.id),
            d =
                (null == r ? void 0 : r.guild_id) != null
                    ? _.we(null == o ? void 0 : o.permissions, r.guild_id, i, a, s)
                    : null,
            p =
                (null == r ? void 0 : r.guild_id) != null
                    ? _._W(null == o ? void 0 : o.permissions, r, r.guild_id)
                    : null;
        return (
            null == l ||
            !(l.length > 0) ||
            l.some(
                (e) =>
                    _.zl(e, t, {
                        applicationAllowedForUser: d,
                        applicationAllowedForChannel: p,
                        commandBotId: null == o ? void 0 : o.botId,
                        isGuildInstalled: c,
                        isUserInstalled: u,
                    }) === _.CA.ALLOWED,
            )
        );
    };
}

function I(e) {
    return [T(e), C(e), N(e), R(e)];
}

function T(e) {
    return (t) => (0, y.lq)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
}

function C(e) {
    return (t) => (0, y.lq)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase());
}

function N(e) {
    return (t) => {
        var n, r;
        let i = null == (r = (0, y.u8)(t)) ? void 0 : r.toLocaleLowerCase();
        return null != (n = null == i ? void 0 : i.startsWith(e.toLocaleLowerCase())) && n;
    };
}

function R(e) {
    return (t) => {
        var n, r;
        let i = null == (r = (0, y.u8)(t)) ? void 0 : r.toLocaleLowerCase();
        return null != (n = null == i ? void 0 : i.includes(e.toLocaleLowerCase())) && n;
    };
}

function w(e, t) {
    let n = h.A.getScoreWithoutLoadingLatest(e.id);
    return h.A.getScoreWithoutLoadingLatest(t.id) - n;
}

function P(e, t) {
    let n = (0, y.lq)(e),
        r = (0, y.lq)(t);
    return (0, f.RF)(n, r);
}

function D(e) {
    let t = (0, p.Bh)("channel" === e.type ? e.channel : void 0, [c.kc.CHAT]),
        n = {};
    return (r) => {
        let { context: i, userId: a, roleIds: s, isImpersonating: o } = t;
        if (!(r.applicationId in n)) {
            let { descriptor: t, isGuildInstalled: l, isUserInstalled: c } = (0, f.Sx)(e, r.applicationId),
                u =
                    (null == i ? void 0 : i.guild_id) != null
                        ? _.we(null == t ? void 0 : t.permissions, i.guild_id, a, s, o)
                        : null,
                d =
                    (null == i ? void 0 : i.guild_id) != null
                        ? _._W(null == t ? void 0 : t.permissions, i, i.guild_id)
                        : null;
            n[r.applicationId] = {
                descriptor: t,
                applicationAllowedForUser: u,
                applicationAllowedForChannel: d,
                isGuildInstalled: l,
                isUserInstalled: c,
            };
        }
        let {
            descriptor: l,
            applicationAllowedForChannel: c,
            applicationAllowedForUser: u,
            isGuildInstalled: d,
            isUserInstalled: p,
        } = n[r.applicationId];
        return (
            _.zl(r, t, {
                applicationAllowedForUser: u,
                applicationAllowedForChannel: c,
                commandBotId: null == l ? void 0 : l.botId,
                isGuildInstalled: d,
                isUserInstalled: p,
            }) === _.CA.ALLOWED
        );
    };
}

function x(e) {
    return [L(e), j(e), M(e), k(e), U(e)];
}

function L(e) {
    return (t) => {
        let n = t.untranslatedName,
            r = t.displayName;
        return n.startsWith(e) || r.startsWith(e);
    };
}

function j(e) {
    let t = null == e ? void 0 : e.split(" "),
        n = t[0],
        r = t.slice(1).join(" ");
    return (e) => {
        let t = e.untranslatedName,
            i = e.displayName;
        return (
            !!(
                (t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(r)) ||
                (i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r))
            ) || !1
        );
    };
}

function M(e) {
    return (t) => {
        let n = t.untranslatedName,
            r = t.displayName;
        return n.includes(e) || r.includes(e);
    };
}

function k(e) {
    return (t) => {
        var n;
        for (let { name: r, serverLocalizedName: i } of null != (n = t.options) ? n : [])
            if (
                r.startsWith(e) ||
                "".concat(t.untranslatedName, " ").concat(r).startsWith(e) ||
                (null != t.displayName && "".concat(t.displayName, " ").concat(r).startsWith(e)) ||
                (null != i &&
                    (i.startsWith(e) ||
                        "".concat(t.untranslatedName, " ").concat(i).startsWith(e) ||
                        (null != t.displayName && "".concat(t.displayName, " ").concat(i).startsWith(e))))
            )
                return !0;
        return !1;
    };
}

function U(e) {
    return (t) => {
        var n;
        for (let { name: r, serverLocalizedName: i } of null != (n = t.options) ? n : [])
            if (r.includes(e) || (null == i ? void 0 : i.includes(e))) return !0;
        return !1;
    };
}

function G(e) {
    return [V(e), F];
}

function V(e) {
    return (t, n) => {
        let r = d.Ay.getScoreWithoutLoadingLatest(e, t);
        return d.Ay.getScoreWithoutLoadingLatest(e, n) - r;
    };
}

function F(e, t) {
    return (0, f.RF)(e.displayName, t.displayName);
}

function B(e) {
    let {
        context: t,
        query: n,
        commandLimit: i,
        applicationLimit: s,
        searchesCommands: o = !0,
        searchesBots: l = !0,
        searchesActivities: c = !0,
    } = e;
    n.startsWith("".concat("/")) && (n = n.substring(1));
    let {
            commands: d,
            commandSectionMap: f,
            loading: p,
        } = v({
            context: t,
            includeBuiltIn: !0,
        }),
        { apps: _ } = A({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: c,
            includeNonEmbeddedApps: l,
        }),
        h = (0, u.A)({
            guildId: "channel" === t.type ? t.channel.guild_id : null,
        }),
        m = r.useMemo(
            () =>
                o
                    ? (0, E.V)(d, {
                          limit: i,
                          filterPredicates: [D(t)],
                          bucketPredicates: x(n),
                          sortComparers: G({
                              channel: "channel" === t.type ? t.channel : void 0,
                          }),
                      })
                    : [],
            [o, d, i, t, n],
        ),
        g = r.useMemo(() => {
            if (0 === m.length) return [];
            let e = new Map(_.map((e) => [e.id, e]));
            return a().compact(
                m.map((t) => {
                    var n;
                    let r = e.get(t.applicationId);
                    if (null == r) return null;
                    let i = null != (n = f[t.id]) ? n : null;
                    return {
                        command: t,
                        application: r,
                        section: i,
                    };
                }),
            );
        }, [_, m, f]),
        b = r.useMemo(() => {
            let e = [];
            if (c) {
                let t = new Set(
                    _.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
                e.push(..._),
                    e.push(
                        ...h
                            .filter((e) => {
                                let {
                                    application: { id: n },
                                } = e;
                                return !t.has(n);
                            })
                            .map((e) => {
                                let { application: t } = e;
                                return t;
                            }),
                    );
            } else l && (e = _);
            return (0, E.V)(e, {
                limit: s,
                filterPredicates: [S(t)],
                bucketPredicates: I(n),
                sortComparers: [w, P],
            });
        }, [l, c, s, t, n, _, h]),
        y = g.length > 0,
        O = b.length > 0,
        T = !y && !O;
    return {
        commandResults: g,
        hasCommandResults: y,
        applicationResults: b,
        hasApplicationResults: O,
        isEmptyState: T,
        loading: p && o,
    };
}

function H(e) {
    let { context: t, query: n, fetches: i = !0, pageLimit: a = 1 / 0, entrypoint: c } = e;
    n.startsWith("".concat("/")) && (n = n.substring(1));
    let u = c === b.s4.VOICE,
        d = "channel" === t.type ? t.channel.guild_id : void 0,
        [f, p] = r.useState(1),
        _ = r.useRef(f);
    _.current = f;
    let { fetchState: h, totalPages: E } = (0, l.cf)([g.A], () => {
            var e, t;
            return {
                fetchState: g.A.getFetchState({
                    query: n,
                    guildId: d,
                    page: f,
                    integrationType: s.b.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0,
                    excludeNonEmbeddedApps: u,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                    source: o.V.APP_LAUNCHER,
                }),
                totalPages:
                    null !=
                    (e =
                        null ==
                        (t = g.A.getSearchResults({
                            query: n,
                            guildId: d,
                            page: f,
                            integrationType: s.b.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: u,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: o.V.APP_LAUNCHER,
                        }))
                            ? void 0
                            : t.totalPages)
                        ? e
                        : 0,
            };
        }, [n, d, f, u]),
        y = r.useMemo(
            () =>
                Array.from(
                    {
                        length: h === g.e.FETCHED || h === g.e.ERROR ? f : f - 1,
                    },
                    (e, t) => {
                        var r, i;
                        return null !=
                            (r =
                                null ==
                                (i = g.A.getSearchResults({
                                    query: n,
                                    guildId: d,
                                    page: t + 1,
                                    integrationType: s.b.USER_INSTALL,
                                    minUserInstallCommandCount: 1,
                                    excludeAppsWithCustomInstallUrl: !0,
                                    excludeNonEmbeddedApps: u,
                                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                                    source: o.V.APP_LAUNCHER,
                                }))
                                    ? void 0
                                    : i.results)
                            ? r
                            : [];
                    },
                ),
            [h, d, n, f, u],
        ),
        O = r.useCallback(() => {
            let e = y.length;
            h === g.e.FETCHED &&
                e === _.current &&
                e > 0 &&
                e < E &&
                e < a &&
                y[e - 1].length > 0 &&
                (_.current++, p((e) => e + 1));
        }, [h, a, y, E]),
        A = r.useCallback(
            (e) => {
                let { query: t, page: n, guildId: r } = e;
                m.$P({
                    query: t,
                    guildId: r,
                    options: {
                        page: n,
                        integrationType: s.b.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: u,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.V.APP_LAUNCHER,
                    },
                });
            },
            [u],
        );
    return (
        r.useEffect(() => {
            i &&
                A({
                    query: n,
                    page: f,
                    guildId: d,
                });
        }, [n, d, A, f, i]),
        r.useEffect(() => {
            p(1);
        }, [d, n]),
        {
            fetchState: h,
            applicationResults: y.flat(),
            fetchNextPage: O,
        }
    );
}
n(827669);
