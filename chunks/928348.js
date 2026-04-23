"use strict";
n.d(t, { H6: () => m, p3: () => A, qv: () => I, wP: () => T }), n(321073);
var i = n(64700),
    r = n(942381),
    l = n(265690),
    s = n(121894),
    a = n(198982),
    o = n(137207),
    c = n(904813),
    u = n(411335),
    d = n(652215);
let _ = {},
    E = (0, l.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: i, id: r, triggerType: l } = n,
                { rules: a } = t(),
                o = a[i] ?? {},
                u = o[l] ?? [],
                d = u.some((e) => e.id === r),
                _ = u.filter((e) => !(0, c.R)(e.id) || e.triggerType !== l),
                E = d ? _.map((e) => (e.id === r ? n : e)) : [..._, n];
            (0, s.r)(() => {
                e({ rules: { ...a, [i]: { ...o, [l]: E } }, error: null });
            });
        },
        removeRule: (n, i) => {
            let { rules: r } = t(),
                l = r[i],
                a = Object.keys(l).reduce((e, t) => {
                    let i = Number(t),
                        r = l[i] ?? [];
                    return (e[i] = r.filter((e) => e.id !== n)), e;
                }, {});
            (0, s.r)(() => {
                e({ rules: { ...r, [i]: a }, error: null });
            });
        },
        syncRules: async (n) => {
            var i;
            let r;
            if (((r = Date.now()), r - (_[n] ?? 0) > 2e4)) {
                _[n] = Date.now();
                try {
                    let r,
                        l =
                            ((i = await (0, o.H0)(n)),
                            (r = {
                                [u.uh.KEYWORD]: [],
                                [u.uh.ML_SPAM]: [],
                                [u.uh.DEFAULT_KEYWORD_LIST]: [],
                                [u.uh.MENTION_SPAM]: [],
                                [u.uh.USER_PROFILE]: [],
                                [u.uh.SERVER_POLICY]: [],
                            }),
                            i.forEach((e) => {
                                let { triggerType: t } = e;
                                r[t]?.push(e);
                            }),
                            r),
                        a = t().rules;
                    (0, s.r)(() => {
                        e({ rules: { ...a, [n]: l }, error: null });
                    });
                } catch (n) {
                    let t = new a.LG(n);
                    (0, s.r)(() => {
                        e({ error: t });
                    });
                }
            }
        },
    })),
    A = (e, t) => {
        let n = E.getState().rules;
        return (n[e]?.[t] ?? []).length;
    };
function m(e) {
    let [t, n] = i.useState(!1),
        [l, s] = E((e) => [e.syncRules, e.fetching], r.x);
    return [
        t,
        i.useCallback(async () => {
            if (!s && null != e)
                try {
                    n(!0), await l(e);
                } finally {
                    n(!1);
                }
        }, [e, s, l]),
    ];
}
function I(e) {
    let [t, n] = m(e);
    return (
        i.useEffect(() => {
            (async () => {
                await n();
            })();
        }, [e, n]),
        [t, n]
    );
}
function T(e) {
    return E(
        (t) => ({ rulesByTriggerType: t.rules[e ?? d.dJq] ?? {}, updateRule: t.updateRule, removeRule: t.removeRule }),
        r.x,
    );
}
