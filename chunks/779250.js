l.d(n, { default: () => V }), l(47120);
var t,
    i = l(200651),
    a = l(192379),
    r = l(392711),
    s = l(442837),
    o = l(481060),
    d = l(447543),
    c = l(607070),
    u = l(745510),
    x = l(96698),
    m = l(313201),
    h = l(433775),
    v = l(984933),
    g = l(430824),
    j = l(971130),
    N = l(981888),
    f = l(924301),
    p = l(482241),
    E = l(951539),
    C = l(545165),
    I = l(236373),
    T = l(230900),
    Z = l(854698),
    S = l(334877),
    b = l(785468),
    y = l(377329),
    k = l(311166),
    _ = l(744782),
    z = l(129526),
    R = l(765305),
    A = l(981631),
    D = l(388032),
    P = l(859312);
let { INVITE_OPTIONS_7_DAYS: L, INVITE_OPTIONS_UNLIMITED: M } = j.ZP;
var U = (((t = U || {})[(t.ENTITY = 0)] = 'ENTITY'), (t[(t.SETTINGS = 1)] = 'SETTINGS'), (t[(t.PREVIEW = 2)] = 'PREVIEW'), (t[(t.SUCCESS = 3)] = 'SUCCESS'), t);
function G(e) {
    let { modal: n } = e,
        { createMultipleConfetti: l } = a.useContext(u.h);
    return (
        a.useEffect(() => {
            let e = null == n ? void 0 : n.getScrollerNode();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            l(
                {
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: t.left - 100,
                            y: t.top - 100
                        },
                        maxValue: {
                            x: t.left + 100,
                            y: t.top + 100
                        }
                    },
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -20,
                            y: -20
                        },
                        maxValue: {
                            x: -60,
                            y: -60
                        }
                    }
                },
                80
            ),
                l(
                    {
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: t.right - 100,
                                y: t.top - 100
                            },
                            maxValue: {
                                x: t.right + 100,
                                y: t.top + 100
                            }
                        },
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    },
                    80
                );
        }, [l, n]),
        null
    );
}
function w(e) {
    let { guildId: n, guildEvent: l, guildEventId: t, editBroadcastInfoData: d, isEdit: u, formErrors: h, transitionState: v, loading: g, error: j, onChange: N, onSave: p, onClose: E, createdEvent: C } = e,
        I = (0, m.Dt)(),
        T = a.useRef(l),
        Z = !(0, r.isEqual)(T.current, l),
        z = a.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.intl.string(D.t['56QlKS']),
                    valid: null == h.entity,
                    userErrorMessage: h.entity
                },
                {
                    slideId: 1,
                    label: D.intl.string(D.t['w5/ntb']),
                    valid: null == h.schedule && null == h.topic && (!u || Z),
                    userErrorMessage: h.schedule
                },
                {
                    slideId: 2,
                    label: D.intl.string(D.t['8aJzT0']),
                    valid: !0
                }
            ],
            [h, u, Z]
        ),
        R = Object.keys(U).length,
        A = (0, f.xt)(l),
        L = (e) => Math.max(0, Math.min(e, R - 1)),
        [M, w] = a.useState(A ? 1 : 0),
        [V, F] = a.useState(!1),
        W = a.useMemo(
            () =>
                z
                    .slice(0, M + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [z, M]
        ),
        B = M >= z.length ? 3 : z[L(M)].slideId,
        X = 3 === B;
    (0, S.l)((e) => e.onUpdateCanCloseModal)(X);
    let O = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        q = a.useRef(null),
        Y = (e) => {
            F(!1), w(L(e));
        },
        H = a.useRef(Y);
    a.useEffect(() => {
        H.current = Y;
    }),
        a.useEffect(() => {
            (null == C ? void 0 : C.id) != null && H.current(3);
        }, [null == C ? void 0 : C.id]);
    let J = () => {
            W && (2 === B ? p() : X ? E() : Y(M + 1));
        },
        K = () => {
            Y(M - 1);
        },
        Q = D.intl.string(D.t.PDTjLC);
    return (
        2 === B && (Q = u ? D.intl.string(D.t.e5VEcH) : D.intl.string(D.t['60lJ0N'])),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(o.Y0X, {
                transitionState: v,
                'aria-labelledby': I,
                size: o.CgR.DYNAMIC,
                children: [
                    !O && X ? (0, i.jsx)(G, { modal: q.current }) : null,
                    (0, i.jsxs)(o.hzk, {
                        className: P.content,
                        scrollerRef: q,
                        children: [
                            !X &&
                                (0, i.jsx)(x.Z, {
                                    steps: z.map((e) => e.label),
                                    stepIndex: M,
                                    onClick: (e) => {
                                        e < M ? K() : e > M && J();
                                    }
                                }),
                            (0, i.jsxs)(o.MyZ, {
                                activeSlide: B,
                                width: 440,
                                onSlideReady: (e) => {
                                    F(e === B);
                                },
                                children: [
                                    (0, i.jsx)(o.Mi4, {
                                        id: 0,
                                        children: (0, i.jsx)(b.Z, {
                                            guildId: n,
                                            guildEvent: l,
                                            validationErrorMessage: h.entity,
                                            isSlideReady: V,
                                            onChange: N
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 1,
                                        children: (0, i.jsx)(k.Z, {
                                            guildEvent: l,
                                            guildEventId: t,
                                            guildId: n,
                                            editBroadcastInfoData: d,
                                            onChange: N,
                                            error: j,
                                            validationErrorMessage: h.schedule,
                                            isSlideReady: V
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 2,
                                        children: (0, i.jsx)(y.Z, {
                                            guildId: n,
                                            guildEvent: l,
                                            guildEventId: t,
                                            error: j
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 3,
                                        children: (0, i.jsx)(_.Z, {
                                            onClose: E,
                                            event: C
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !X &&
                        (0, i.jsxs)(o.mzw, {
                            className: P.footer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: P.inline,
                                    children: [
                                        (0, i.jsx)(o.zxk, {
                                            color: o.zxk.Colors.PRIMARY,
                                            onClick: E,
                                            children: D.intl.string(D.t['ETE/oK'])
                                        }),
                                        (0, i.jsx)(o.zxk, {
                                            onClick: J,
                                            disabled: !W,
                                            className: P.button,
                                            submitting: g,
                                            children: Q
                                        })
                                    ]
                                }),
                                0 !== B &&
                                    (0, i.jsx)(o.zxk, {
                                        look: o.zxk.Looks.LINK,
                                        size: o.zxk.Sizes.MIN,
                                        onClick: K,
                                        color: o.zxk.Colors.LINK,
                                        children: D.intl.string(D.t['13/7kZ'])
                                    })
                            ]
                        })
                ]
            })
        })
    );
}
function V(e) {
    let { guildId: n, guildScheduledEventId: t, transitionState: r, onClose: c } = e,
        u = (0, s.e7)([g.Z], () => g.Z.getGuild(n)),
        x = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(t), [t]),
        m = (0, s.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
        j = (0, I.j$)(x, m),
        [S, b] = a.useState(j),
        [y] = a.useState((0, I.Ql)(x)),
        [k, _] = a.useState(null),
        P = (e) => {
            var n;
            let l = (0, E.so)(e),
                t = null !== (n = e.channel_id) && void 0 !== n ? n : null == m ? void 0 : m.id;
            null != t &&
                d.Z.createInvite(
                    t,
                    {
                        max_age: L.value,
                        max_uses: M.value
                    },
                    A.t4x.GUILD_EVENTS
                ),
                l ? _(e) : c();
        },
        U = (0, h.Z)(u, null == x ? void 0 : x.id, S),
        [G, { loading: V, error: F }] = (0, N.Z)(async () => {
            if (null != k) return;
            let e = { broadcastToDirectoryChannels: U.broadcastToDirectoryChannels };
            if (y && null != t) return await p.Z.saveEvent(t, S, n, e), c();
            let l = await p.Z.createGuildEvent(S, n, e);
            return P(l.body), l;
        }),
        W = a.useMemo(() => (0, z.Z)(S, y), [S, y]);
    return (0, i.jsx)(w, {
        guildId: n,
        guildEvent: S,
        guildEventId: t,
        editBroadcastInfoData: U,
        isEdit: y,
        formErrors: W,
        transitionState: r,
        loading: V,
        error: F,
        onChange: (e) => {
            if (null != e.entityType) {
                var l;
                let t = (0, T.xC)(e.entityType),
                    [i] = (0, C.SU)(n, t);
                (e.channelId = null !== (l = null == i ? void 0 : i.id) && void 0 !== l ? l : null), e.entityType !== R.WX.EXTERNAL && S.entityType === R.WX.EXTERNAL && (e.entityMetadata = null);
            }
            b((n) => ({
                ...n,
                ...e
            }));
        },
        onSave: () => {
            null != S.recurrenceRule && y && (0, Z.BP)(x, S)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(l.bind(l, 481060));
                      return (n) =>
                          (0, i.jsxs)(e, {
                              ...n,
                              header: D.intl.string(D.t.BW1Qoq),
                              confirmText: D.intl.string(D.t.e5VEcH),
                              cancelText: D.intl.string(D.t.oEAioK),
                              onConfirm: G,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: D.intl.string(D.t.aNCYam)
                                  }),
                                  (0, i.jsx)('br', {}),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: D.intl.format(D.t.RWBa5e, {})
                                  })
                              ]
                          });
                  })
                : G();
        },
        onClose: c,
        createdEvent: k
    });
}
