n.d(t, { Z: () => S }), n(388685), n(35282);
var i = n(255367),
    r = n(73800),
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
    p = n(981631),
    b = n(273504),
    h = n(388032),
    O = n(466745);
function E(e) {
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
function y(e, t) {
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
let v = b.fX.KEYWORD;
function S(e, t) {
    let { perGuildMaxCount: n } = c.I6[v],
        { isLoading: S, saveRule: j, errorMessage: _ } = (0, d.w)(),
        { createNewEditingRule: P } = (0, d.V)(),
        [I, N] = r.useState(!1),
        [Z, D] = (0, s.I2)(t),
        { rulesByTriggerType: A, updateRule: x } = (0, s.pH)(t),
        T = r.useMemo(() => {
            var e;
            return null != (e = A[v]) ? e : [];
        }, [A]),
        M = 0 === T.length,
        w = n > T.length && !M;
    if (!r.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let C = e.split(' '),
        L = C.length;
    try {
        (0, o.km)(C, b.RH);
    } catch (e) {
        return null;
    }
    let R = () => {
            null != t &&
                ((0, a.Zy)(),
                m.Z.open(t, p.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    P(t, v, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: []
                        }
                    });
                }, 400));
        },
        G = async (t) => {
            var n, i;
            if (((0, a.Zy)(), !(await (0, g.XN)(t.name, e)))) return;
            let r = y(E({}, t), {
                triggerMetadata: y(E({}, t.triggerMetadata), {
                    keywordFilter: [...(null != (i = null == (n = t.triggerMetadata) ? void 0 : n.keywordFilter) ? i : []), e]
                })
            });
            await j(r, T), x(r), null != _ ? (0, l.showToast)((0, l.createToast)(h.intl.string(h.t.wH6L0t), l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(h.intl.string(h.t['0rdYm5']), l.ToastType.SUCCESS));
        },
        k = (0, i.jsx)(l.sNh, {
            id: 'automod-rules-loading',
            label: h.intl.string(h.t.ZTNur6)
        });
    return (
        Z ||
            (k = (0, i.jsxs)(i.Fragment, {
                children: [
                    M &&
                        (0, i.jsx)(l.sNh, {
                            id: 'add-first-rule',
                            label: h.intl.string(h.t.f72Zqa),
                            action: R,
                            disabled: S
                        }),
                    T.map((e) => {
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
                                disabled: S,
                                action: () => G(e)
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
                                    label: h.intl.string(h.t['0K5jDA']),
                                    action: R,
                                    disabled: S
                                })
                            ]
                        })
                ]
            })),
        (0, i.jsx)(l.sNh, {
            id: 'guild-automod-add-selection',
            label: h.intl.formatToPlainString(h.t.Kkjv1t, { keywordCount: L }),
            onFocus: () => {
                I || (N(!0), D());
            },
            children: k
        })
    );
}
