(n.d(t, { H6: () => f, p3: () => h, qv: () => _, wP: () => p }), n(321073));
var r = n(582128),
    u = n(462180),
    i = n(882035),
    a = n(121894),
    l = n(913122),
    E = n(995786),
    A = n(904813),
    s = n(243277),
    o = n(652215);
let S = {},
    c = (0, i.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: r, id: u, triggerType: i } = n,
                { rules: l } = t(),
                E = l[r] ?? {},
                s = E[i] ?? [],
                o = s.some((e) => e.id === u),
                S = s.filter((e) => !(0, A.R)(e.id) || e.triggerType !== i),
                c = o ? S.map((e) => (e.id === u ? n : e)) : [...S, n];
            (0, a.r)(() => {
                e({ rules: { ...l, [r]: { ...E, [i]: c } }, error: null });
            });
        },
        removeRule: (n, r) => {
            let { rules: u } = t(),
                i = u[r],
                l = Object.keys(i).reduce((e, t) => {
                    let r = Number(t),
                        u = i[r] ?? [];
                    return ((e[r] = u.filter((e) => e.id !== n)), e);
                }, {});
            (0, a.r)(() => {
                e({ rules: { ...u, [r]: l }, error: null });
            });
        },
        syncRules: async (n) => {
            var r;
            let u;
            if (((u = Date.now()), u - (S[n] ?? 0) > 2e4)) {
                S[n] = Date.now();
                try {
                    let u,
                        i =
                            ((r = await (0, E.H0)(n)),
                            (u = {
                                [s.uh.KEYWORD]: [],
                                [s.uh.ML_SPAM]: [],
                                [s.uh.DEFAULT_KEYWORD_LIST]: [],
                                [s.uh.MENTION_SPAM]: [],
                                [s.uh.USER_PROFILE]: [],
                                [s.uh.SERVER_POLICY]: [],
                                [s.uh.APPLICATION]: [],
                            }),
                            r.forEach((e) => {
                                let { triggerType: t } = e;
                                u[t]?.push(e);
                            }),
                            u),
                        l = t().rules;
                    (0, a.r)(() => {
                        e({ rules: { ...l, [n]: i }, error: null });
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
function f(e) {
    let [t, n] = r.useState(!1),
        [i, a] = c((e) => [e.syncRules, e.fetching], u.x);
    return [
        t,
        r.useCallback(async () => {
            if (!a && null != e)
                try {
                    (n(!0), await i(e));
                } finally {
                    n(!1);
                }
        }, [e, a, i]),
    ];
}
function _(e) {
    let [t, n] = f(e);
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
        (t) => ({ rulesByTriggerType: t.rules[e ?? o.dJq] ?? {}, updateRule: t.updateRule, removeRule: t.removeRule }),
        u.x,
    );
}
