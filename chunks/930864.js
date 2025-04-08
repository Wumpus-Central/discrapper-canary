n.d(t, { ForwardModal: () => x }), n(388685);
var l = n(200651),
    r = n(192379),
    a = n(392711),
    i = n(442837),
    s = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    f = n(592125),
    h = n(375954),
    _ = n(823379),
    g = n(859155),
    m = n(822869),
    p = n(895442),
    b = n(757853),
    E = n(388275),
    y = n(912332),
    I = n(819727),
    S = n(388032),
    A = n(691176),
    O = n(621054);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    var { message: t, initialSelectedDestinations: x, forwardOptions: C, onClose: P, onRequestSent: L } = e,
        T = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        a = Object.keys(e);
                    for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (l = 0; l < a.length; l++) (n = a[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['message', 'initialSelectedDestinations', 'forwardOptions', 'onClose', 'onRequestSent']);
    let { channel_id: j, id: Z } = t,
        w = r.useMemo(() => (0, u.dL)(j), [j]),
        [D, R] = r.useState(!1),
        k = (0, i.e7)(
            [h.Z],
            () => {
                var e;
                return null != (e = h.Z.getMessage(t.channel_id, t.id)) ? e : t;
            },
            [t]
        ),
        F = (0, i.e7)([f.Z], () => f.Z.getChannel(j), [j]),
        M = (0, m.ZF)(),
        G = (0, m.mh)(),
        W = r.useRef(0),
        U = r.useRef(0),
        [H, Q] = r.useState(x),
        z = H.length,
        V = z >= I.G,
        [B, q] = r.useState(''),
        { results: K, updateSearchText: X } = (0, d.s)({
            selectedDestinations: H,
            originDestination: w,
            includeMissingDMs: !0
        }),
        Y = r.useCallback(
            (e) => {
                q(e), X(e), (U.current += 1), '' !== e && G(j, Z);
            },
            [j, Z, G, X]
        ),
        J = r.useCallback(() => {
            (0, m.sF)({
                channelId: j,
                messageId: Z,
                numDestinationChanges: W.current,
                numQueryChanges: U.current
            }),
                P();
        }, [j, Z, P]),
        $ = r.useCallback(() => {
            q('');
        }, [q]),
        ee = r.useRef(null);
    r.useEffect(() => {
        if ('' === B) {
            var e;
            null == (e = ee.current) || e.focus();
        }
    }, [B]);
    let et = r.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, s.showToast)((0, s.createToast)(S.NW.string(S.t.kwmYkp), s.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        en = r.useCallback(
            (e) => {
                M(j, Z, '' !== B),
                    Q((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return V ? t : (q(''), (W.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (W.current += 1), l;
                    });
            },
            [j, V, Z, B, M]
        ),
        el = r.useCallback(
            async function (e) {
                var r;
                let { withMessage: a, transitionToDestination: i, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    b = null != (r = h.Z.getMessage(j, Z)) ? r : t;
                if (null == b) return void (0, s.showToast)((0, s.createToast)(S.NW.string(S.t.R0RpRU), s.ToastType.FAILURE));
                R(!0);
                let E = (await Promise.all(e.map(u.qx))).filter(_.lm);
                if (
                    (0, p.Z)(b, E) &&
                    !(await new Promise((e) => {
                        (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    v(N({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1)
                                    })
                                );
                        });
                    }))
                )
                    return void R(!1);
                d && (0, y.mc)(), null == L || L(), i && (await o.Z.fetchMessages({ channelId: E[0] }), (0, c.Kh)(E[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let I = await g.Z.sendForwards(b, E, v(N({}, C), { withMessage: a })),
                    A = E.some((e) => {
                        let t = f.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    I.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, m.gP)({
                        channelId: j,
                        messageId: Z,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: E.length,
                        numDestinationChanges: W.current,
                        numQueryChanges: U.current,
                        anyDestinationHasSlowmode: A
                    }),
                        et();
                    return;
                }
                (0, m.gP)({
                    channelId: j,
                    messageId: Z,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: E.length,
                    numDestinationChanges: W.current,
                    numQueryChanges: U.current,
                    anyDestinationHasSlowmode: A
                });
                let O = e.filter((e, t) => 'rejected' === I[t].status);
                (0, y.Np)({
                    message: b,
                    failedDestinations: O,
                    forwardOptions: C
                });
            },
            [j, C, Z, t, L, et]
        ),
        er = r.useCallback(
            (e) => {
                el(H, {
                    withMessage: e,
                    transitionToDestination: 1 === H.length,
                    closeAfterSend: !0
                });
            },
            [el, H]
        );
    if (null == k || null == F) return null;
    let ea =
            K.length > 0
                ? (0, l.jsx)(b.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: K,
                      rowMode: b.G.TOGGLE,
                      message: k,
                      originChannel: F,
                      handleToggleDestination: en,
                      selectedDestinations: H,
                      disableSelection: V
                  })
                : (0, l.jsxs)(s.hzk, {
                      className: A.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: A.noResultsImg,
                              src: O,
                              alt: ''
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: S.NW.string(S.t.V6nAfH)
                          })
                      ]
                  }),
        ei = z <= 1 ? S.NW.string(S.t.TXNS7e) : S.NW.formatToPlainString(S.t.jWtYUl, { count: z });
    return (0, l.jsxs)(
        s.Y0X,
        v(
            N(
                {
                    className: A.modal,
                    'aria-label': S.NW.string(S.t['+SkRRk'])
                },
                T
            ),
            {
                children: [
                    (0, l.jsxs)(s.xBx, {
                        className: A.header,
                        children: [
                            (0, l.jsxs)('div', {
                                className: A.titleLine,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: A.title,
                                        children: (0, l.jsx)(s.y5t, {
                                            component: (0, l.jsx)(s.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: S.NW.string(S.t['+SkRRk'])
                                            }),
                                            children: V
                                                ? (0, l.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-warning',
                                                      children: S.NW.format(S.t['3Fbkio'], { count: I.G })
                                                  })
                                                : (0, l.jsx)(s.X6q, {
                                                      variant: 'heading-sm/normal',
                                                      color: 'header-muted',
                                                      children: S.NW.string(S.t['VA+btL'])
                                                  })
                                        })
                                    }),
                                    (0, l.jsx)(s.olH, {
                                        className: A.closeButton,
                                        onClick: J
                                    })
                                ]
                            }),
                            (0, l.jsx)(s.E1j, {
                                ref: ee,
                                size: s.E1j.Sizes.MEDIUM,
                                query: B,
                                onChange: Y,
                                onClear: $,
                                placeholder: S.NW.string(S.t['5h0QOD']),
                                'aria-label': S.NW.string(S.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    ea,
                    (0, l.jsx)(E.n, {
                        message: k,
                        forwardOptions: C,
                        sendLabel: ei,
                        canSend: z > 0,
                        selectedDestinations: H,
                        isSending: D,
                        onSend: er
                    })
                ]
            }
        )
    );
}
