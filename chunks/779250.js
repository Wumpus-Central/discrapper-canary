n.d(t, { default: () => V }), n(388685);
var l,
    r = n(255367),
    i = n(73800),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    m = n(96698),
    x = n(313201),
    g = n(433775),
    h = n(984933),
    v = n(430824),
    f = n(971130),
    p = n(981888),
    j = n(924301),
    b = n(482241),
    y = n(951539),
    O = n(545165),
    N = n(236373),
    E = n(230900),
    C = n(854698),
    I = n(334877),
    S = n(785468),
    T = n(377329),
    P = n(311166),
    w = n(744782),
    Z = n(129526),
    k = n(765305),
    _ = n(981631),
    D = n(388032),
    R = n(365545);
function A(e) {
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
let { INVITE_OPTIONS_7_DAYS: z, INVITE_OPTIONS_UNLIMITED: L } = f.ZP;
var U = (((l = U || {})[(l.ENTITY = 0)] = 'ENTITY'), (l[(l.SETTINGS = 1)] = 'SETTINGS'), (l[(l.PREVIEW = 2)] = 'PREVIEW'), (l[(l.SUCCESS = 3)] = 'SUCCESS'), l);
function M(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.h);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            n(
                {
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: l.left - 100,
                            y: l.top - 100
                        },
                        maxValue: {
                            x: l.left + 100,
                            y: l.top + 100
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
                n(
                    {
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100
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
        }, [n, t]),
        null
    );
}
function G(e) {
    let { guildId: t, guildEvent: n, guildEventId: l, editBroadcastInfoData: c, isEdit: d, formErrors: g, transitionState: h, loading: v, error: f, onChange: p, onSave: b, onClose: y, createdEvent: O } = e,
        N = (0, x.Dt)(),
        E = i.useRef(n),
        C = !(0, a.isEqual)(E.current, n),
        Z = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.intl.string(D.t['56QlKS']),
                    valid: null == g.entity,
                    userErrorMessage: g.entity
                },
                {
                    slideId: 1,
                    label: D.intl.string(D.t['w5/ntb']),
                    valid: null == g.schedule && null == g.topic && (!d || C),
                    userErrorMessage: g.schedule
                },
                {
                    slideId: 2,
                    label: D.intl.string(D.t['8aJzT0']),
                    valid: !0
                }
            ],
            [g, d, C]
        ),
        k = Object.keys(U).length,
        _ = (0, j.xt)(n),
        A = (e) => Math.max(0, Math.min(e, k - 1)),
        [z, L] = i.useState(+!!_),
        [G, V] = i.useState(!1),
        X = i.useMemo(
            () =>
                Z.slice(0, z + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [Z, z]
        ),
        W = z >= Z.length ? 3 : Z[A(z)].slideId,
        F = 3 === W;
    (0, I.l)((e) => e.onUpdateCanCloseModal)(F);
    let B = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        Y = i.useRef(null),
        q = (e) => {
            V(!1), L(A(e));
        },
        H = i.useRef(q);
    i.useEffect(() => {
        H.current = q;
    }),
        i.useEffect(() => {
            (null == O ? void 0 : O.id) != null && H.current(3);
        }, [null == O ? void 0 : O.id]);
    let J = () => {
            X && (2 === W ? b() : F ? y() : q(z + 1));
        },
        K = () => {
            q(z - 1);
        },
        Q = D.intl.string(D.t.PDTjLC);
    return (
        2 === W && (Q = d ? D.intl.string(D.t.e5VEcH) : D.intl.string(D.t['60lJ0N'])),
        (0, r.jsxs)(o.Y0X, {
            transitionState: h,
            'aria-labelledby': N,
            size: o.CgR.DYNAMIC,
            children: [
                !B && F ? (0, r.jsx)(M, { modal: Y.current }) : null,
                (0, r.jsxs)(o.hzk, {
                    className: R.content,
                    scrollerRef: Y,
                    children: [
                        !F &&
                            (0, r.jsx)(m.Z, {
                                steps: Z.map((e) => e.label),
                                stepIndex: z,
                                onClick: (e) => {
                                    e < z ? K() : e > z && J();
                                }
                            }),
                        (0, r.jsxs)(o.MyZ, {
                            activeSlide: W,
                            width: 440,
                            onSlideReady: (e) => {
                                V(e === W);
                            },
                            children: [
                                (0, r.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, r.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: g.entity,
                                        isSlideReady: G,
                                        onChange: p
                                    })
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, r.jsx)(P.Z, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        editBroadcastInfoData: c,
                                        onChange: p,
                                        error: f,
                                        validationErrorMessage: g.schedule,
                                        isSlideReady: G
                                    })
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, r.jsx)(T.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: f
                                    })
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, r.jsx)(w.Z, {
                                        onClose: y,
                                        event: O
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !F &&
                    (0, r.jsxs)(o.mzw, {
                        className: R.footer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.inline,
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: y,
                                        children: D.intl.string(D.t['ETE/oK'])
                                    }),
                                    (0, r.jsx)(o.zxk, {
                                        onClick: J,
                                        disabled: !X,
                                        className: R.button,
                                        submitting: v,
                                        children: Q
                                    })
                                ]
                            }),
                            0 !== W &&
                                (0, r.jsx)(o.zxk, {
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
    );
}
function V(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: a, onClose: u } = e,
        d = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        m = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(l), [l]),
        x = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t), [t]),
        f = (0, N.j$)(m, x),
        [I, S] = i.useState(f),
        [T] = i.useState((0, N.Ql)(m)),
        [P, w] = i.useState(null),
        R = (e) => {
            var t;
            let n = (0, y.so)(e),
                l = null != (t = e.channel_id) ? t : null == x ? void 0 : x.id;
            null != l &&
                c.ZP.createInvite(
                    l,
                    {
                        max_age: z.value,
                        max_uses: L.value
                    },
                    _.t4x.GUILD_EVENTS
                ),
                n ? w(e) : u();
        },
        U = (0, g.Z)(d, null == m ? void 0 : m.id, I),
        [M, { loading: V, error: X }] = (0, p.Z)(async () => {
            if (null != P) return;
            let e = { broadcastToDirectoryChannels: U.broadcastToDirectoryChannels };
            if (T && null != l) return await b.Z.saveEvent(l, I, t, e), u();
            let n = await b.Z.createGuildEvent(I, t, e);
            return R(n.body), n;
        }),
        W = i.useMemo(() => (0, Z.Z)(I, T), [I, T]);
    return (0, r.jsx)(G, {
        guildId: t,
        guildEvent: I,
        guildEventId: l,
        editBroadcastInfoData: U,
        isEdit: T,
        formErrors: W,
        transitionState: a,
        loading: V,
        error: X,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let l = (0, E.xC)(e.entityType),
                    [r] = (0, O.SU)(t, l);
                (e.channelId = null != (n = null == r ? void 0 : r.id) ? n : null), e.entityType !== k.WX.EXTERNAL && I.entityType === k.WX.EXTERNAL && (e.entityMetadata = null);
            }
            S((t) => A({}, t, e));
        },
        onSave: () => {
            null != I.recurrenceRule && T && (0, C.BP)(m, I)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, l;
                          return (0, r.jsxs)(
                              e,
                              ((n = A({}, t)),
                              (l = l =
                                  {
                                      header: D.intl.string(D.t.BW1Qoq),
                                      confirmText: D.intl.string(D.t.e5VEcH),
                                      cancelText: D.intl.string(D.t.oEAioK),
                                      onConfirm: M,
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: D.intl.string(D.t.aNCYam)
                                          }),
                                          (0, r.jsx)('br', {}),
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: D.intl.format(D.t.RWBa5e, {})
                                          })
                                      ]
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n)
                          );
                      };
                  })
                : M();
        },
        onClose: u,
        createdEvent: P
    });
}
