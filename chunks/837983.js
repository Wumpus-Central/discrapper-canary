"use strict";
n.d(t, { j_: () => j, pd: () => H }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(485845),
    o = n(994369),
    l = n(311907),
    u = n(155718),
    c = n(887700),
    d = n(26909),
    _ = n(264322),
    f = n(240591),
    p = n(46477),
    h = n(630248),
    m = n(354138),
    g = n(651753),
    E = n(784472),
    A = n(500049),
    I = n(735991),
    T = n(73510);
function y(e) {
    let {
            context: t,
            onlyWithCommands: n,
            includeBuiltIn: i,
            allowFetch: a = !0,
            includeEmbeddedApps: s,
            includeNonEmbeddedApps: o,
        } = e,
        l = "channel" === t.type ? t.channel : void 0,
        c = (0, f.MW)(l, [u.kc.CHAT]).hasBaseAccessPermissions,
        d = (0, _.SD)(t, c, a),
        p = (0, _.A4)(c, a),
        h = r.useCallback(
            (e) => {
                let t = e.descriptor.application;
                return (
                    null != t &&
                    (!!(s && (0, I.Ag)(t)) ||
                        (null != t && o && !(0, I.Ag)(t) && (!n || Object.keys(e.commands).length > 0)))
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
    if (null != p.result)
        for (let e of Object.values(p.result.sections)) {
            let t = e.descriptor.application;
            null != t && !g.has(t.id) && h(e) && m.push(t);
        }
    return o && i && m.push(I.N3), { apps: m, loading: d?.fetchState.fetching === !0 || p?.fetchState.fetching === !0 };
}
function S(e) {
    let { context: t, includeBuiltIn: n = !0, allowFetch: i = !0 } = e,
        a = (0, _.SD)(t, !0, i),
        s = (0, _.A4)(!0, i);
    return r.useMemo(() => {
        let e = a.result?.sections ?? {},
            r = s.result?.sections ?? {},
            i = [...Object.keys(e), ...Object.keys(r).filter((t) => !(t in e))];
        n && i.push(T.Ik.BUILT_IN);
        let o = [],
            l = {};
        for (let e of i) {
            let n = (0, _.Sx)(t, e),
                r = n.sectionCommands ?? [];
            o.push(...r),
                r.forEach((e) => {
                    null != n.descriptor && (l[e.id] = n.descriptor);
                });
        }
        return {
            commands: o,
            commandSectionMap: l,
            loading: !0 === a.fetchState.fetching || !0 === s.fetchState.fetching,
        };
    }, [t, n, a.fetchState.fetching, a.result?.sections, s.fetchState.fetching, s.result?.sections]);
}
function v(e) {
    let t = (0, f.Bh)("channel" === e.type ? e.channel : void 0, [u.kc.CHAT, u.kc.PRIMARY_ENTRY_POINT]);
    return (n) => {
        let { context: r, userId: i, roleIds: a, isImpersonating: s } = t,
            { descriptor: o, sectionCommands: l, isGuildInstalled: u, isUserInstalled: c } = (0, _.Sx)(e, n.id),
            d = r?.guild_id != null ? p.we(o?.permissions, r.guild_id, i, a, s) : null,
            f = r?.guild_id != null ? p._W(o?.permissions, r, r.guild_id) : null;
        return (
            null == l ||
            !(l.length > 0) ||
            l.some(
                (e) =>
                    p.zl(e, t, {
                        applicationAllowedForUser: d,
                        applicationAllowedForChannel: f,
                        commandBotId: o?.botId,
                        isGuildInstalled: u,
                        isUserInstalled: c,
                    }) === p.CA.ALLOWED,
            )
        );
    };
}
function C(e) {
    return [b(e), N(e), R(e), O(e)];
}
function b(e) {
    return (t) => (0, I.lq)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase());
}
function N(e) {
    return (t) => (0, I.lq)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase());
}
function R(e) {
    return (t) => {
        let n = (0, I.u8)(t)?.toLocaleLowerCase();
        return n?.startsWith(e.toLocaleLowerCase()) ?? !1;
    };
}
function O(e) {
    return (t) => {
        let n = (0, I.u8)(t)?.toLocaleLowerCase();
        return n?.includes(e.toLocaleLowerCase()) ?? !1;
    };
}
function D(e, t) {
    let n = h.A.getScoreWithoutLoadingLatest(e.id);
    return h.A.getScoreWithoutLoadingLatest(t.id) - n;
}
function L(e, t) {
    let n = (0, I.lq)(e),
        r = (0, I.lq)(t);
    return (0, _.RF)(n, r);
}
function w(e) {
    let t = (0, f.Bh)("channel" === e.type ? e.channel : void 0, [u.kc.CHAT]),
        n = {};
    return (r) => {
        let { context: i, userId: a, roleIds: s, isImpersonating: o } = t;
        if (!(r.applicationId in n)) {
            let { descriptor: t, isGuildInstalled: l, isUserInstalled: u } = (0, _.Sx)(e, r.applicationId),
                c = i?.guild_id != null ? p.we(t?.permissions, i.guild_id, a, s, o) : null,
                d = i?.guild_id != null ? p._W(t?.permissions, i, i.guild_id) : null;
            n[r.applicationId] = {
                descriptor: t,
                applicationAllowedForUser: c,
                applicationAllowedForChannel: d,
                isGuildInstalled: l,
                isUserInstalled: u,
            };
        }
        let {
            descriptor: l,
            applicationAllowedForChannel: u,
            applicationAllowedForUser: c,
            isGuildInstalled: d,
            isUserInstalled: f,
        } = n[r.applicationId];
        return (
            p.zl(r, t, {
                applicationAllowedForUser: c,
                applicationAllowedForChannel: u,
                commandBotId: l?.botId,
                isGuildInstalled: d,
                isUserInstalled: f,
            }) === p.CA.ALLOWED
        );
    };
}
function x(e) {
    return [P(e), M(e), k(e), U(e), G(e)];
}
function P(e) {
    return (t) => {
        let n = t.untranslatedName,
            r = t.displayName;
        return n.startsWith(e) || r.startsWith(e);
    };
}
function M(e) {
    let t = e?.split(" "),
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
function k(e) {
    return (t) => {
        let n = t.untranslatedName,
            r = t.displayName;
        return n.includes(e) || r.includes(e);
    };
}
function U(e) {
    return (t) => {
        for (let { name: n, serverLocalizedName: r } of t.options ?? [])
            if (
                n.startsWith(e) ||
                `${t.untranslatedName} ${n}`.startsWith(e) ||
                (null != t.displayName && `${t.displayName} ${n}`.startsWith(e)) ||
                (null != r &&
                    (r.startsWith(e) ||
                        `${t.untranslatedName} ${r}`.startsWith(e) ||
                        (null != t.displayName && `${t.displayName} ${r}`.startsWith(e))))
            )
                return !0;
        return !1;
    };
}
function G(e) {
    return (t) => {
        for (let { name: n, serverLocalizedName: r } of t.options ?? []) if (n.includes(e) || r?.includes(e)) return !0;
        return !1;
    };
}
function V(e) {
    return [F(e), B];
}
function F(e) {
    return (t, n) => {
        let r = d.Ay.getScoreWithoutLoadingLatest(e, t);
        return d.Ay.getScoreWithoutLoadingLatest(e, n) - r;
    };
}
function B(e, t) {
    return (0, _.RF)(e.displayName, t.displayName);
}
function j(e) {
    let {
        context: t,
        query: n,
        commandLimit: i,
        applicationLimit: s,
        searchesCommands: o = !0,
        searchesBots: l = !0,
        searchesActivities: u = !0,
    } = e;
    n.startsWith("/") && (n = n.substring(1));
    let { commands: d, commandSectionMap: _, loading: f } = S({ context: t, includeBuiltIn: !0 }),
        { apps: p } = y({
            context: t,
            onlyWithCommands: !0,
            includeBuiltIn: !0,
            includeEmbeddedApps: u,
            includeNonEmbeddedApps: l,
        }),
        h = (0, c.A)({ guildId: "channel" === t.type ? t.channel.guild_id : null }),
        m = r.useMemo(
            () =>
                o
                    ? (0, E.V)(d, {
                          limit: i,
                          filterPredicates: [w(t)],
                          bucketPredicates: x(n),
                          sortComparers: V({ channel: "channel" === t.type ? t.channel : void 0 }),
                      })
                    : [],
            [o, d, i, t, n],
        ),
        g = r.useMemo(() => {
            if (0 === m.length) return [];
            let e = new Map(p.map((e) => [e.id, e]));
            return a().compact(
                m.map((t) => {
                    let n = e.get(t.applicationId);
                    if (null == n) return null;
                    let r = _[t.id] ?? null;
                    return { command: t, application: n, section: r };
                }),
            );
        }, [p, m, _]),
        A = r.useMemo(() => {
            let e = [];
            if (u) {
                let t = new Set(
                    p.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
                e.push(...p),
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
            } else l && (e = p);
            return (0, E.V)(e, { limit: s, filterPredicates: [v(t)], bucketPredicates: C(n), sortComparers: [D, L] });
        }, [l, u, s, t, n, p, h]),
        I = g.length > 0,
        T = A.length > 0,
        b = !I && !T;
    return {
        commandResults: g,
        hasCommandResults: I,
        applicationResults: A,
        hasApplicationResults: T,
        isEmptyState: b,
        loading: f && o,
    };
}
function H(e) {
    let { context: t, query: n, fetches: i = !0, pageLimit: a = 1 / 0, entrypoint: u } = e;
    n.startsWith("/") && (n = n.substring(1));
    let c = u === A.s4.VOICE,
        d = "channel" === t.type ? t.channel.guild_id : void 0,
        [_, f] = r.useState(1),
        p = r.useRef(_);
    p.current = _;
    let { fetchState: h, totalPages: E } = (0, l.cf)(
            [g.A],
            () => ({
                fetchState: g.A.getFetchState({
                    query: n,
                    guildId: d,
                    page: _,
                    integrationType: s.b.USER_INSTALL,
                    minUserInstallCommandCount: 1,
                    excludeAppsWithCustomInstallUrl: !0,
                    excludeNonEmbeddedApps: c,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                    source: o.V.APP_LAUNCHER,
                }),
                totalPages:
                    g.A.getSearchResults({
                        query: n,
                        guildId: d,
                        page: _,
                        integrationType: s.b.USER_INSTALL,
                        minUserInstallCommandCount: 1,
                        excludeAppsWithCustomInstallUrl: !0,
                        excludeNonEmbeddedApps: c,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.V.APP_LAUNCHER,
                    })?.totalPages ?? 0,
            }),
            [n, d, _, c],
        ),
        I = r.useMemo(
            () =>
                Array.from(
                    { length: h === g.e.FETCHED || h === g.e.ERROR ? _ : _ - 1 },
                    (e, t) =>
                        g.A.getSearchResults({
                            query: n,
                            guildId: d,
                            page: t + 1,
                            integrationType: s.b.USER_INSTALL,
                            minUserInstallCommandCount: 1,
                            excludeAppsWithCustomInstallUrl: !0,
                            excludeNonEmbeddedApps: c,
                            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                            source: o.V.APP_LAUNCHER,
                        })?.results ?? [],
                ),
            [h, d, n, _, c],
        ),
        T = r.useCallback(() => {
            let e = I.length;
            h === g.e.FETCHED &&
                e === p.current &&
                e > 0 &&
                e < E &&
                e < a &&
                I[e - 1].length > 0 &&
                (p.current++, f((e) => e + 1));
        }, [h, a, I, E]),
        y = r.useCallback(
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
                        excludeNonEmbeddedApps: c,
                        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
                        source: o.V.APP_LAUNCHER,
                    },
                });
            },
            [c],
        );
    return (
        r.useEffect(() => {
            i && y({ query: n, page: _, guildId: d });
        }, [n, d, y, _, i]),
        r.useEffect(() => {
            f(1);
        }, [d, n]),
        { fetchState: h, applicationResults: I.flat(), fetchNextPage: T }
    );
}
n(827669);
