"use strict";
n.d(t, { H6: () => m, p3: () => A, qv: () => I, wP: () => T }), n(321073);
var i = n(64700),
    r = n(942381),
    s = n(265690),
    l = n(121894),
    a = n(198982),
    c = n(137207),
    o = n(904813),
    u = n(411335),
    d = n(652215);
let _ = {},
    E = (0, s.h)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: (n) => {
            let { guildId: i, id: r, triggerType: s } = n,
                { rules: a } = t(),
                c = a[i] ?? {},
                u = c[s] ?? [],
                d = u.some((e) => e.id === r),
                _ = u.filter((e) => !(0, o.R)(e.id) || e.triggerType !== s),
                E = d ? _.map((e) => (e.id === r ? n : e)) : [..._, n];
            (0, l.r)(() => {
                e({ rules: { ...a, [i]: { ...c, [s]: E } }, error: null });
            });
        },
        removeRule: (n, i) => {
            let { rules: r } = t(),
                s = r[i],
                a = Object.keys(s).reduce((e, t) => {
                    let i = Number(t),
                        r = s[i] ?? [];
                    return (e[i] = r.filter((e) => e.id !== n)), e;
                }, {});
            (0, l.r)(() => {
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
                        s =
                            ((i = await (0, c.H0)(n)),
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
                    (0, l.r)(() => {
                        e({ rules: { ...a, [n]: s }, error: null });
                    });
                } catch (n) {
                    let t = new a.LG(n);
                    (0, l.r)(() => {
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
        [s, l] = E((e) => [e.syncRules, e.fetching], r.x);
    return [
        t,
        i.useCallback(async () => {
            if (!l && null != e)
                try {
                    n(!0), await s(e);
                } finally {
                    n(!1);
                }
        }, [e, l, s]),
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
