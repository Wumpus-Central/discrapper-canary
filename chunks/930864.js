n.d(t, { ForwardModal: () => N }), n(47120);
var a = n(200651),
    l = n(192379),
    i = n(392711),
    s = n(442837),
    r = n(481060),
    o = n(348245),
    c = n(359110),
    d = n(987509),
    u = n(72214),
    m = n(592125),
    _ = n(375954),
    h = n(934415),
    g = n(572004),
    p = n(823379),
    f = n(859155),
    E = n(822869),
    I = n(346610),
    C = n(895442),
    x = n(757853),
    A = n(388275),
    S = n(912332),
    T = n(646746),
    v = n(819727),
    b = n(388032),
    L = n(121059),
    y = n(621054);
function N(e) {
    let { message: t, initialSelectedDestinations: N, forwardOptions: P, onClose: Z, onRequestSent: M, ...w } = e,
        { channel_id: R, id: D } = t,
        { hasOneTapSendButton: O, hasMessageInput: j, hasPreview: k } = (0, I.yk)({ location: 'ForwardModal' }),
        F = l.useMemo(() => (0, d.dL)(R), [R]),
        [G, U] = l.useState(!1),
        H = (0, s.e7)(
            [_.Z],
            () => {
                var e;
                return null !== (e = _.Z.getMessage(t.channel_id, t.id)) && void 0 !== e ? e : t;
            },
            [t]
        ),
        W = (0, s.e7)([m.Z], () => m.Z.getChannel(R), [R]),
        z = (0, E.ZF)(),
        Q = (0, E.mh)(),
        V = l.useRef(0),
        B = l.useRef(0),
        [q, K] = l.useState(N),
        X = q.length,
        Y = X >= v.G,
        [J, $] = l.useState(''),
        { results: ee, updateSearchText: et } = (0, u.s)({
            selectedDestinations: q,
            originDestination: F,
            includeMissingDMs: !0
        }),
        en = l.useCallback(
            (e) => {
                $(e), et(e), (B.current += 1), '' !== e && Q(R, D);
            },
            [R, D, Q, et]
        ),
        ea = l.useCallback(() => {
            (0, E.sF)({
                channelId: R,
                messageId: D,
                numDestinationChanges: V.current,
                numQueryChanges: B.current
            }),
                Z();
        }, [R, D, Z]),
        el = l.useCallback(() => {
            var e;
            let t = null === (e = m.Z.getChannel(R)) || void 0 === e ? void 0 : e.guild_id,
                n = (0, h.wR)(t, R, D);
            (0, r.showToast)((0, r.createToast)(b.intl.string(b.t['L/PwZW']), r.ToastType.LINK)), (0, g.JG)(n), (0, E.xp)(R, D);
        }, [R, D]),
        ei = l.useCallback(() => {
            $('');
        }, [$]),
        es = l.useRef(null);
    l.useEffect(() => {
        if ('' === J) {
            var e;
            null === (e = es.current) || void 0 === e || e.focus();
        }
    }, [J]);
    let er = l.useMemo(
            () =>
                (0, i.throttle)(
                    () => {
                        (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.kwmYkp), r.ToastType.FORWARD));
                    },
                    3000,
                    {
                        leading: !0,
                        trailing: !1
                    }
                ),
            []
        ),
        eo = l.useCallback(
            (e) => {
                z(R, D, '' !== J),
                    K((t) => {
                        let n = t.findIndex((t) => {
                            let { type: n, id: a } = t;
                            return n === e.type && a === e.id;
                        });
                        if (-1 === n) return Y ? t : ($(''), (V.current += 1), [e, ...t]);
                        let a = [...t];
                        return a.splice(n, 1), (V.current += 1), a;
                    });
            },
            [R, Y, D, J, z]
        ),
        ec = l.useCallback(
            async function (e) {
                var l;
                let { withMessage: i, transitionToDestination: s, closeAfterSend: u } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    h = null !== (l = _.Z.getMessage(R, D)) && void 0 !== l ? l : t;
                if (null == h) {
                    (0, r.showToast)((0, r.createToast)(b.intl.string(b.t.R0RpRU), r.ToastType.FAILURE));
                    return;
                }
                U(!0);
                let g = (await Promise.all(e.map(d.qx))).filter(p.lm);
                if (
                    (0, C.Z)(h, g) &&
                    !(await new Promise((e) => {
                        (0, r.ZDy)(async () => {
                            let { default: t } = await n.e('88643').then(n.bind(n, 466080));
                            return (n) =>
                                (0, a.jsx)(t, {
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
                u && (0, S.mc)(), null == M || M(), s && (await o.Z.fetchMessages({ channelId: g[0] }), (0, c.Kh)(g[0], { openTextInVoiceIfVoiceChannel: !0 }));
                let I = await f.Z.sendForwards(h, g, {
                        ...P,
                        withMessage: i
                    }),
                    x = g.some((e) => {
                        let t = m.Z.getChannel(e);
                        return null != t && t.rateLimitPerUser > 0;
                    });
                if (
                    I.every((e) => {
                        let { status: t } = e;
                        return 'fulfilled' === t;
                    })
                ) {
                    (0, E.gP)({
                        channelId: R,
                        messageId: D,
                        hasError: !1,
                        hasContextMessage: null != i && '' !== i,
                        numDestinations: g.length,
                        numDestinationChanges: V.current,
                        numQueryChanges: B.current,
                        anyDestinationHasSlowmode: x
                    }),
                        er();
                    return;
                }
                (0, E.gP)({
                    channelId: R,
                    messageId: D,
                    hasError: !0,
                    hasContextMessage: null != i && '' !== i,
                    numDestinations: g.length,
                    numDestinationChanges: V.current,
                    numQueryChanges: B.current,
                    anyDestinationHasSlowmode: x
                });
                let A = e.filter((e, t) => 'rejected' === I[t].status);
                (0, S.Np)({
                    message: h,
                    failedDestinations: A,
                    forwardOptions: P
                });
            },
            [R, P, D, t, M, er]
        ),
        ed = l.useCallback(
            (e) => {
                ec(q, {
                    withMessage: e,
                    transitionToDestination: 1 === q.length,
                    closeAfterSend: !0
                });
            },
            [ec, q]
        ),
        eu = l.useCallback(() => ed(), [ed]),
        em = l.useCallback(
            function (e) {
                let { transitionToDestination: t, closeAfterSend: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ec([e], {
                    transitionToDestination: t,
                    closeAfterSend: n
                });
            },
            [ec]
        );
    if (null == H || null == W) return null;
    let e_ =
            ee.length > 0
                ? (0, a.jsx)(x.F, {
                      paddingBottom: 16,
                      paddingTop: 16,
                      rowData: ee,
                      rowMode: O ? x.G.SEND : x.G.TOGGLE,
                      message: H,
                      originChannel: W,
                      handleToggleDestination: O ? em : eo,
                      selectedDestinations: q,
                      disableSelection: Y
                  })
                : (0, a.jsxs)(r.hzk, {
                      className: L.noResults,
                      children: [
                          (0, a.jsx)('img', {
                              className: L.noResultsImg,
                              src: y,
                              alt: ''
                          }),
                          (0, a.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: b.intl.string(b.t.V6nAfH)
                          })
                      ]
                  }),
        eh = X <= 1 ? b.intl.string(b.t.TXNS7e) : b.intl.formatToPlainString(b.t.jWtYUl, { count: X });
    return (0, a.jsxs)(r.Y0X, {
        className: L.modal,
        'aria-label': b.intl.string(b.t['+SkRRk']),
        ...w,
        children: [
            (0, a.jsxs)(r.xBx, {
                className: L.header,
                children: [
                    (0, a.jsxs)('div', {
                        className: L.titleLine,
                        children: [
                            (0, a.jsx)('div', {
                                className: L.title,
                                children: (0, a.jsx)(r.y5t, {
                                    component: (0, a.jsx)(r.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: b.intl.string(b.t['+SkRRk'])
                                    }),
                                    children: Y
                                        ? (0, a.jsx)(r.Text, {
                                              variant: 'text-sm/normal',
                                              color: 'text-warning',
                                              children: b.intl.format(b.t['3Fbkio'], { count: v.G })
                                          })
                                        : (O || j) &&
                                          (0, a.jsx)(r.X6q, {
                                              variant: 'heading-sm/normal',
                                              color: 'header-muted',
                                              children: b.intl.string(b.t['VA+btL'])
                                          })
                                })
                            }),
                            (0, a.jsx)(r.olH, {
                                className: L.closeButton,
                                onClick: ea
                            })
                        ]
                    }),
                    O &&
                        k &&
                        (0, a.jsx)('div', {
                            className: L.forwardPreviewWrapperInset,
                            children: (0, a.jsx)(T.O, {
                                message: H,
                                forwardOptions: P
                            })
                        }),
                    (0, a.jsx)(r.E1j, {
                        ref: es,
                        size: r.E1j.Sizes.MEDIUM,
                        query: J,
                        onChange: en,
                        onClear: ei,
                        placeholder: b.intl.string(b.t['5h0QOD']),
                        'aria-label': b.intl.string(b.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            e_,
            !O &&
                (j
                    ? (0, a.jsx)(A.n, {
                          message: H,
                          forwardOptions: P,
                          sendLabel: eh,
                          canSend: X > 0,
                          selectedDestinations: q,
                          isSending: G,
                          onSend: ed,
                          showPreview: k
                      })
                    : (0, a.jsxs)(r.mzw, {
                          className: L.footer,
                          children: [
                              (0, a.jsx)(r.zxk, {
                                  submitting: G,
                                  disabled: 0 === X,
                                  onClick: eu,
                                  children: eh
                              }),
                              (0, a.jsx)(r.zxk, {
                                  onClick: el,
                                  look: r.zxk.Looks.OUTLINED,
                                  color: r.zxk.Colors.PRIMARY,
                                  children: b.intl.string(b.t.WqhZsr)
                              })
                          ]
                      }))
        ]
    });
}
