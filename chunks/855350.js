n.d(t, {
    DP: () => N,
    AA: () => D,
    Vu: () => R,
    b5: () => L,
    Bo: () => O,
    PP: () => b,
    Tr: () => y,
    eE: () => C,
    tE: () => g,
});
var i = n(582128),
    r = n(855986),
    a = n(554146),
    s = n(590209),
    l = n(617617),
    o = n(967198),
    d = n(129230);
n(460288);
var c = n(898660),
    u = n(199773),
    _ = n(825272),
    E = n(517057),
    A = n(543862),
    f = n(68656),
    h = n(826673),
    I = n(652215),
    p = n(355097);
let m = {};
function T(e) {
    return "single_use" === e.kind || "single_use_guild" === e.kind;
}
function g(e, t, n) {
    let g = e.filter((e) => "snowflake_bound_guild" !== e.kind || "" !== e.scope.snowflakeId),
        S = (function (e) {
            let t = e.some((e) => {
                    let { kind: t } = e;
                    return "single_use" === t;
                }),
                n = e.some(_.hM),
                i = [...new Set(e.flatMap((e) => ((0, _.vv)(e) ? [e.scope.guildId] : [])))],
                { dismissedContents: a, recurringStates: s } = (0, r.cf)([l.A], () => {
                    let e = l.A.settings.userContent;
                    return {
                        dismissedContents: t ? e?.dismissedContents : void 0,
                        recurringStates: n ? e?.recurringDismissibleContentStates : void 0,
                    };
                }),
                o = (0, r.yK)([l.A], () => i.map((e) => l.A.getGuildDismissedContentState(e)));
            return { dismissedContents: a, recurringStates: s, guildStates: new Map(i.map((e, t) => [e, o[t]])) };
        })(g),
        N = (0, f.Sg)(
            g.filter(T).map((e) => {
                let { content: t } = e;
                return t;
            }),
        ),
        C = (0, r.bG)([l.A], () => l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS)),
        O = g.find((e) => (!T(e) || N.includes(e.content)) && (0, c.z)(e, S, C)) ?? null,
        { version: R, snowflakeId: L } = null != O ? (0, _.JK)(O) : m,
        y = g.some((e) => !(0, _.vv)(e)),
        D = (0, r.bG)([o.A], () => (y ? o.A.getGuildId() : null)),
        b = null != O && (0, _.vv)(O) ? O.scope.guildId : D,
        v = O?.content ?? null,
        P = (function (e, t, n, o) {
            let { version: c, snowflakeId: _, deduplicateImpressions: f } = o,
                h = (0, E.Ay)((t) => null != e && t.currentlyShown.has(e)),
                [m, T] = (0, s.eK)(),
                g = null != e && (0, A.NZ)(e, m, T),
                S = (0, r.bG)([u.A], () => null != e && u.A.hasUserHitDCCap(e, t)),
                N = i.useRef(t);
            return (
                (N.current = t),
                i.useEffect(() => {
                    if (null != e) {
                        var t;
                        return (
                            l.A.hasLoaded(p.oD.PRELOADED_USER_SETTINGS) ||
                                ((t = N.current),
                                d.default.track(I.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
                                    content_type: a.M[e],
                                    group_name: n ?? null,
                                    latest_version: c ?? null,
                                    guild_id: t ?? null,
                                    snowflake_id: _ ?? null,
                                })),
                            (0, A.Vh)(
                                e,
                                {
                                    groupName: n,
                                    guildId: N.current,
                                    version: c,
                                    snowflakeId: _,
                                    deduplicateImpressions: f,
                                },
                                m,
                                T,
                            ),
                            () => {
                                if (null == e) return;
                                let t = !u.A.hasUserHitDCCap();
                                (0, E.pd)({ content: e, groupName: n }, t);
                            }
                        );
                    }
                }, [e, n, S, g, c, _, f]),
                h && null != e ? e : null
            );
        })(v, b, t, { version: R, snowflakeId: L, deduplicateImpressions: n }),
        M = i.useCallback(
            (e, n) => {
                null != O &&
                    (function (e, t) {
                        switch (e.kind) {
                            case "single_use":
                                return (0, h.Dr)(e.content, t);
                            case "single_use_guild":
                                return (0, h.dX)(e.content, e.scope.guildId, t);
                            case "versioned":
                                return (0, A.$l)(e.content, e.scope.version, { ...t, version: e.scope.version });
                            case "time_recurring":
                                return (0, A.uh)(e.content, t);
                            case "time_recurring_guild":
                                return (0, h.KO)(e.content, e.scope.guildId, t);
                            case "snowflake_bound":
                            case "time_recurring_snowflake_bound":
                                return (0, A.qr)(e.content, e.scope.snowflakeId, t);
                            case "snowflake_bound_guild":
                                return (0, h.in)(e.content, e.scope.snowflakeId, e.scope.guildId, t);
                        }
                    })(O, { dismissAction: e, groupName: t, guildId: b, forceTrack: n });
            },
            [v, t, b, R, L],
        );
    return { candidate: O, visibleContent: P, markAsDismissed: M };
}
function S(e, t) {
    let { visibleContent: n, markAsDismissed: i } = g(e, t);
    return [n, i];
}
function N(e, t) {
    let [n, i] = S(
        e.flatMap((e) => (0, _.qd)(e) ?? []),
        t,
    );
    return [n, i];
}
function C(e, t, n) {
    return S(null != e ? [{ kind: "versioned", content: e, scope: { version: t } }] : [], n);
}
function O(e, t, n) {
    return S(null != e ? [{ kind: "time_recurring", content: e, scope: { timeRecurringConfig: t } }] : [], n);
}
function R(e, t, n) {
    return S(null != e ? [{ kind: "snowflake_bound", content: e, scope: { snowflakeId: t } }] : [], n);
}
function L(e, t, n, i) {
    return S(
        null != e ? [{ kind: "snowflake_bound_guild", content: e, scope: { snowflakeId: t, guildId: n } }] : [],
        i,
    );
}
function y(e, t, n, i) {
    return S(
        null != e
            ? [
                  {
                      kind: "time_recurring_snowflake_bound",
                      content: e,
                      scope: { snowflakeId: n, timeRecurringConfig: t },
                  },
              ]
            : [],
        i,
    );
}
function D(e, t, n) {
    return S(
        e.map((e) => ({ kind: "single_use_guild", content: e, scope: { guildId: t } })),
        n,
    );
}
function b(e, t, n, i) {
    return S(
        null != e ? [{ kind: "time_recurring_guild", content: e, scope: { timeRecurringConfig: n, guildId: t } }] : [],
        i,
    );
}
