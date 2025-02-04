n.d(t, { Z: () => N }), n(47120), n(724458);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(239091),
    r = n(236413),
    o = n(727072),
    d = n(85960),
    c = n(676317),
    u = n(65912),
    g = n(556012),
    f = n(572456),
    m = n(434404),
    h = n(981631),
    E = n(273504),
    v = n(388032),
    Z = n(986371);
let x = E.fX.KEYWORD;
function N(e, t) {
    let { perGuildMaxCount: n } = d.I6[x],
        { isLoading: N, saveRule: p, errorMessage: S } = (0, u.w)(),
        { createNewEditingRule: I } = (0, u.V)(),
        [T, _] = l.useState(!1),
        [j, M] = (0, o.I2)(t),
        { rulesByTriggerType: b, updateRule: A } = (0, o.pH)(t),
        y = l.useMemo(() => {
            var e;
            return null !== (e = b[x]) && void 0 !== e ? e : [];
        }, [b]),
        C = 0 === y.length,
        P = n > y.length && !C;
    if (!l.useMemo(() => (0, c.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let D = e.split(' '),
        L = D.length;
    try {
        (0, r.km)(D, E.RH);
    } catch (e) {
        return null;
    }
    let O = () => {
            null != t &&
                ((0, s.Zy)(),
                m.Z.open(t, h.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    I(t, x, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: []
                        }
                    });
                }, 400));
        },
        R = async (t) => {
            var n, i;
            if (((0, s.Zy)(), !(await (0, f.XN)(t.name, e)))) return;
            let l = {
                ...t,
                triggerMetadata: {
                    ...t.triggerMetadata,
                    keywordFilter: [...(null !== (i = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== i ? i : []), e]
                }
            };
            await p(l, y), A(l), null != S ? (0, a.showToast)((0, a.createToast)(v.intl.string(v.t.wH6L0t), a.ToastType.FAILURE)) : (0, a.showToast)((0, a.createToast)(v.intl.string(v.t['0rdYm5']), a.ToastType.SUCCESS));
        },
        G = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(a.sNh, {
                id: 'automod-rules-loading',
                label: v.intl.string(v.t.ZTNur6)
            })
        });
    return (
        j ||
            (G = (0, i.jsxs)(i.Fragment, {
                children: [
                    C &&
                        (0, i.jsx)(a.sNh, {
                            id: 'add-first-rule',
                            label: v.intl.string(v.t.f72Zqa),
                            action: O,
                            disabled: N
                        }),
                    y.map((e) => {
                        let t = (0, d.V9)(x).reduce((t, n) => {
                            let i = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == i) return t;
                            let l = (0, g.c)(n, i);
                            return t + ', '.concat(null == l ? void 0 : l.headerText);
                        }, '');
                        return (0, i.jsx)(
                            a.k5B,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, i.jsx)(a.Text, {
                                    color: 'text-muted',
                                    className: Z.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: t.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: N,
                                action: () => R(e)
                            },
                            e.id
                        );
                    }),
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(a.Clw, {}),
                                (0, i.jsx)(a.sNh, {
                                    id: 'add-another-rule',
                                    label: v.intl.string(v.t['0K5jDA']),
                                    action: O,
                                    disabled: N
                                })
                            ]
                        })
                ]
            })),
        (0, i.jsx)(a.sNh, {
            id: 'guild-automod-add-selection',
            label: v.intl.formatToPlainString(v.t.Kkjv1t, { keywordCount: L }),
            onFocus: () => {
                !T && (_(!0), M());
            },
            children: G
        })
    );
}
