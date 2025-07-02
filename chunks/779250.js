(n.d(t, { default: () => V }), n(388685));
var l,
    r = n(255367),
    i = n(73800),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    x = n(96698),
    g = n(313201),
    m = n(433775),
    h = n(984933),
    v = n(430824),
    f = n(971130),
    p = n(981888),
    j = n(924301),
    y = n(482241),
    b = n(951539),
    E = n(545165),
    O = n(236373),
    N = n(230900),
    C = n(854698),
    S = n(334877),
    T = n(785468),
    I = n(377329),
    P = n(311166),
    Z = n(744782),
    w = n(129526),
    D = n(765305),
    k = n(981631),
    R = n(388032),
    _ = n(365545);
function L(e) {
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
let { INVITE_OPTIONS_7_DAYS: A, INVITE_OPTIONS_UNLIMITED: z } = f.ZP;
var M = (((l = M || {})[(l.ENTITY = 0)] = 'ENTITY'), (l[(l.SETTINGS = 1)] = 'SETTINGS'), (l[(l.PREVIEW = 2)] = 'PREVIEW'), (l[(l.SUCCESS = 3)] = 'SUCCESS'), l);
function G(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.h);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            (n(
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
                ));
        }, [n, t]),
        null
    );
}
function X(e) {
    let { guildId: t, guildEvent: n, guildEventId: l, editBroadcastInfoData: c, isEdit: d, formErrors: m, transitionState: h, loading: v, error: f, onChange: p, onSave: y, onClose: b, createdEvent: E } = e,
        O = (0, g.Dt)(),
        N = i.useRef(n),
        C = !(0, a.isEqual)(N.current, n),
        w = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: R.intl.string(R.t['56QlKS']),
                    valid: null == m.entity,
                    userErrorMessage: m.entity
                },
                {
                    slideId: 1,
                    label: R.intl.string(R.t['w5/ntb']),
                    valid: null == m.schedule && null == m.topic && (!d || C),
                    userErrorMessage: m.schedule
                },
                {
                    slideId: 2,
                    label: R.intl.string(R.t['8aJzT0']),
                    valid: !0
                }
            ],
            [m, d, C]
        ),
        D = Object.keys(M).length,
        k = (0, j.xt)(n),
        L = (e) => Math.max(0, Math.min(e, D - 1)),
        [A, z] = i.useState(+!!k),
        [X, V] = i.useState(!1),
        W = i.useMemo(
            () =>
                w
                    .slice(0, A + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [w, A]
        ),
        U = A >= w.length ? 3 : w[L(A)].slideId,
        F = 3 === U;
    (0, S.l)((e) => e.onUpdateCanCloseModal)(F);
    let q = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        B = i.useRef(null),
        Y = (e) => {
            (V(!1), z(L(e)));
        },
        H = i.useRef(Y);
    (i.useEffect(() => {
        H.current = Y;
    }),
        i.useEffect(() => {
            (null == E ? void 0 : E.id) != null && H.current(3);
        }, [null == E ? void 0 : E.id]));
    let J = () => {
            W && (2 === U ? y() : F ? b() : Y(A + 1));
        },
        K = () => {
            Y(A - 1);
        },
        Q = R.intl.string(R.t.PDTjLC);
    return (
        2 === U && (Q = d ? R.intl.string(R.t.e5VEcH) : R.intl.string(R.t['60lJ0N'])),
        (0, r.jsxs)(o.Y0X, {
            transitionState: h,
            'aria-labelledby': O,
            size: o.CgR.DYNAMIC,
            parentComponent: 'ScheduleEventModal',
            children: [
                !q && F ? (0, r.jsx)(G, { modal: B.current }) : null,
                (0, r.jsxs)(o.hzk, {
                    className: _.content,
                    scrollerRef: B,
                    children: [
                        !F &&
                            (0, r.jsx)(x.Z, {
                                steps: w.map((e) => e.label),
                                stepIndex: A,
                                onClick: (e) => {
                                    e < A ? K() : e > A && J();
                                }
                            }),
                        (0, r.jsxs)(o.MyZ, {
                            activeSlide: U,
                            width: 440,
                            onSlideReady: (e) => {
                                V(e === U);
                            },
                            children: [
                                (0, r.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, r.jsx)(T.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: m.entity,
                                        isSlideReady: X,
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
                                        validationErrorMessage: m.schedule,
                                        isSlideReady: X
                                    })
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, r.jsx)(I.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: f
                                    })
                                }),
                                (0, r.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, r.jsx)(Z.Z, {
                                        onClose: b,
                                        event: E
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !F &&
                    (0, r.jsxs)(o.mzw, {
                        className: _.footer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: _.inline,
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: b,
                                        children: R.intl.string(R.t['ETE/oK'])
                                    }),
                                    (0, r.jsx)(o.zxk, {
                                        onClick: J,
                                        disabled: !W,
                                        className: _.button,
                                        submitting: v,
                                        children: Q
                                    })
                                ]
                            }),
                            0 !== U &&
                                (0, r.jsx)(o.zxk, {
                                    look: o.zxk.Looks.LINK,
                                    size: o.zxk.Sizes.MIN,
                                    onClick: K,
                                    color: o.zxk.Colors.LINK,
                                    children: R.intl.string(R.t['13/7kZ'])
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
        x = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(l), [l]),
        g = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t), [t]),
        f = (0, O.j$)(x, g),
        [S, T] = i.useState(f),
        [I] = i.useState((0, O.Ql)(x)),
        [P, Z] = i.useState(null),
        _ = (e) => {
            var t;
            let n = (0, b.so)(e),
                l = null != (t = e.channel_id) ? t : null == g ? void 0 : g.id;
            (null != l &&
                c.ZP.createInvite(
                    l,
                    {
                        max_age: A.value,
                        max_uses: z.value
                    },
                    k.t4x.GUILD_EVENTS
                ),
                n ? Z(e) : u());
        },
        M = (0, m.Z)(d, null == x ? void 0 : x.id, S),
        [G, { loading: V, error: W }] = (0, p.Z)(async () => {
            if (null != P) return;
            let e = { broadcastToDirectoryChannels: M.broadcastToDirectoryChannels };
            if (I && null != l) return (await y.Z.saveEvent(l, S, t, e), u());
            let n = await y.Z.createGuildEvent(S, t, e);
            return (_(n.body), n);
        }),
        U = i.useMemo(() => (0, w.Z)(S, I), [S, I]);
    return (0, r.jsx)(X, {
        guildId: t,
        guildEvent: S,
        guildEventId: l,
        editBroadcastInfoData: M,
        isEdit: I,
        formErrors: U,
        transitionState: a,
        loading: V,
        error: W,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let l = (0, N.xC)(e.entityType),
                    [r] = (0, E.SU)(t, l);
                ((e.channelId = null != (n = null == r ? void 0 : r.id) ? n : null), e.entityType !== D.WX.EXTERNAL && S.entityType === D.WX.EXTERNAL && (e.entityMetadata = null));
            }
            T((t) => L({}, t, e));
        },
        onSave: () => {
            null != S.recurrenceRule && I && (0, C.BP)(x, S)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, l;
                          return (0, r.jsxs)(
                              e,
                              ((n = L({}, t)),
                              (l = l =
                                  {
                                      header: R.intl.string(R.t.BW1Qoq),
                                      confirmText: R.intl.string(R.t.e5VEcH),
                                      cancelText: R.intl.string(R.t.oEAioK),
                                      onConfirm: G,
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: R.intl.string(R.t.aNCYam)
                                          }),
                                          (0, r.jsx)('br', {}),
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: R.intl.format(R.t.RWBa5e, {})
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
                : G();
        },
        onClose: u,
        createdEvent: P
    });
}
