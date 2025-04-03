n.d(t, { ForwardModal: () => L }), n(47120);
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
    h = n(934415),
    g = n(572004),
    _ = n(823379),
    f = n(859155),
    b = n(822869),
    y = n(346610),
    E = n(895442),
    I = n(757853),
    S = n(388275),
    C = n(912332),
    O = n(646746),
    v = n(819727),
    x = n(388032),
    A = n(691176),
    N = n(621054);
function T(e) {
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
function P(e, t) {
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
function L(e) {
    var { message: t, initialSelectedDestinations: L, forwardOptions: j, onClose: w, onRequestSent: Z } = e,
        D = (function (e, t) {
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
    let { channel_id: k, id: M } = t,
        { hasOneTapSendButton: R, hasMessageInput: F, hasPreview: W } = (0, y.yk)({ location: 'ForwardModal' }),
        G = r.useMemo(() => (0, u.dL)(k), [k]),
        [U, z] = r.useState(!1),
        H = (0, i.e7)(
            [p.Z],
            () => {
                var e;
                return null != (e = p.Z.getMessage(t.channel_id, t.id)) ? e : t;
            },
            [t]
        ),
        Q = (0, i.e7)([m.Z], () => m.Z.getChannel(k), [k]),
        V = (0, b.ZF)(),
        B = (0, b.mh)(),
        q = r.useRef(0),
        K = r.useRef(0),
        [X, Y] = r.useState(L),
        J = X.length,
        $ = J >= v.G,
        [ee, et] = r.useState(''),
        { results: en, updateSearchText: ea } = (0, d.s)({
            selectedDestinations: X,
            originDestination: G,
            includeMissingDMs: !0
        }),
        er = r.useCallback(
            (e) => {
                et(e), ea(e), (K.current += 1), '' !== e && B(k, M);
            },
            [k, M, B, ea]
        ),
        el = r.useCallback(() => {
            (0, b.sF)({
                channelId: k,
                messageId: M,
                numDestinationChanges: q.current,
                numQueryChanges: K.current
            }),
                w();
        }, [k, M, w]),
        ei = r.useCallback(() => {
            var e;
            let t = null == (e = m.Z.getChannel(k)) ? void 0 : e.guild_id,
                n = (0, h.wR)(t, k, M);
            (0, s.showToast)((0, s.createToast)(x.NW.string(x.t['L/PwZW']), s.ToastType.LINK)), (0, g.JG)(n), (0, b.xp)(k, M);
        }, [k, M]),
        es = r.useCallback(() => {
            et('');
        }, [et]),
        eo = r.useRef(null);
    r.useEffect(() => {
        if ('' === ee) {
            var e;
            null == (e = eo.current) || e.focus();
        }
    }, [ee]);
    let ec = r.useMemo(
            () =>
                (0, l.throttle)(
                    () => {
                        (0, s.showToast)((0, s.createToast)(x.NW.string(x.t.kwmYkp), s.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        eu = r.useCallback(
            (e) => {
                V(k, M, '' !== ee),
                    Y((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return $ ? t : (et(''), (q.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (q.current += 1), a;
                    });
            },
            [k, $, M, ee, V]
        ),
        ed = r.useCallback(
            async function (e) {
                var r;
                let { withMessage: l, transitionToDestination: i, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    h = null != (r = p.Z.getMessage(k, M)) ? r : t;
                if (null == h) return void (0, s.showToast)((0, s.createToast)(x.NW.string(x.t.R0RpRU), s.ToastType.FAILURE));
                z(!0);
                let g = (await Promise.all(e.map(u.qx))).filter(_.lm);
                if (
                    (0, E.Z)(h, g) &&
                    !(await new Promise((e) => {
                        (0, s.ZDy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, a.jsx)(
                                    t,
                                    P(T({}, n), {
                                        onConfirm: () => e(!0),
                                        onBack: () => e(!1)
                                    })
                                );
                        });
                    }))
                )
                    return void z(!1);
                d && (0, C.mc)(), null == Z || Z(), i && (await o.Z.fetchMessages({ channelId: g[0] }), (0, c.Kh)(g[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let y = await f.Z.sendForwards(h, g, P(T({}, j), { withMessage: l })),
                    I = g.some((e) => {
                        let t = m.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    y.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, b.gP)({
                        channelId: k,
                        messageId: M,
                        hasError: !1,
                        hasContextMessage: null != l && '' !== l,
                        numDestinations: g.length,
                        numDestinationChanges: q.current,
                        numQueryChanges: K.current,
                        anyDestinationHasSlowmode: I
                    }),
                        ec();
                    return;
                }
                (0, b.gP)({
                    channelId: k,
                    messageId: M,
                    hasError: !0,
                    hasContextMessage: null != l && '' !== l,
                    numDestinations: g.length,
                    numDestinationChanges: q.current,
                    numQueryChanges: K.current,
                    anyDestinationHasSlowmode: I
                });
                let S = e.filter((e, t) => 'rejected' === y[t].status);
                (0, C.Np)({
                    message: h,
                    failedDestinations: S,
                    forwardOptions: j
                });
            },
            [k, j, M, t, Z, ec]
        ),
        em = r.useCallback(
            (e) => {
                ed(X, {
                    withMessage: e,
                    transitionToDestination: 1 === X.length,
                    closeAfterSend: !0
                });
            },
            [ed, X]
        ),
        ep = r.useCallback(() => em(), [em]),
        eh = r.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ed([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [ed]
        );
    if (null == H || null == Q) return null;
    let eg =
            en.length > 0
                ? (0, a.jsx)(I.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: en,
                      rowMode: R ? I.G.SEND : I.G.TOGGLE,
                      message: H,
                      originChannel: Q,
                      handleToggleDestination: R ? eh : eu,
                      selectedDestinations: X,
                      disableSelection: $
                  })
                : (0, a.jsxs)(s.hzk, {
                      className: A.noResults,
                      children: [
                          (0, a.jsx)('img', {
                              className: A.noResultsImg,
                              src: N,
                              alt: ''
                          }),
                          (0, a.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: x.NW.string(x.t.V6nAfH)
                          })
                      ]
                  }),
        e_ = J <= 1 ? x.NW.string(x.t.TXNS7e) : x.NW.formatToPlainString(x.t.jWtYUl, { count: J });
    return (0, a.jsxs)(
        s.Y0X,
        P(
            T(
                {
                    className: A.modal,
                    'aria-label': x.NW.string(x.t['+SkRRk'])
                },
                D
            ),
            {
                children: [
                    (0, a.jsxs)(s.xBx, {
                        className: A.header,
                        children: [
                            (0, a.jsxs)('div', {
                                className: A.titleLine,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: A.title,
                                        children: (0, a.jsx)(s.y5t, {
                                            component: (0, a.jsx)(s.X6q, {
                                                variant: 'heading-lg/semibold',
                                                children: x.NW.string(x.t['+SkRRk'])
                                            }),
                                            children: $
                                                ? (0, a.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-warning',
                                                      children: x.NW.format(x.t['3Fbkio'], { count: v.G })
                                                  })
                                                : (R || F) &&
                                                  (0, a.jsx)(s.X6q, {
                                                      variant: 'heading-sm/normal',
                                                      color: 'header-muted',
                                                      children: x.NW.string(x.t['VA+btL'])
                                                  })
                                        })
                                    }),
                                    (0, a.jsx)(s.olH, {
                                        className: A.closeButton,
                                        onClick: el
                                    })
                                ]
                            }),
                            R &&
                                W &&
                                (0, a.jsx)('div', {
                                    className: A.forwardPreviewWrapperInset,
                                    children: (0, a.jsx)(O.O, {
                                        message: H,
                                        forwardOptions: j
                                    })
                                }),
                            (0, a.jsx)(s.E1j, {
                                ref: eo,
                                size: s.E1j.Sizes.MEDIUM,
                                query: ee,
                                onChange: er,
                                onClear: es,
                                placeholder: x.NW.string(x.t['5h0QOD']),
                                'aria-label': x.NW.string(x.t['5h0QOD']),
                                autoFocus: !0
                            })
                        ]
                    }),
                    eg,
                    !R &&
                        (F
                            ? (0, a.jsx)(S.n, {
                                  message: H,
                                  forwardOptions: j,
                                  sendLabel: e_,
                                  canSend: J > 0,
                                  selectedDestinations: X,
                                  isSending: U,
                                  onSend: em,
                                  showPreview: W
                              })
                            : (0, a.jsxs)(s.mzw, {
                                  className: A.footer,
                                  children: [
                                      (0, a.jsx)(s.zxk, {
                                          submitting: U,
                                          disabled: 0 === J,
                                          onClick: ep,
                                          children: e_
                                      }),
                                      (0, a.jsx)(s.zxk, {
                                          onClick: ei,
                                          look: s.zxk.Looks.OUTLINED,
                                          color: s.zxk.Colors.PRIMARY,
                                          children: x.NW.string(x.t.WqhZsr)
                                      })
                                  ]
                              }))
                ]
            }
        )
    );
}
