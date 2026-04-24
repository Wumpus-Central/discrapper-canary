n.d(t, { H6: () => d, p3: () => h, qv: () => g, wP: () => _ }), n(321073);
var r = n(64700),
    l = n(942381),
    i = n(265690),
    a = n(121894),
    u = n(845584),
    s = n(137207),
    A = n(904813),
    E = n(243277),
    o = n(652215);
let c = {},
    S = (0, i.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: r, id: l, triggerType: i } = n,
                { rules: u } = t(),
                s = u[r] ?? {},
                E = s[i] ?? [],
                o = E.some((e) => e.id === l),
                c = E.filter((e) => !(0, A.R)(e.id) || e.triggerType !== i),
                S = o ? c.map((e) => (e.id === l ? n : e)) : [...c, n];
            (0, a.r)(() => {
                e({ rules: { ...u, [r]: { ...s, [i]: S } }, error: null });
            });
        },
        removeRule: (n, r) => {
            let { rules: l } = t(),
                i = l[r],
                u = Object.keys(i).reduce((e, t) => {
                    let r = Number(t),
                        l = i[r] ?? [];
                    return (e[r] = l.filter((e) => e.id !== n)), e;
                }, {});
            (0, a.r)(() => {
                e({ rules: { ...l, [r]: u }, error: null });
            });
        },
        syncRules: async (n) => {
            var r;
            let l;
            if (((l = Date.now()), l - (c[n] ?? 0) > 2e4)) {
                c[n] = Date.now();
                try {
                    let l,
                        i =
                            ((r = await (0, s.H0)(n)),
                            (l = {
                                [E.uh.KEYWORD]: [],
                                [E.uh.ML_SPAM]: [],
                                [E.uh.DEFAULT_KEYWORD_LIST]: [],
                                [E.uh.MENTION_SPAM]: [],
                                [E.uh.USER_PROFILE]: [],
                                [E.uh.SERVER_POLICY]: [],
                            }),
                            r.forEach((e) => {
                                let { triggerType: t } = e;
                                l[t]?.push(e);
                            }),
                            l),
                        u = t().rules;
                    (0, a.r)(() => {
                        e({ rules: { ...u, [n]: i }, error: null });
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
    h = (e, t) => {
        let n = S.getState().rules;
        return (n[e]?.[t] ?? []).length;
    };
function d(e) {
    let [t, n] = r.useState(!1),
        [i, a] = S((e) => [e.syncRules, e.fetching], l.x);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    n(!0), await i(e);
                } finally {
                    n(!1);
                }
        }, [e, a, i]),
    ];
}
function g(e) {
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
function _(e) {
    return S(
        (t) => ({ rulesByTriggerType: t.rules[e ?? o.dJq] ?? {}, updateRule: t.updateRule, removeRule: t.removeRule }),
        l.x,
    );
}
