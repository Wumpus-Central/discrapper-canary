n.d(t, { H6: () => d, p3: () => S, qv: () => _, wP: () => h }), n(321073);
var r = n(64700),
    i = n(942381),
    l = n(265690),
    a = n(121894),
    u = n(198982),
    s = n(137207),
    E = n(904813),
    o = n(411335),
    A = n(652215);
let c = {},
    g = (0, l.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: r, id: i, triggerType: l } = n,
                { rules: u } = t(),
                s = u[r] ?? {},
                o = s[l] ?? [],
                A = o.some((e) => e.id === i),
                c = o.filter((e) => !(0, E.R)(e.id) || e.triggerType !== l),
                g = A ? c.map((e) => (e.id === i ? n : e)) : [...c, n];
            (0, a.r)(() => {
                e({ rules: { ...u, [r]: { ...s, [l]: g } }, error: null });
            });
        },
        removeRule: (n, r) => {
            let { rules: i } = t(),
                l = i[r],
                u = Object.keys(l).reduce((e, t) => {
                    let r = Number(t),
                        i = l[r] ?? [];
                    return (e[r] = i.filter((e) => e.id !== n)), e;
                }, {});
            (0, a.r)(() => {
                e({ rules: { ...i, [r]: u }, error: null });
            });
        },
        syncRules: async (n) => {
            var r;
            let i;
            if (((i = Date.now()), i - (c[n] ?? 0) > 2e4)) {
                c[n] = Date.now();
                try {
                    let i,
                        l =
                            ((r = await (0, s.H0)(n)),
                            (i = {
                                [o.uh.KEYWORD]: [],
                                [o.uh.ML_SPAM]: [],
                                [o.uh.DEFAULT_KEYWORD_LIST]: [],
                                [o.uh.MENTION_SPAM]: [],
                                [o.uh.USER_PROFILE]: [],
                                [o.uh.SERVER_POLICY]: [],
                            }),
                            r.forEach((e) => {
                                let { triggerType: t } = e;
                                i[t]?.push(e);
                            }),
                            i),
                        u = t().rules;
                    (0, a.r)(() => {
                        e({ rules: { ...u, [n]: l }, error: null });
                    });
                } catch (n) {
                    let t = new u.LG(n);
                    (0, a.r)(() => {
                        e({ error: t });
                    });
                }
            }
        },
    })),
    S = (e, t) => {
        let n = g.getState().rules;
        return (n[e]?.[t] ?? []).length;
    };
function d(e) {
    let [t, n] = r.useState(!1),
        [l, a] = g((e) => [e.syncRules, e.fetching], i.x);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    n(!0), await l(e);
                } finally {
                    n(!1);
                }
        }, [e, a, l]),
    ];
}
function _(e) {
    let [t, n] = d(e);
    return (
        r.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function h(e) {
    return g(
        (t) => ({ rulesByTriggerType: t.rules[e ?? A.dJq] ?? {}, updateRule: t.updateRule, removeRule: t.removeRule }),
        i.x,
    );
}
