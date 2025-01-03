t.d(n, {
    Z: function () {
        return M;
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
    v = t(388032),
    I = t(986371);
let p = E.fX.KEYWORD;
function M(e, n) {
    let { perGuildMaxCount: t } = u.I6[p],
        { isLoading: M, saveRule: Z, errorMessage: x } = (0, c.w)(),
        { createNewEditingRule: S } = (0, c.V)(),
        [j, _] = l.useState(!1),
        [T, b] = (0, s.I2)(n),
        { rulesByTriggerType: A, updateRule: P } = (0, s.pH)(n),
        N = l.useMemo(() => {
            var e;
            return null !== (e = A[p]) && void 0 !== e ? e : [];
        }, [A]),
        y = 0 === N.length,
        C = t > N.length && !y;
    if (!l.useMemo(() => (0, d.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
    let L = e.split(' '),
        D = L.length;
    try {
        (0, o.km)(L, E.RH);
    } catch (e) {
        return null;
    }
    let R = () => {
            if (null != n)
                (0, a.Zy)(),
                    m.Z.open(n, h.pNK.GUILD_AUTOMOD),
                    setTimeout(() => {
                        S(n, p, {
                            triggerMetadata: {
                                keywordFilter: [e],
                                regexPatterns: [],
                                allowList: []
                            }
                        });
                    }, 400);
        },
        O = async (n) => {
            var t, i;
            if (((0, a.Zy)(), !(await (0, f.XN)(n.name, e)))) return;
            let l = {
                ...n,
                triggerMetadata: {
                    ...n.triggerMetadata,
                    keywordFilter: [...(null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : []), e]
                }
            };
            await Z(l, N), P(l), null != x ? (0, r.showToast)((0, r.createToast)(v.intl.string(v.t.wH6L0t), r.ToastType.FAILURE)) : (0, r.showToast)((0, r.createToast)(v.intl.string(v.t['0rdYm5']), r.ToastType.SUCCESS));
        },
        G = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(r.MenuItem, {
                id: 'automod-rules-loading',
                label: v.intl.string(v.t.ZTNur6)
            })
        });
    return (
        !T &&
            (G = (0, i.jsxs)(i.Fragment, {
                children: [
                    y &&
                        (0, i.jsx)(r.MenuItem, {
                            id: 'add-first-rule',
                            label: v.intl.string(v.t.f72Zqa),
                            action: R,
                            disabled: M
                        }),
                    N.map((e) => {
                        let n = (0, u.V9)(p).reduce((n, t) => {
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
                                    className: I.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: n.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: M,
                                action: () => O(e)
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
                                    label: v.intl.string(v.t['0K5jDA']),
                                    action: R,
                                    disabled: M
                                })
                            ]
                        })
                ]
            })),
        (0, i.jsx)(r.MenuItem, {
            id: 'guild-automod-add-selection',
            label: v.intl.formatToPlainString(v.t.Kkjv1t, { keywordCount: D }),
            onFocus: () => {
                if (!j) _(!0), b();
            },
            children: G
        })
    );
}
