n.d(t, { j_: () => I, pd: () => y }), n(321073);
var l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(485845),
    r = n(994369),
    o = n(311907),
    c = n(155718),
    d = n(887700),
    u = n(26909),
    m = n(264322),
    p = n(240591),
    _ = n(46477),
    A = n(630248),
    h = n(354138),
    f = n(651753),
    x = n(784472),
    C = n(500049),
    N = n(735991),
    g = n(73510);
function E(e, t) {
    let n = A.A.getScoreWithoutLoadingLatest(e.id);
    return A.A.getScoreWithoutLoadingLatest(t.id) - n;
}
function v(e, t) {
    let n = (0, N.lq)(e),
        l = (0, N.lq)(t);
    return (0, m.RF)(n, l);
}
function b(e, t) {
    return (0, m.RF)(e.displayName, t.displayName);
}
function I(e) {
    let {
        context: t,
        query: n,
        commandLimit: i,
        applicationLimit: s,
        searchesCommands: r = !0,
        searchesBots: o = !0,
        searchesActivities: A = !0,
    } = e;
    n.startsWith("/") && (n = n.substring(1));
    let {
            commands: h,
            commandSectionMap: f,
            loading: C,
        } = (function (e) {
            let { context: t, includeBuiltIn: n = !0, allowFetch: i = !0 } = e,
                a = (0, m.SD)(t, !0, i),
                s = (0, m.A4)(!0, i);
            return l.useMemo(() => {
                let e = a.result?.sections ?? {},
                    l = s.result?.sections ?? {},
                    i = [...Object.keys(e), ...Object.keys(l).filter((t) => !(t in e))];
                n && i.push(g.Ik.BUILT_IN);
                let r = [],
                    o = {};
                for (let e of i) {
                    let n = (0, m.Sx)(t, e),
                        l = n.sectionCommands ?? [];
                    r.push(...l),
                        l.forEach((e) => {
                            null != n.descriptor && (o[e.id] = n.descriptor);
                        });
                }
                return {
                    commands: r,
                    commandSectionMap: o,
                    loading: !0 === a.fetchState.fetching || !0 === s.fetchState.fetching,
                };
            }, [t, n, a.fetchState.fetching, a.result?.sections, s.fetchState.fetching, s.result?.sections]);
        })({ context: t, includeBuiltIn: !0 }),
        { apps: I } = (function (e) {
            let {
                    context: t,
                    onlyWithCommands: n,
                    includeBuiltIn: i,
                    allowFetch: a = !0,
                    includeEmbeddedApps: s,
                    includeNonEmbeddedApps: r,
                } = e,
                o = "channel" === t.type ? t.channel : void 0,
                d = (0, p.MW)(o, [c.kc.CHAT]).hasBaseAccessPermissions,
                u = (0, m.SD)(t, d, a),
                _ = (0, m.A4)(d, a),
                A = l.useCallback(
                    (e) => {
                        let t = e.descriptor.application;
                        return (
                            null != t &&
                            (!!(s && (0, N.Ag)(t)) ||
                                (null != t && r && !(0, N.Ag)(t) && (!n || Object.keys(e.commands).length > 0)))
                        );
                    },
                    [s, r, n],
                ),
                h = [],
                f = new Set();
            if (null != u.result)
                for (let e of Object.values(u.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && A(e) && (h.push(t), f.add(t.id));
                }
            if (null != _.result)
                for (let e of Object.values(_.result.sections)) {
                    let t = e.descriptor.application;
                    null != t && !f.has(t.id) && A(e) && h.push(t);
                }
            return (
                r && i && h.push(N.N3),
                { apps: h, loading: u?.fetchState.fetching === !0 || _?.fetchState.fetching === !0 }
            );
        })({ context: t, onlyWithCommands: !0, includeBuiltIn: !0, includeEmbeddedApps: A, includeNonEmbeddedApps: o }),
        y = (0, d.A)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
        j = l.useMemo(() => {
            var e, l, a, s, o, d, A;
            let f, C, N, g, E;
            if (!r) return [];
            return (0, x.V)(h, {
                limit: i,
                filterPredicates: [
                    ((f = (0, p.Bh)("channel" === t.type ? t.channel : void 0, [c.kc.CHAT])),
                    (C = {}),
                    (e) => {
                        let { context: n, userId: l, roleIds: i, isImpersonating: a } = f;
                        if (!(e.applicationId in C)) {
                            let {
                                    descriptor: s,
                                    isGuildInstalled: r,
                                    isUserInstalled: o,
                                } = (0, m.Sx)(t, e.applicationId),
                                c = n?.guild_id != null ? _.we(s?.permissions, n.guild_id, l, i, a) : null,
                                d = n?.guild_id != null ? _._W(s?.permissions, n, n.guild_id) : null;
                            C[e.applicationId] = {
                                descriptor: s,
                                applicationAllowedForUser: c,
                                applicationAllowedForChannel: d,
                                isGuildInstalled: r,
                                isUserInstalled: o,
                            };
                        }
                        let {
                            descriptor: s,
                            applicationAllowedForChannel: r,
                            applicationAllowedForUser: o,
                            isGuildInstalled: c,
                            isUserInstalled: d,
                        } = C[e.applicationId];
                        return (
                            _.zl(e, f, {
                                applicationAllowedForUser: o,
                                applicationAllowedForChannel: r,
                                commandBotId: s?.botId,
                                isGuildInstalled: c,
                                isUserInstalled: d,
                            }) === _.CA.ALLOWED
                        );
                    }),
                ],
                bucketPredicates: [
                    ((l = e = n),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.startsWith(l) || n.startsWith(l);
                    }),
                    ((a = e),
                    (g = (N = a?.split(" "))[0]),
                    (E = N.slice(1).join(" ")),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return (
                            !!(
                                (t.startsWith(g) && t.split(" ").slice(1).join(" ").startsWith(E)) ||
                                (n.startsWith(g) && n.split(" ").slice(1).join(" ").startsWith(E))
                            ) || !1
                        );
                    }),
                    ((s = e),
                    (e) => {
                        let t = e.untranslatedName,
                            n = e.displayName;
                        return t.includes(s) || n.includes(s);
                    }),
                    ((o = e),
                    (e) => {
                        for (let { name: t, serverLocalizedName: n } of e.options ?? [])
                            if (
                                t.startsWith(o) ||
                                `${e.untranslatedName} ${t}`.startsWith(o) ||
                                (null != e.displayName && `${e.displayName} ${t}`.startsWith(o)) ||
                                (null != n &&
                                    (n.startsWith(o) ||
                                        `${e.untranslatedName} ${n}`.startsWith(o) ||
                                        (null != e.displayName && `${e.displayName} ${n}`.startsWith(o))))
                            )
                                return !0;
                        return !1;
                    }),
                    ((d = e),
                    (e) => {
                        for (let { name: t, serverLocalizedName: n } of e.options ?? [])
                            if (t.includes(d) || n?.includes(d)) return !0;
                        return !1;
                    }),
                ],
                sortComparers: [
                    ((A = { channel: "channel" === t.type ? t.channel : void 0 }),
                    (e, t) => {
                        let n = u.Ay.getScoreWithoutLoadingLatest(A, e);
                        return u.Ay.getScoreWithoutLoadingLatest(A, t) - n;
                    }),
                    b,
                ],
            });
        }, [r, h, i, t, n]),
        P = l.useMemo(() => {
            if (0 === j.length) return [];
            let e = new Map(I.map((e) => [e.id, e]));
            return a().compact(
                j.map((t) => {
                    let n = e.get(t.applicationId);
                    if (null == n) return null;
                    let l = f[t.id] ?? null;
                    return { command: t, application: n, section: l };
                }),
            );
        }, [I, j, f]),
        T = l.useMemo(() => {
            var e, l, i, a, r;
            let d,
                u = [];
            if (A) {
                let e = new Set(
                    I.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
                u.push(...I),
                    u.push(
                        ...y
                            .filter((t) => {
                                let {
                                    application: { id: n },
                                } = t;
                                return !e.has(n);
                            })
                            .map((e) => {
                                let { application: t } = e;
                                return t;
                            }),
                    );
            } else o && (u = I);
            return (0, x.V)(u, {
                limit: s,
                filterPredicates: [
                    ((d = (0, p.Bh)("channel" === t.type ? t.channel : void 0, [c.kc.CHAT, c.kc.PRIMARY_ENTRY_POINT])),
                    (e) => {
                        let { context: n, userId: l, roleIds: i, isImpersonating: a } = d,
                            {
                                descriptor: s,
                                sectionCommands: r,
                                isGuildInstalled: o,
                                isUserInstalled: c,
                            } = (0, m.Sx)(t, e.id),
                            u = n?.guild_id != null ? _.we(s?.permissions, n.guild_id, l, i, a) : null,
                            p = n?.guild_id != null ? _._W(s?.permissions, n, n.guild_id) : null;
                        return (
                            null == r ||
                            !(r.length > 0) ||
                            r.some(
                                (e) =>
                                    _.zl(e, d, {
                                        applicationAllowedForUser: u,
                                        applicationAllowedForChannel: p,
                                        commandBotId: s?.botId,
                                        isGuildInstalled: o,
                                        isUserInstalled: c,
                                    }) === _.CA.ALLOWED,
                            )
                        );
                    }),
                ],
                bucketPredicates: [
                    ((l = e = n), (e) => (0, N.lq)(e).toLocaleLowerCase().startsWith(l.toLocaleLowerCase())),
                    ((i = e), (e) => (0, N.lq)(e).toLocaleLowerCase().includes(i.toLocaleLowerCase())),
                    ((a = e),
                    (e) => {
                        let t = (0, N.u8)(e)?.toLocaleLowerCase();
                        return t?.startsWith(a.toLocaleLowerCase()) ?? !1;
                    }),
                    ((r = e),
                    (e) => {
                        let t = (0, N.u8)(e)?.toLocaleLowerCase();
                        return t?.includes(r.toLocaleLowerCase()) ?? !1;
                    }),
                ],
                sortComparers: [E, v],
            });
        }, [o, A, s, t, n, I, y]),
        L = P.length > 0,
        S = T.length > 0;
    return {
        commandResults: P,
        hasCommandResults: L,
        applicationResults: T,
        hasApplicationResults: S,
        isEmptyState: !L && !S,
        loading: C && r,
    };
}
function y(e) {
    let { context: t, query: n, fetches: i = !0, pageLimit: a = 1 / 0, entrypoint: c } = e;
    n.startsWith("/") && (n = n.substring(1));
    let d = c === C.s4.VOICE,
        u = "channel" === t.type ? t.channel.guild_id : void 0,
        [m, p] = l.useState(1),
        _ = l.useRef(m);
    _.current = m;
    let { fetchState: A, totalPages: x } = (0, o.cf)(
            [f.A],
            () => ({
                fetchState: f.A.getFetchState({
                    query: n,
                    guildId: u,
                    page: m,
                    integrationType: s.b.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0,
                    excludeNonEmbeddedApps: d,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                    source: r.V.APP_LAUNCHER,
                }),
                totalPages:
                    f.A.getSearchResults({
                        query: n,
                        guildId: u,
                        page: m,
                        integrationType: s.b.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: r.V.APP_LAUNCHER,
                    })?.totalPages ?? 0,
            }),
            [n, u, m, d],
        ),
        N = l.useMemo(
            () =>
                Array.from(
                    { length: A === f.e.FETCHED || A === f.e.ERROR ? m : m - 1 },
                    (e, t) =>
                        f.A.getSearchResults({
                            query: n,
                            guildId: u,
                            page: t + 1,
                            integrationType: s.b.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: d,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: r.V.APP_LAUNCHER,
                        })?.results ?? [],
                ),
            [A, u, n, m, d],
        ),
        g = l.useCallback(() => {
            let e = N.length;
            A === f.e.FETCHED &&
                e === _.current &&
                e > 0 &&
                e < x &&
                e < a &&
                N[e - 1].length > 0 &&
                (_.current++, p((e) => e + 1));
        }, [A, a, N, x]),
        E = l.useCallback(
            (e) => {
                let { query: t, page: n, guildId: l } = e;
                h.$P({
                    query: t,
                    guildId: l,
                    options: {
                        page: n,
                        integrationType: s.b.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: d,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: r.V.APP_LAUNCHER,
                    },
                });
            },
            [d],
        );
    return (
        l.useEffect(() => {
            i && E({ query: n, page: m, guildId: u });
        }, [n, u, E, m, i]),
        l.useEffect(() => {
            p(1);
        }, [u, n]),
        { fetchState: A, applicationResults: N.flat(), fetchNextPage: g }
    );
}
n(827669);
