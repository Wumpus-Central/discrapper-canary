n.d(t, { ForwardModal: () => A }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(392711),
    i = n(442837),
    s = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    m = n(592125),
    p = n(375954),
    h = n(823379),
    g = n(859155),
    _ = n(822869),
    f = n(895442),
    b = n(757853),
    y = n(388275),
    E = n(912332),
    I = n(819727),
    S = n(388032),
    O = n(691176),
    C = n(621054);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    var { message: t, initialSelectedDestinations: A, forwardOptions: N, onClose: T, onRequestSent: P } = e,
        L = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['message', 'initialSelectedDestinations', 'forwardOptions', 'onClose', 'onRequestSent']);
    let { channel_id: j, id: w } = t,
        Z = r.useMemo(() => (0, u.dL)(j), [j]),
        [D, M] = r.useState(!1),
        k = (0, i.e7)(
            [p.Z],
            () => {
                var e;
                return null != (e = p.Z.getMessage(t.channel_id, t.id)) ? e : t;
            },
            [t]
        ),
        R = (0, i.e7)([m.Z], () => m.Z.getChannel(j), [j]),
        F = (0, _.ZF)(),
        G = (0, _.mh)(),
        U = r.useRef(0),
        W = r.useRef(0),
        [H, z] = r.useState(A),
        Q = H.length,
        V = Q >= I.G,
        [B, q] = r.useState(''),
        { results: K, updateSearchText: X } = (0, d.s)({
            selectedDestinations: H,
            originDestination: Z,
            includeMissingDMs: !0
        }),
        Y = r.useCallback(
            (e) => {
                q(e), X(e), (W.current += 1), '' !== e && G(j, w);
            },
            [j, w, G, X]
        ),
        J = r.useCallback(() => {
            (0, _.sF)({
                channelId: j,
                messageId: w,
                numDestinationChanges: U.current,
                numQueryChanges: W.current
            }),
                T();
        }, [j, w, T]),
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
                (0, l.throttle)(
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
                F(j, w, '' !== B),
                    z((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return V ? t : (q(''), (U.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (U.current += 1), a;
                    });
            },
            [j, V, w, B, F]
        ),
        ea = r.useCallback(
            async function (e) {
                var r;
                let { withMessage: l, transitionToDestination: i, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    b = null != (r = p.Z.getMessage(j, w)) ? r : t;
                if (null == b) return void (0, s.showToast)((0, s.createToast)(S.NW.string(S.t.R0RpRU), s.ToastType.FAILURE));
                M(!0);
                let y = (await Promise.all(e.map(u.qx))).filter(h.lm);
                if (
                    (0, f.Z)(b, y) &&
                    !(await new Promise((e) => {
                        (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, a.jsx)(
                                    t,
                                    x(v({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1)
                                    })
                                );
                        });
                    }))
                )
                    return void M(!1);
                d && (0, E.mc)(), null == P || P(), i && (await o.Z.fetchMessages({ channelId: y[0] }), (0, c.Kh)(y[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let I = await g.Z.sendForwards(b, y, x(v({}, N), { withMessage: l })),
                    O = y.some((e) => {
                        let t = m.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    I.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, _.gP)({
                        channelId: j,
                        messageId: w,
                        hasError: !1,
                        hasContextMessage: null != l && '' !== l,
                        numDestinations: y.length,
                        numDestinationChanges: U.current,
                        numQueryChanges: W.current,
                        anyDestinationHasSlowmode: O
                    }),
                        et();
                    return;
                }
                (0, _.gP)({
                    channelId: j,
                    messageId: w,
                    hasError: !0,
                    hasContextMessage: null != l && '' !== l,
                    numDestinations: y.length,
                    numDestinationChanges: U.current,
                    numQueryChanges: W.current,
                    anyDestinationHasSlowmode: O
                });
                let C = e.filter((e, t) => 'rejected' === I[t].status);
                (0, E.Np)({
                    message: b,
                    failedDestinations: C,
                    forwardOptions: N
                });
            },
            [j, N, w, t, P, et]
        ),
        er = r.useCallback(
            (e) => {
                ea(H, {
                    withMessage: e,
                    transitionToDestination: 1 === H.length,
                    closeAfterSend: !0
                });
            },
            [ea, H]
        );
    if (null == k || null == R) return null;
    let el =
            K.length > 0
                ? (0, a.jsx)(b.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: K,
                      rowMode: b.G.TOGGLE,
                      message: k,
                      originChannel: R,
                      handleToggleDestination: en,
                      selectedDestinations: H,
                      disableSelection: V
                  })
                : (0, a.jsxs)(s.hzk, {
                      className: O.noResults,
                      children: [
                          (0, a.jsx)('img', {
                              className: O.noResultsImg,
                              src: C,
                              alt: ''
                          }),
                          (0, a.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: S.NW.string(S.t.V6nAfH)
                          })
                      ]
                  }),
        ei = Q <= 1 ? S.NW.string(S.t.TXNS7e) : S.NW.formatToPlainString(S.t.jWtYUl, { count: Q });
    return (0, a.jsxs)(
        s.Y0X,
        x(
            v(
                {
                    className: O.modal,
                    'aria-label': S.NW.string(S.t['+SkRRk'])
                },
                L
            ),
            {
                children: [
                    (0, a.jsxs)(s.xBx, {
                        className: O.header,
                        children: [
                            (0, a.jsxs)('div', {
                                className: O.titleLine,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: O.title,
                                        children: (0, a.jsx)(s.y5t, {
                                            component: (0, a.jsx)(s.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: S.NW.string(S.t['+SkRRk'])
                                            }),
                                            children: V
                                                ? (0, a.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-warning',
                                                      children: S.NW.format(S.t['3Fbkio'], { count: I.G })
                                                  })
                                                : (0, a.jsx)(s.X6q, {
                                                      variant: 'heading-sm/normal',
                                                      color: 'header-muted',
                                                      children: S.NW.string(S.t['VA+btL'])
                                                  })
                                        })
                                    }),
                                    (0, a.jsx)(s.olH, {
                                        className: O.closeButton,
                                        onClick: J
                                    })
                                ]
                            }),
                            (0, a.jsx)(s.E1j, {
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
                    el,
                    (0, a.jsx)(y.n, {
                        message: k,
                        forwardOptions: N,
                        sendLabel: ei,
                        canSend: Q > 0,
                        selectedDestinations: H,
                        isSending: D,
                        onSend: er
                    })
                ]
            }
        )
    );
}
