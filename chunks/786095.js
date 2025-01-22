t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120),
    t(724458);
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(239091),
    o = t(236413),
    s = t(727072),
    u = t(85960),
    d = t(676317),
    c = t(65912),
    g = t(556012),
    f = t(572456),
    m = t(434404),
    h = t(981631),
    E = t(273504),
    I = t(388032),
    v = t(986371);
let M = E.fX.KEYWORD;
function p(e, n) {
    let { perGuildMaxCount: t } = u.I6[M],
        { isLoading: p, saveRule: Z, errorMessage: x } = (0, c.w)(),
        { createNewEditingRule: S } = (0, c.V)(),
        [T, _] = l.useState(!1),
        [j, b] = (0, s.I2)(n),
        { rulesByTriggerType: A, updateRule: N } = (0, s.pH)(n),
        y = l.useMemo(() => {
            var e;
            return null !== (e = A[M]) && void 0 !== e ? e : [];
        }, [A]),
        P = 0 === y.length,
        C = t > y.length && !P;
    if (!l.useMemo(() => (0, d.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
    let L = e.split(' '),
        D = L.length;
    try {
        (0, o.km)(L, E.RH);
    } catch (e) {
        return null;
    }
    let O = () => {
            if (null != n)
                (0, a.Zy)(),
                    m.Z.open(n, h.pNK.GUILD_AUTOMOD),
                    setTimeout(() => {
                        S(n, M, {
                            triggerMetadata: {
                                keywordFilter: [e],
                                regexPatterns: [],
                                allowList: []
                            }
                        });
                    }, 400);
        },
        G = async (n) => {
            var t, i;
            if (((0, a.Zy)(), !(await (0, f.XN)(n.name, e)))) return;
            let l = {
                ...n,
                triggerMetadata: {
                    ...n.triggerMetadata,
                    keywordFilter: [...(null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : []), e]
                }
            };
            await Z(l, y), N(l), null != x ? (0, r.showToast)((0, r.createToast)(I.intl.string(I.t.wH6L0t), r.ToastType.FAILURE)) : (0, r.showToast)((0, r.createToast)(I.intl.string(I.t['0rdYm5']), r.ToastType.SUCCESS));
        },
        R = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(r.MenuItem, {
                id: 'automod-rules-loading',
                label: I.intl.string(I.t.ZTNur6)
            })
        });
    return (
        !j &&
            (R = (0, i.jsxs)(i.Fragment, {
                children: [
                    P &&
                        (0, i.jsx)(r.MenuItem, {
                            id: 'add-first-rule',
                            label: I.intl.string(I.t.f72Zqa),
                            action: O,
                            disabled: p
                        }),
                    y.map((e) => {
                        let n = (0, u.V9)(M).reduce((n, t) => {
                            let i = e.actions.find((e) => {
                                let { type: n } = e;
                                return t === n;
                            });
                            if (null == i) return n;
                            let l = (0, g.c)(t, i);
                            return (n += ', '.concat(null == l ? void 0 : l.headerText));
                        }, '');
                        return (0, i.jsx)(
                            r.MenuRadioItem,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, i.jsx)(r.Text, {
                                    color: 'text-muted',
                                    className: v.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: n.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: p,
                                action: () => G(e)
                            },
                            e.id
                        );
                    }),
                    C &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.MenuSeparator, {}),
                                (0, i.jsx)(r.MenuItem, {
                                    id: 'add-another-rule',
                                    label: I.intl.string(I.t['0K5jDA']),
                                    action: O,
                                    disabled: p
                                })
                            ]
                        })
                ]
            })),
        (0, i.jsx)(r.MenuItem, {
            id: 'guild-automod-add-selection',
            label: I.intl.formatToPlainString(I.t.Kkjv1t, { keywordCount: D }),
            onFocus: () => {
                if (!T) _(!0), b();
            },
            children: R
        })
    );
}
