(n.d(t, { Z: () => S }), n(388685), n(35282));
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(239091),
    s = n(236413),
    l = n(727072),
    c = n(85960),
    u = n(676317),
    d = n(65912),
    f = n(556012),
    _ = n(572456),
    p = n(434404),
    h = n(981631),
    m = n(273504),
    g = n(388032),
    E = n(466745);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = m.fX.KEYWORD,
    T = 400;
function S(e, t) {
    let { perGuildMaxCount: n } = c.I6[I],
        { isLoading: b, saveRule: O, errorMessage: S } = (0, d.w)(),
        { createNewEditingRule: A } = (0, d.V)(),
        [N, C] = i.useState(!1),
        [R, P] = (0, l.I2)(t),
        { rulesByTriggerType: w, updateRule: D } = (0, l.pH)(t),
        L = i.useMemo(() => {
            var e;
            return null != (e = w[I]) ? e : [];
        }, [w]),
        x = 0 === L.length,
        M = n > L.length && !x;
    if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let k = e.split(' '),
        j = k.length;
    try {
        (0, s.km)(k, m.RH);
    } catch (e) {
        return null;
    }
    let U = () => {
            N || (C(!0), P());
        },
        G = () => {
            null != t &&
                ((0, a.Zy)(),
                p.Z.open(t, h.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    A(t, I, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: []
                        }
                    });
                }, T));
        },
        B = async (t) => {
            var n, r;
            if (((0, a.Zy)(), !(await (0, _.XN)(t.name, e)))) return;
            let i = v(y({}, t), {
                triggerMetadata: v(y({}, t.triggerMetadata), {
                    keywordFilter: [...(null != (r = null == (n = t.triggerMetadata) ? void 0 : n.keywordFilter) ? r : []), e]
                })
            });
            (await O(i, L), D(i), null != S ? (0, o.showToast)((0, o.createToast)(g.intl.string(g.t.wH6L0t), o.ToastType.FAILURE)) : (0, o.showToast)((0, o.createToast)(g.intl.string(g.t['0rdYm5']), o.ToastType.SUCCESS)));
        },
        Z = (0, r.jsx)(o.sNh, {
            id: 'automod-rules-loading',
            label: g.intl.string(g.t.ZTNur6)
        });
    return (
        R ||
            (Z = (0, r.jsxs)(r.Fragment, {
                children: [
                    x &&
                        (0, r.jsx)(o.sNh, {
                            id: 'add-first-rule',
                            label: g.intl.string(g.t.f72Zqa),
                            action: G,
                            disabled: b
                        }),
                    L.map((e) => {
                        let t = (0, c.V9)(I).reduce((t, n) => {
                            let r = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == r) return t;
                            let i = (0, f.c)(n, r);
                            return t + ', '.concat(null == i ? void 0 : i.headerText);
                        }, '');
                        return (0, r.jsx)(
                            o.k5B,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, r.jsx)(o.Text, {
                                    color: 'text-muted',
                                    className: E.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: t.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: b,
                                action: () => B(e)
                            },
                            e.id
                        );
                    }),
                    M &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(o.Clw, {}),
                                (0, r.jsx)(o.sNh, {
                                    id: 'add-another-rule',
                                    label: g.intl.string(g.t['0K5jDA']),
                                    action: G,
                                    disabled: b
                                })
                            ]
                        })
                ]
            })),
        (0, r.jsx)(o.sNh, {
            id: 'guild-automod-add-selection',
            label: g.intl.formatToPlainString(g.t.Kkjv1t, { keywordCount: j }),
            onFocus: U,
            children: Z
        })
    );
}
