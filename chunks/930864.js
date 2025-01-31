n.d(t, { ForwardModal: () => y }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(392711),
    s = n(442837),
    r = n(481060),
    o = n(348245),
    c = n(359110),
    u = n(987509),
    d = n(72214),
    _ = n(592125),
    h = n(375954),
    f = n(934415),
    g = n(572004),
    m = n(823379),
    E = n(859155),
    p = n(822869),
    I = n(346610),
    A = n(895442),
    S = n(757853),
    C = n(388275),
    x = n(912332),
    b = n(646746),
    L = n(819727),
    v = n(388032),
    N = n(190417),
    T = n(621054);
function y(e) {
    let { message: t, initialSelectedDestinations: y, forwardOptions: P, onClose: Z, onRequestSent: w, ...R } = e,
        { channel_id: O, id: k } = t,
        { hasOneTapSendButton: D, hasMessageInput: j, hasPreview: F } = (0, I.yk)({ location: 'ForwardModal' }),
        M = i.useMemo(() => (0, u.dL)(O), [O]),
        [G, U] = i.useState(!1),
        W = (0, s.e7)(
            [h.Z],
            () => {
                var e;
                return null !== (e = h.Z.getMessage(t.channel_id, t.id)) && void 0 !== e ? e : t;
            },
            [t]
        ),
        z = (0, s.e7)([_.Z], () => _.Z.getChannel(O), [O]),
        Q = (0, p.ZF)(),
        H = (0, p.mh)(),
        V = i.useRef(0),
        B = i.useRef(0),
        [q, K] = i.useState(y),
        Y = q.length,
        X = Y >= L.G,
        [J, $] = i.useState(''),
        { results: ee, updateSearchText: et } = (0, d.s)({
            selectedDestinations: q,
            originDestination: M,
            includeMissingDMs: !0
        }),
        en = i.useCallback(
            (e) => {
                $(e), et(e), (B.current += 1), '' !== e && H(O, k);
            },
            [O, k, H, et]
        ),
        el = i.useCallback(() => {
            (0, p.sF)({
                channelId: O,
                messageId: k,
                numDestinationChanges: V.current,
                numQueryChanges: B.current
            }),
                Z();
        }, [O, k, Z]),
        ei = i.useCallback(() => {
            var e;
            let t = null === (e = _.Z.getChannel(O)) || void 0 === e ? void 0 : e.guild_id,
                n = (0, f.wR)(t, O, k);
            (0, r.showToast)((0, r.createToast)(v.intl.string(v.t['L/PwZW']), r.ToastType.LINK)), (0, g.JG)(n), (0, p.xp)(O, k);
        }, [O, k]),
        ea = i.useCallback(() => {
            $('');
        }, [$]),
        es = i.useRef(null);
    i.useEffect(() => {
        if ('' === J) {
            var e;
            null === (e = es.current) || void 0 === e || e.focus();
        }
    }, [J]);
    let er = i.useMemo(
            () =>
                (0, a.throttle)(
                    () => {
                        (0, r.showToast)((0, r.createToast)(v.intl.string(v.t.kwmYkp), r.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        eo = i.useCallback(
            (e) => {
                Q(O, k, '' !== J),
                    K((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: l } = t;
                            return n === e.type && l === e.id;
                        });
                        if (-1 === n) return X ? t : ($(''), (V.current += 1), [e, ...t]);
                        let l = [...t];
                        return l.splice(n, 1), (V.current += 1), l;
                    });
            },
            [O, X, k, J, Q]
        ),
        ec = i.useCallback(
            async function (e) {
                var i;
                let { withMessage: a, transitionToDestination: s, closeAfterSend: d } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    f = null !== (i = h.Z.getMessage(O, k)) && void 0 !== i ? i : t;
                if (null == f) {
                    (0, r.showToast)((0, r.createToast)(v.intl.string(v.t.R0RpRU), r.ToastType.FAILURE));
                    return;
                }
                U(!0);
                let g = (await Promise.all(e.map(u.qx))).filter(m.lm);
                if (
                    (0, A.Z)(f, g) &&
                    !(await new Promise((e) => {
                        (0, r.ZDy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, l.jsx)(t, {
                                    ...n,
                                    onConfirm: () => e(!0),
                                    onBack: () => e(!1)
                                });
                        });
                    }))
                ) {
                    U(!1);
                    return;
                }
                d && (0, x.mc)(), null == w || w(), s && (await o.Z.fetchMessages({ channelId: g[0] }), (0, c.Kh)(g[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let I = await E.Z.sendForwards(f, g, {
                        ...P,
                        withMessage: a
                    }),
                    S = g.some((e) => {
                        let t = _.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    I.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, p.gP)({
                        channelId: O,
                        messageId: k,
                        hasError: !1,
                        hasContextMessage: null != a && '' !== a,
                        numDestinations: g.length,
                        numDestinationChanges: V.current,
                        numQueryChanges: B.current,
                        anyDestinationHasSlowmode: S
                    }),
                        er();
                    return;
                }
                (0, p.gP)({
                    channelId: O,
                    messageId: k,
                    hasError: !0,
                    hasContextMessage: null != a && '' !== a,
                    numDestinations: g.length,
                    numDestinationChanges: V.current,
                    numQueryChanges: B.current,
                    anyDestinationHasSlowmode: S
                });
                let C = e.filter((e, t) => 'rejected' === I[t].status);
                (0, x.Np)({
                    message: f,
                    failedDestinations: C,
                    forwardOptions: P
                });
            },
            [O, P, k, t, w, er]
        ),
        eu = i.useCallback(
            (e) => {
                ec(q, {
                    withMessage: e,
                    transitionToDestination: 1 === q.length,
                    closeAfterSend: !0
                });
            },
            [ec, q]
        ),
        ed = i.useCallback(() => eu(), [eu]),
        e_ = i.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ec([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [ec]
        );
    if (null == W || null == z) return null;
    let eh =
            ee.length > 0
                ? (0, l.jsx)(S.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: ee,
                      rowMode: D ? S.G.SEND : S.G.TOGGLE,
                      message: W,
                      originChannel: z,
                      handleToggleDestination: D ? e_ : eo,
                      selectedDestinations: q,
                      disableSelection: X
                  })
                : (0, l.jsxs)(r.hzk, {
                      className: N.noResults,
                      children: [
                          (0, l.jsx)('img', {
                              className: N.noResultsImg,
                              src: T,
                              alt: ''
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: v.intl.string(v.t.V6nAfH)
                          })
                      ]
                  }),
        ef = Y <= 1 ? v.intl.string(v.t.TXNS7e) : v.intl.formatToPlainString(v.t.jWtYUl, { count: Y });
    return (0, l.jsxs)(r.Y0X, {
        className: N.modal,
        'aria-label': v.intl.string(v.t['+SkRRk']),
        ...R,
        children: [
            (0, l.jsxs)(r.xBx, {
                className: N.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: N.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: N.title,
                                children: (0, l.jsx)(r.y5t, {
                                    component: (0, l.jsx)(r.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: v.intl.string(v.t['+SkRRk'])
                                    }),
                                    children: X
                                        ? (0, l.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: v.intl.format(v.t['3Fbkio'], { count: L.G })
                                          })
                                        : (D || j) &&
                                          (0, l.jsx)(r.X6q, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: v.intl.string(v.t['VA+btL'])
                                          })
                                })
                            }),
                            (0, l.jsx)(r.olH, {
                                className: N.closeButton,
                                onClick: el
                            })
                        ]
                    }),
                    D &&
                        F &&
                        (0, l.jsx)('div', {
                            className: N.forwardPreviewWrapperInset,
                            children: (0, l.jsx)(b.O, {
                                message: W,
                                forwardOptions: P
                            })
                        }),
                    (0, l.jsx)(r.E1j, {
                        ref: es,
                        size: r.E1j.Sizes.MEDIUM,
                        query: J,
                        onChange: en,
                        onClear: ea,
                        placeholder: v.intl.string(v.t['5h0QOD']),
                        'aria-label': v.intl.string(v.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            eh,
            !D &&
                (j
                    ? (0, l.jsx)(C.n, {
                          message: W,
                          forwardOptions: P,
                          sendLabel: ef,
                          canSend: Y > 0,
                          selectedDestinations: q,
                          isSending: G,
                          onSend: eu,
                          showPreview: F
                      })
                    : (0, l.jsxs)(r.mzw, {
                          className: N.footer,
                          children: [
                              (0, l.jsx)(r.zxk, {
                                  submitting: G,
                                  disabled: 0 === Y,
                                  onClick: ed,
                                  children: ef
                              }),
                              (0, l.jsx)(r.zxk, {
                                  onClick: ei,
                                  look: r.zxk.Looks.OUTLINED,
                                  color: r.zxk.Colors.PRIMARY,
                                  children: v.intl.string(v.t.WqhZsr)
                              })
                          ]
                      }))
        ]
    });
}
