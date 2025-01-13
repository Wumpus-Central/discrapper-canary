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
    m = t(556012),
    g = t(572456),
    f = t(434404),
    h = t(981631),
    E = t(273504),
    I = t(388032),
    v = t(986371);
let M = E.fX.KEYWORD;
function p(e, n) {
    let { perGuildMaxCount: t } = u.I6[M],
        { isLoading: p, saveRule: x, errorMessage: Z } = (0, c.w)(),
        { createNewEditingRule: S } = (0, c.V)(),
        [j, T] = l.useState(!1),
        [N, _] = (0, s.I2)(n),
        { rulesByTriggerType: b, updateRule: A } = (0, s.pH)(n),
        P = l.useMemo(() => {
            var e;
            return null !== (e = b[M]) && void 0 !== e ? e : [];
        }, [b]),
        C = 0 === P.length,
        y = t > P.length && !C;
    if (!l.useMemo(() => (0, d.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
    let D = e.split(' '),
        L = D.length;
    try {
        (0, o.km)(D, E.RH);
    } catch (e) {
        return null;
    }
    let O = () => {
            if (null != n)
                (0, a.Zy)(),
                    f.Z.open(n, h.pNK.GUILD_AUTOMOD),
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
        R = async (n) => {
            var t, i;
            if (((0, a.Zy)(), !(await (0, g.XN)(n.name, e)))) return;
            let l = {
                ...n,
                triggerMetadata: {
                    ...n.triggerMetadata,
                    keywordFilter: [...(null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : []), e]
                }
            };
            await x(l, P), A(l), null != Z ? (0, r.showToast)((0, r.createToast)(I.intl.string(I.t.wH6L0t), r.ToastType.FAILURE)) : (0, r.showToast)((0, r.createToast)(I.intl.string(I.t['0rdYm5']), r.ToastType.SUCCESS));
        },
        G = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(r.MenuItem, {
                id: 'automod-rules-loading',
                label: I.intl.string(I.t.ZTNur6)
            })
        });
    return (
        !N &&
            (G = (0, i.jsxs)(i.Fragment, {
                children: [
                    C &&
                        (0, i.jsx)(r.MenuItem, {
                            id: 'add-first-rule',
                            label: I.intl.string(I.t.f72Zqa),
                            action: O,
                            disabled: p
                        }),
                    P.map((e) => {
                        let n = (0, u.V9)(M).reduce((n, t) => {
                            let i = e.actions.find((e) => {
                                let { type: n } = e;
                                return t === n;
                            });
                            if (null == i) return n;
                            let l = (0, m.c)(t, i);
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
                                action: () => R(e)
                            },
                            e.id
                        );
                    }),
                    y &&
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
            label: I.intl.formatToPlainString(I.t.Kkjv1t, { keywordCount: L }),
            onFocus: () => {
                if (!j) T(!0), _();
            },
            children: G
        })
    );
}
