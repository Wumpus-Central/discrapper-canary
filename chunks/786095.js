n.d(t, { Z: () => j }), n(388685), n(35282);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(239091),
    o = n(236413),
    s = n(727072),
    c = n(85960),
    u = n(676317),
    d = n(65912),
    f = n(556012),
    g = n(572456),
    m = n(434404),
    b = n(981631),
    h = n(273504),
    p = n(388032),
    O = n(466745);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = h.fX.KEYWORD;
function j(e, t) {
    let { perGuildMaxCount: n } = c.I6[v],
        { isLoading: j, saveRule: S, errorMessage: P } = (0, d.w)(),
        { createNewEditingRule: _ } = (0, d.V)(),
        [Z, N] = r.useState(!1),
        [I, x] = (0, s.I2)(t),
        { rulesByTriggerType: T, updateRule: A } = (0, s.pH)(t),
        M = r.useMemo(() => {
            var e;
            return null != (e = T[v]) ? e : [];
        }, [T]),
        D = 0 === M.length,
        w = n > M.length && !D;
    if (!r.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let C = e.split(' '),
        L = C.length;
    try {
        (0, o.km)(C, h.RH);
    } catch (e) {
        return null;
    }
    let R = () => {
            null != t &&
                ((0, a.Zy)(),
                m.Z.open(t, b.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    _(t, v, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: []
                        }
                    });
                }, 400));
        },
        k = async (t) => {
            var n, i;
            if (((0, a.Zy)(), !(await (0, g.XN)(t.name, e)))) return;
            let r = E(y({}, t), {
                triggerMetadata: E(y({}, t.triggerMetadata), {
                    keywordFilter: [...(null != (i = null == (n = t.triggerMetadata) ? void 0 : n.keywordFilter) ? i : []), e]
                })
            });
            await S(r, M), A(r), null != P ? (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.wH6L0t), l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(p.intl.string(p.t['0rdYm5']), l.ToastType.SUCCESS));
        },
        G = (0, i.jsx)(l.sNh, {
            id: 'automod-rules-loading',
            label: p.intl.string(p.t.ZTNur6)
        });
    return (
        I ||
            (G = (0, i.jsxs)(i.Fragment, {
                children: [
                    D &&
                        (0, i.jsx)(l.sNh, {
                            id: 'add-first-rule',
                            label: p.intl.string(p.t.f72Zqa),
                            action: R,
                            disabled: j
                        }),
                    M.map((e) => {
                        let t = (0, c.V9)(v).reduce((t, n) => {
                            let i = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == i) return t;
                            let r = (0, f.c)(n, i);
                            return t + ', '.concat(null == r ? void 0 : r.headerText);
                        }, '');
                        return (0, i.jsx)(
                            l.k5B,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, i.jsx)(l.Text, {
                                    color: 'text-muted',
                                    className: O.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: t.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: j,
                                action: () => k(e)
                            },
                            e.id
                        );
                    }),
                    w &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.Clw, {}),
                                (0, i.jsx)(l.sNh, {
                                    id: 'add-another-rule',
                                    label: p.intl.string(p.t['0K5jDA']),
                                    action: R,
                                    disabled: j
                                })
                            ]
                        })
                ]
            })),
        (0, i.jsx)(l.sNh, {
            id: 'guild-automod-add-selection',
            label: p.intl.formatToPlainString(p.t.Kkjv1t, { keywordCount: L }),
            onFocus: () => {
                Z || (N(!0), x());
            },
            children: G
        })
    );
}
