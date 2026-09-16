(n.d(t, { H6: () => _, p3: () => h, qv: () => p, wP: () => T }), n(321073));
var r = n(582128),
    i = n(462180),
    u = n(882035),
    a = n(121894),
    l = n(913122),
    E = n(995786),
    A = n(904813),
    o = n(243277),
    s = n(652215);
let S = {},
    c = (0, u.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: r, id: i, triggerType: u } = n,
                { rules: l } = t(),
                E = l[r] ?? {},
                o = E[u] ?? [],
                s = o.some((e) => e.id === i),
                S = o.filter((e) => !(0, A.R)(e.id) || e.triggerType !== u),
                c = s ? S.map((e) => (e.id === i ? n : e)) : [...S, n];
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
                    return ((e[r] = i.filter((e) => e.id !== n)), e);
                }, {});
            (0, a.r)(() => {
                e({ rules: { ...i, [r]: l }, error: null });
            });
        },
        syncRules: async (n) => {
            var r;
            let i;
            if (((i = Date.now()), i - (S[n] ?? 0) > 2e4)) {
                S[n] = Date.now();
                try {
                    let i,
                        u =
                            ((r = await (0, E.H0)(n)),
                            (i = {
                                [o.uh.KEYWORD]: [],
                                [o.uh.ML_SPAM]: [],
                                [o.uh.DEFAULT_KEYWORD_LIST]: [],
                                [o.uh.MENTION_SPAM]: [],
                                [o.uh.USER_PROFILE]: [],
                                [o.uh.SERVER_POLICY]: [],
                                [o.uh.APPLICATION]: [],
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
function h(e, t) {
    let n = c.getState().rules;
    return (n[e]?.[t] ?? []).length;
}
function _(e) {
    let [t, n] = r.useState(!1),
        [u, a] = c((e) => [e.syncRules, e.fetching], i.x);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    (n(!0), await u(e));
                } finally {
                    n(!1);
                }
        }, [e, a, u]),
    ];
}
function p(e) {
    let [t, n] = _(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function T(e) {
    return c(
        (t) => ({ rulesByTriggerType: t.rules[e ?? s.dJq] ?? {}, updateRule: t.updateRule, removeRule: t.removeRule }),
        i.x,
    );
}
