l.d(n, { default: () => w }), l(47120);
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
    N = l(430824),
    g = l(971130),
    j = l(981888),
    f = l(924301),
    p = l(482241),
    E = l(951539),
    C = l(545165),
    I = l(236373),
    W = l(230900),
    T = l(854698),
    Z = l(334877),
    S = l(785468),
    b = l(377329),
    y = l(311166),
    k = l(744782),
    _ = l(129526),
    z = l(765305),
    R = l(981631),
    A = l(388032),
    D = l(325790);
let { INVITE_OPTIONS_7_DAYS: P, INVITE_OPTIONS_UNLIMITED: L } = g.ZP;
var M = (((t = M || {})[(t.ENTITY = 0)] = 'ENTITY'), (t[(t.SETTINGS = 1)] = 'SETTINGS'), (t[(t.PREVIEW = 2)] = 'PREVIEW'), (t[(t.SUCCESS = 3)] = 'SUCCESS'), t);
function U(e) {
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
function G(e) {
    let { guildId: n, guildEvent: l, guildEventId: t, editBroadcastInfoData: d, isEdit: u, formErrors: h, transitionState: v, loading: N, error: g, onChange: j, onSave: p, onClose: E, createdEvent: C } = e,
        I = (0, m.Dt)(),
        W = a.useRef(l),
        T = !(0, r.isEqual)(W.current, l),
        _ = a.useMemo(
            () => [
                {
                    slideId: 0,
                    label: A.NW.string(A.t['56QlKS']),
                    valid: null == h.entity,
                    userErrorMessage: h.entity
                },
                {
                    slideId: 1,
                    label: A.NW.string(A.t['w5/ntb']),
                    valid: null == h.schedule && null == h.topic && (!u || T),
                    userErrorMessage: h.schedule
                },
                {
                    slideId: 2,
                    label: A.NW.string(A.t['8aJzT0']),
                    valid: !0
                }
            ],
            [h, u, T]
        ),
        z = Object.keys(M).length,
        R = (0, f.xt)(l),
        P = (e) => Math.max(0, Math.min(e, z - 1)),
        [L, G] = a.useState(R ? 1 : 0),
        [w, V] = a.useState(!1),
        F = a.useMemo(
            () =>
                _.slice(0, L + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [_, L]
        ),
        B = L >= _.length ? 3 : _[P(L)].slideId,
        X = 3 === B;
    (0, Z.l)((e) => e.onUpdateCanCloseModal)(X);
    let O = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        q = a.useRef(null),
        Y = (e) => {
            V(!1), G(P(e));
        },
        H = a.useRef(Y);
    a.useEffect(() => {
        H.current = Y;
    }),
        a.useEffect(() => {
            (null == C ? void 0 : C.id) != null && H.current(3);
        }, [null == C ? void 0 : C.id]);
    let J = () => {
            F && (2 === B ? p() : X ? E() : Y(L + 1));
        },
        K = () => {
            Y(L - 1);
        },
        Q = A.NW.string(A.t.PDTjLC);
    return (
        2 === B && (Q = u ? A.NW.string(A.t.e5VEcH) : A.NW.string(A.t['60lJ0N'])),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(o.Y0X, {
                transitionState: v,
                'aria-labelledby': I,
                size: o.CgR.DYNAMIC,
                children: [
                    !O && X ? (0, i.jsx)(U, { modal: q.current }) : null,
                    (0, i.jsxs)(o.hzk, {
                        className: D.content,
                        scrollerRef: q,
                        children: [
                            !X &&
                                (0, i.jsx)(x.Z, {
                                    steps: _.map((e) => e.label),
                                    stepIndex: L,
                                    onClick: (e) => {
                                        e < L ? K() : e > L && J();
                                    }
                                }),
                            (0, i.jsxs)(o.MyZ, {
                                activeSlide: B,
                                width: 440,
                                onSlideReady: (e) => {
                                    V(e === B);
                                },
                                children: [
                                    (0, i.jsx)(o.Mi4, {
                                        id: 0,
                                        children: (0, i.jsx)(S.Z, {
                                            guildId: n,
                                            guildEvent: l,
                                            validationErrorMessage: h.entity,
                                            isSlideReady: w,
                                            onChange: j
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 1,
                                        children: (0, i.jsx)(y.Z, {
                                            guildEvent: l,
                                            guildEventId: t,
                                            guildId: n,
                                            editBroadcastInfoData: d,
                                            onChange: j,
                                            error: g,
                                            validationErrorMessage: h.schedule,
                                            isSlideReady: w
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 2,
                                        children: (0, i.jsx)(b.Z, {
                                            guildId: n,
                                            guildEvent: l,
                                            guildEventId: t,
                                            error: g
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 3,
                                        children: (0, i.jsx)(k.Z, {
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
                            className: D.footer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: D.inline,
                                    children: [
                                        (0, i.jsx)(o.zxk, {
                                            color: o.zxk.Colors.PRIMARY,
                                            onClick: E,
                                            children: A.NW.string(A.t['ETE/oK'])
                                        }),
                                        (0, i.jsx)(o.zxk, {
                                            onClick: J,
                                            disabled: !F,
                                            className: D.button,
                                            submitting: N,
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
                                        children: A.NW.string(A.t['13/7kZ'])
                                    })
                            ]
                        })
                ]
            })
        })
    );
}
function w(e) {
    let { guildId: n, guildScheduledEventId: t, transitionState: r, onClose: c } = e,
        u = (0, s.e7)([N.Z], () => N.Z.getGuild(n)),
        x = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(t), [t]),
        m = (0, s.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
        g = (0, I.j$)(x, m),
        [Z, S] = a.useState(g),
        [b] = a.useState((0, I.Ql)(x)),
        [y, k] = a.useState(null),
        D = (e) => {
            var n;
            let l = (0, E.so)(e),
                t = null !== (n = e.channel_id) && void 0 !== n ? n : null == m ? void 0 : m.id;
            null != t &&
                d.Z.createInvite(
                    t,
                    {
                        max_age: P.value,
                        max_uses: L.value
                    },
                    R.t4x.GUILD_EVENTS
                ),
                l ? k(e) : c();
        },
        M = (0, h.Z)(u, null == x ? void 0 : x.id, Z),
        [U, { loading: w, error: V }] = (0, j.Z)(async () => {
            if (null != y) return;
            let e = { broadcastToDirectoryChannels: M.broadcastToDirectoryChannels };
            if (b && null != t) return await p.Z.saveEvent(t, Z, n, e), c();
            let l = await p.Z.createGuildEvent(Z, n, e);
            return D(l.body), l;
        }),
        F = a.useMemo(() => (0, _.Z)(Z, b), [Z, b]);
    return (0, i.jsx)(G, {
        guildId: n,
        guildEvent: Z,
        guildEventId: t,
        editBroadcastInfoData: M,
        isEdit: b,
        formErrors: F,
        transitionState: r,
        loading: w,
        error: V,
        onChange: (e) => {
            if (null != e.entityType) {
                var l;
                let t = (0, W.xC)(e.entityType),
                    [i] = (0, C.SU)(n, t);
                (e.channelId = null !== (l = null == i ? void 0 : i.id) && void 0 !== l ? l : null), e.entityType !== z.WX.EXTERNAL && Z.entityType === z.WX.EXTERNAL && (e.entityMetadata = null);
            }
            S((n) => ({
                ...n,
                ...e
            }));
        },
        onSave: () => {
            null != Z.recurrenceRule && b && (0, T.BP)(x, Z)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(l.bind(l, 481060));
                      return (n) =>
                          (0, i.jsxs)(e, {
                              ...n,
                              header: A.NW.string(A.t.BW1Qoq),
                              confirmText: A.NW.string(A.t.e5VEcH),
                              cancelText: A.NW.string(A.t.oEAioK),
                              onConfirm: U,
                              children: [
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: A.NW.string(A.t.aNCYam)
                                  }),
                                  (0, i.jsx)('br', {}),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      children: A.NW.format(A.t.RWBa5e, {})
                                  })
                              ]
                          });
                  })
                : U();
        },
        onClose: c,
        createdEvent: y
    });
}
