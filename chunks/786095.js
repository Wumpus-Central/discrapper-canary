n.d(t, { Z: () => E }), n(47120), n(301563);
var r = n(200651),
    i = n(192379),
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
    p = n(273504),
    h = n(388032),
    v = n(287404);
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
function O(e, t) {
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
let N = p.fX.KEYWORD;
function E(e, t) {
    let { perGuildMaxCount: n } = c.I6[N],
        { isLoading: E, saveRule: j, errorMessage: P } = (0, d.w)(),
        { createNewEditingRule: S } = (0, d.V)(),
        [Z, x] = i.useState(!1),
        [I, _] = (0, s.I2)(t),
        { rulesByTriggerType: T, updateRule: w } = (0, s.pH)(t),
        M = i.useMemo(() => {
            var e;
            return null !== (e = T[N]) && void 0 !== e ? e : [];
        }, [T]),
        A = 0 === M.length,
        D = n > M.length && !A;
    if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let C = e.split(' '),
        W = C.length;
    try {
        (0, o.km)(C, p.RH);
    } catch (e) {
        return null;
    }
    let L = () => {
            null != t &&
                ((0, a.Zy)(),
                m.Z.open(t, b.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    S(t, N, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: []
                        }
                    });
                }, 400));
        },
        k = async (t) => {
            var n, r;
            if (((0, a.Zy)(), !(await (0, g.XN)(t.name, e)))) return;
            let i = O(y({}, t), {
                triggerMetadata: O(y({}, t.triggerMetadata), {
                    keywordFilter: [...(null !== (r = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== r ? r : []), e]
                })
            });
            await j(i, M), w(i), null != P ? (0, l.showToast)((0, l.createToast)(h.NW.string(h.t.wH6L0t), l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(h.NW.string(h.t['0rdYm5']), l.ToastType.SUCCESS));
        },
        R = (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)(l.sNh, {
                id: 'automod-rules-loading',
                label: h.NW.string(h.t.ZTNur6)
            })
        });
    return (
        I ||
            (R = (0, r.jsxs)(r.Fragment, {
                children: [
                    A &&
                        (0, r.jsx)(l.sNh, {
                            id: 'add-first-rule',
                            label: h.NW.string(h.t.f72Zqa),
                            action: L,
                            disabled: E
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
                            l.k5B,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, r.jsx)(l.Text, {
                                    color: 'text-muted',
                                    className: v.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: t.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: E,
                                action: () => k(e)
                            },
                            e.id
                        );
                    }),
                    D &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.Clw, {}),
                                (0, r.jsx)(l.sNh, {
                                    id: 'add-another-rule',
                                    label: h.NW.string(h.t['0K5jDA']),
                                    action: L,
                                    disabled: E
                                })
                            ]
                        })
                ]
            })),
        (0, r.jsx)(l.sNh, {
            id: 'guild-automod-add-selection',
            label: h.NW.formatToPlainString(h.t.Kkjv1t, { keywordCount: W }),
            onFocus: () => {
                !Z && (x(!0), _());
            },
            children: R
        })
    );
}
