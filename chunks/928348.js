n.d(t, { H6: () => h, p3: () => _, qv: () => f, wP: () => p }), n(321073);
var r = n(64700),
    i = n(942381),
    u = n(265690),
    a = n(121894),
    l = n(913122),
    E = n(995786),
    A = n(904813),
    s = n(243277),
    S = n(652215);
let o = {},
    c = (0, u.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: r, id: i, triggerType: u } = n,
                { rules: l } = t(),
                E = l[r] ?? {},
                s = E[u] ?? [],
                S = s.some((e) => e.id === i),
                o = s.filter((e) => !(0, A.R)(e.id) || e.triggerType !== u),
                c = S ? o.map((e) => (e.id === i ? n : e)) : [...o, n];
            (0, a.r)(() => {
                e({ rules: { ...l, [r]: { ...E, [u]: c } }, error: null });
            });
        },
        removeRule: (n, r) => {
            let { rules: i } = t(),
                u = i[r],
                l = Object.keys(u).reduce((e, t) => {
                    let r = Number(t),
                        i = u[r] ?? [];
                    return (e[r] = i.filter((e) => e.id !== n)), e;
                }, {});
            (0, a.r)(() => {
                e({ rules: { ...i, [r]: l }, error: null });
            });
        },
        syncRules: async (n) => {
            var r;
            let i;
            if (((i = Date.now()), i - (o[n] ?? 0) > 2e4)) {
                o[n] = Date.now();
                try {
                    let i,
                        u =
                            ((r = await (0, E.H0)(n)),
                            (i = {
                                [s.uh.KEYWORD]: [],
                                [s.uh.ML_SPAM]: [],
                                [s.uh.DEFAULT_KEYWORD_LIST]: [],
                                [s.uh.MENTION_SPAM]: [],
                                [s.uh.USER_PROFILE]: [],
                                [s.uh.SERVER_POLICY]: [],
                            }),
                            r.forEach((e) => {
                                let { triggerType: t } = e;
                                i[t]?.push(e);
                            }),
                            i),
                        l = t().rules;
                    (0, a.r)(() => {
                        e({ rules: { ...l, [n]: u }, error: null });
                    });
                } catch (n) {
                    let t = new l.LG(n);
                    (0, a.r)(() => {
                        e({ error: t });
                    });
                }
            }
        },
    }));
function _(e, t) {
    let n = c.getState().rules;
    return (n[e]?.[t] ?? []).length;
}
function h(e) {
    let [t, n] = r.useState(!1),
        [u, a] = c((e) => [e.syncRules, e.fetching], i.x);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    n(!0), await u(e);
                } finally {
                    n(!1);
                }
        }, [e, a, u]),
    ];
}
function f(e) {
    let [t, n] = h(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function p(e) {
    return c(
        (t) => ({ rulesByTriggerType: t.rules[e ?? S.dJq] ?? {}, updateRule: t.updateRule, removeRule: t.removeRule }),
        i.x,
    );
}
