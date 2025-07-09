(n.d(t, { ForwardModal: () => x }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(392711),
    a = n(442837),
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
    E = n(757853),
    b = n(388275),
    y = n(912332),
    I = n(819727),
    S = n(388032),
    O = n(691176),
    A = n(621054);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function C(e, t) {
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
    var { message: t, initialSelectedDestinations: x, forwardOptions: P, onClose: T, onRequestSent: N } = e,
        L = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) ((n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) ((n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['message', 'initialSelectedDestinations', 'forwardOptions', 'onClose', 'onRequestSent']);
    let { channel_id: j, id: Z } = t,
        w = r.useMemo(() => (0, u.dL)(j), [j]),
        [D, R] = r.useState(!1),
        F = (0, a.e7)(
            [h.Z],
            () => {
                var e;
                return null != (e = h.Z.getMessage(t.channel_id, t.id)) ? e : t;
            },
            [t]
        ),
        k = (0, a.e7)([f.Z], () => f.Z.getChannel(j), [j]),
        G = (0, m.ZF)(),
        M = (0, m.mh)(),
        U = r.useRef(0),
        H = r.useRef(0),
        [W, Q] = r.useState(x),
        z = W.length,
        V = z >= I.G,
        [B, q] = r.useState(''),
        { results: K, updateSearchText: X } = (0, d.s)({
            selectedDestinations: W,
            originDestination: w,
            includeMissingDMs: !0
        }),
        Y = r.useCallback(
            (e) => {
                (q(e), X(e));
            },
            [X]
        ),
        J = r.useCallback(
            (e) => {
                (Y(e), (H.current += 1), '' !== e && M(j, Z));
            },
            [j, Z, M, Y]
        ),
        $ = r.useCallback(() => {
            Y('');
        }, [Y]),
        ee = r.useCallback(() => {
            ((0, m.sF)({
                channelId: j,
                messageId: Z,
                numDestinationChanges: U.current,
                numQueryChanges: H.current
            }),
                T());
        }, [j, Z, T]),
        et = r.useRef(null);
    r.useEffect(() => {
        if ('' === B) {
            var e;
            null == (e = et.current) || e.focus();
        }
    }, [B]);
    let en = r.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.kwmYkp), s.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        el = r.useCallback(
            (e) => {
                (G(j, Z, '' !== B),
                    Q((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return V ? t : (Y(''), (U.current += 1), [e, ...t]);
                        let l = [...t];
                        return (l.splice(n, 1), (U.current += 1), l);
                    }));
            },
            [j, V, Z, B, Y, G]
        ),
        er = r.useCallback(
            async function (e) {
                var r;
                let { withMessage: i, transitionToDestination: a, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    E = null != (r = h.Z.getMessage(j, Z)) ? r : t;
                if (null == E) return void (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.R0RpRU), s.ToastType.FAILURE));
                R(!0);
                let b = (await Promise.all(e.map(u.qx))).filter(_.lm);
                if (
                    (0, p.Z)(E, b) &&
                    !(await new Promise((e) => {
                        (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(
                                    t,
                                    C(v({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1)
                                    })
                                );
                        });
                    }))
                )
                    return void R(!1);
                (d && (0, y.mc)(), null == N || N(), a && (await o.Z.fetchMessages({ channelId: b[0] }), (0, c.Kh)(b[0], { openTextInVoiceIfVoiceChannel: !0 })));
                let I = await g.Z.sendForwards(E, b, C(v({}, P), { withMessage: i })),
                    O = b.some((e) => {
                        let t = f.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    I.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    ((0, m.gP)({
                        channelId: j,
                        messageId: Z,
                        hasError: !1,
                        hasContextMessage: null != i && '' !== i,
                        numDestinations: b.length,
                        numDestinationChanges: U.current,
                        numQueryChanges: H.current,
                        anyDestinationHasSlowmode: O
                    }),
                        en());
                    return;
                }
                (0, m.gP)({
                    channelId: j,
                    messageId: Z,
                    hasError: !0,
                    hasContextMessage: null != i && '' !== i,
                    numDestinations: b.length,
                    numDestinationChanges: U.current,
                    numQueryChanges: H.current,
                    anyDestinationHasSlowmode: O
                });
                let A = e.filter((e, t) => 'rejected' === I[t].status);
                (0, y.Np)({
                    message: E,
                    failedDestinations: A,
                    forwardOptions: P
                });
            },
            [j, P, Z, t, N, en]
        ),
        ei = r.useCallback(
            (e) => {
                er(W, {
                    withMessage: e,
                    transitionToDestination: 1 === W.length,
                    closeAfterSend: !0
                });
            },
            [er, W]
        );
    if (null == F || null == k) return null;
    let ea =
            K.length > 0
                ? (0, l.jsx)(E.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: K,
                      rowMode: E.G.TOGGLE,
                      message: F,
                      originChannel: k,
                      handleToggleDestination: el,
                      selectedDestinations: W,
                      disableSelection: V
                  })
                : (0, l.jsxs)(s.hzk, {
                      className: O.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: O.noResultsImg,
                              src: A,
                              alt: ''
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: S.intl.string(S.t.V6nAfH)
                          })
                      ]
                  }),
        es = z <= 1 ? S.intl.string(S.t.TXNS7e) : S.intl.formatToPlainString(S.t.jWtYUl, { count: z });
    return (0, l.jsxs)(
        s.Y0X,
        C(
            v(
                {
                    className: O.modal,
                    'aria-label': S.intl.string(S.t['+SkRRk'])
                },
                L
            ),
            {
                parentComponent: 'ForwardModal',
                children: [
                    (0, l.jsxs)(s.xBx, {
                        className: O.header,
                        children: [
                            (0, l.jsxs)('div', {
                                className: O.titleLine,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: O.title,
                                        children: (0, l.jsx)(s.y5t, {
                                            component: (0, l.jsx)(s.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: S.intl.string(S.t['+SkRRk'])
                                            }),
                                            children: V
                                                ? (0, l.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-feedback-warning',
                                                      children: S.intl.format(S.t['3Fbkio'], { count: I.G })
                                                  })
                                                : (0, l.jsx)(s.X6q, {
                                                      variant: 'heading-sm/normal',
                                                      color: 'header-muted',
                                                      children: S.intl.string(S.t['VA+btL'])
                                                  })
                                        })
                                    }),
                                    (0, l.jsx)(s.olH, {
                                        className: O.closeButton,
                                        onClick: ee
                                    })
                                ]
                            }),
                            (0, l.jsx)(s.E1j, {
                                ref: et,
                                size: s.E1j.Sizes.MEDIUM,
                                query: B,
                                onChange: J,
                                onClear: $,
                                placeholder: S.intl.string(S.t['5h0QOD']),
                                'aria-label': S.intl.string(S.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    ea,
                    (0, l.jsx)(b.n, {
                        message: F,
                        forwardOptions: P,
                        sendLabel: es,
                        canSend: z > 0,
                        selectedDestinations: W,
                        isSending: D,
                        onSend: ei
                    })
                ]
            }
        )
    );
}
