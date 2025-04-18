n.d(t, { Z: () => v }), n(388685), n(35282);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(239091),
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
    O = n(503384);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = h.fX.KEYWORD;
function v(e, t) {
    let { perGuildMaxCount: n } = c.I6[N],
        { isLoading: v, saveRule: j, errorMessage: S } = (0, d.w)(),
        { createNewEditingRule: P } = (0, d.V)(),
        [_, Z] = i.useState(!1),
        [I, x] = (0, s.I2)(t),
        { rulesByTriggerType: T, updateRule: A } = (0, s.pH)(t),
        M = i.useMemo(() => {
            var e;
            return null != (e = T[N]) ? e : [];
        }, [T]),
        D = 0 === M.length,
        w = n > M.length && !D;
    if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let C = e.split(' '),
        W = C.length;
    try {
        (0, o.km)(C, h.RH);
    } catch (e) {
        return null;
    }
    let L = () => {
            null != t &&
                ((0, l.Zy)(),
                m.Z.open(t, b.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    P(t, N, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: []
                        }
                    });
                }, 400));
        },
        R = async (t) => {
            var n, r;
            if (((0, l.Zy)(), !(await (0, g.XN)(t.name, e)))) return;
            let i = E(y({}, t), {
                triggerMetadata: E(y({}, t.triggerMetadata), {
                    keywordFilter: [...(null != (r = null == (n = t.triggerMetadata) ? void 0 : n.keywordFilter) ? r : []), e]
                })
            });
            await j(i, M), A(i), null != S ? (0, a.showToast)((0, a.createToast)(p.NW.string(p.t.wH6L0t), a.ToastType.FAILURE)) : (0, a.showToast)((0, a.createToast)(p.NW.string(p.t['0rdYm5']), a.ToastType.SUCCESS));
        },
        k = (0, r.jsx)(a.sNh, {
            id: 'automod-rules-loading',
            label: p.NW.string(p.t.ZTNur6)
        });
    return (
        I ||
            (k = (0, r.jsxs)(r.Fragment, {
                children: [
                    D &&
                        (0, r.jsx)(a.sNh, {
                            id: 'add-first-rule',
                            label: p.NW.string(p.t.f72Zqa),
                            action: L,
                            disabled: v
                        }),
                    M.map((e) => {
                        let t = (0, c.V9)(N).reduce((t, n) => {
                            let r = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == r) return t;
                            let i = (0, f.c)(n, r);
                            return t + ', '.concat(null == i ? void 0 : i.headerText);
                        }, '');
                        return (0, r.jsx)(
                            a.k5B,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, r.jsx)(a.Text, {
                                    color: 'text-muted',
                                    className: O.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: t.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: v,
                                action: () => R(e)
                            },
                            e.id
                        );
                    }),
                    w &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.Clw, {}),
                                (0, r.jsx)(a.sNh, {
                                    id: 'add-another-rule',
                                    label: p.NW.string(p.t['0K5jDA']),
                                    action: L,
                                    disabled: v
                                })
                            ]
                        })
                ]
            })),
        (0, r.jsx)(a.sNh, {
            id: 'guild-automod-add-selection',
            label: p.NW.formatToPlainString(p.t.Kkjv1t, { keywordCount: W }),
            onFocus: () => {
                _ || (Z(!0), x());
            },
            children: k
        })
    );
}
