n(321073);
var r = n(582128),
    i = n(462180),
    u = n(882035),
    a = n(121894),
    l = n(627784),
    o = n(179832),
    E = n(904813),
    A = n(890634);
n(652215);
let s = {},
    S = (0, u.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: r, id: i, triggerType: u } = n,
                { rules: l } = t(),
                o = l[r] ?? {},
                A = o[u] ?? [],
                s = A.some((e) => e.id === i),
                S = A.filter((e) => !(0, E.R)(e.id) || e.triggerType !== u),
                c = s ? S.map((e) => (e.id === i ? n : e)) : [...S, n];
            (0, a.r)(() => {
                e({ rules: { ...l, [r]: { ...o, [u]: c } }, error: null });
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
            if (((i = Date.now()), i - (s[n] ?? 0) > 2e4)) {
                s[n] = Date.now();
                try {
                    let i,
                        u =
                            ((r = await (0, o.H0)(n)),
                            (i = {
                                [A.uh.KEYWORD]: [],
                                [A.uh.ML_SPAM]: [],
                                [A.uh.DEFAULT_KEYWORD_LIST]: [],
                                [A.uh.MENTION_SPAM]: [],
                                [A.uh.USER_PROFILE]: [],
                                [A.uh.SERVER_POLICY]: [],
                                [A.uh.APPLICATION]: [],
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
function c(e) {
    let [t, n] = r.useState(!1),
        [u, a] = S((e) => [e.syncRules, e.fetching], i.x);
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
n.d(
    t,
    {},
    {
        H6: c,
        p3: function (e, t) {
            let n = S.getState().rules;
            return (n[e]?.[t] ?? []).length;
        },
        qv: function (e) {
            let [t, n] = c(e);
            return (
                r.useEffect(() => {
                    (async () => {
                        await n();
                    })();
                }, [e, n]),
                [t, n]
            );
        },
        wP: function (e) {
            return S(
                (t) => ({
                    rulesByTriggerType: t.rules[e ?? ""] ?? {},
                    updateRule: t.updateRule,
                    removeRule: t.removeRule,
                }),
                i.x,
            );
        },
    },
);
