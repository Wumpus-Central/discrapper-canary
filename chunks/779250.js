(n.d(t, { default: () => W }), n(388685));
var l,
    r = n(255367),
    i = n(73800),
    a = n(392711),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(447543),
    d = n(607070),
    x = n(745510),
    m = n(96698),
    g = n(313201),
    v = n(433775),
    h = n(984933),
    f = n(430824),
    p = n(971130),
    j = n(981888),
    y = n(924301),
    b = n(482241),
    E = n(951539),
    O = n(545165),
    N = n(236373),
    C = n(230900),
    T = n(854698),
    S = n(334877),
    I = n(785468),
    Z = n(377329),
    P = n(311166),
    w = n(744782),
    D = n(129526),
    _ = n(765305),
    R = n(981631),
    A = n(388032),
    k = n(365545);
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
let { INVITE_OPTIONS_7_DAYS: G, INVITE_OPTIONS_UNLIMITED: M } = p.ZP;
var z = (((l = z || {})[(l.ENTITY = 0)] = 'ENTITY'), (l[(l.SETTINGS = 1)] = 'SETTINGS'), (l[(l.PREVIEW = 2)] = 'PREVIEW'), (l[(l.SUCCESS = 3)] = 'SUCCESS'), l);
function X(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(x.h);
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
function V(e) {
    let { guildId: t, guildEvent: n, guildEventId: l, editBroadcastInfoData: u, isEdit: x, formErrors: v, transitionState: h, loading: f, error: p, onChange: j, onSave: b, onClose: E, createdEvent: O } = e,
        N = (0, g.Dt)(),
        C = i.useRef(n),
        T = !(0, a.isEqual)(C.current, n),
        D = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: A.intl.string(A.t['56QlKS']),
                    valid: null == v.entity,
                    userErrorMessage: v.entity
                },
                {
                    slideId: 1,
                    label: A.intl.string(A.t['w5/ntb']),
                    valid: null == v.schedule && null == v.topic && (!x || T),
                    userErrorMessage: v.schedule
                },
                {
                    slideId: 2,
                    label: A.intl.string(A.t['8aJzT0']),
                    valid: !0
                }
            ],
            [v, x, T]
        ),
        _ = Object.keys(z).length,
        R = (0, y.xt)(n),
        L = (e) => Math.max(0, Math.min(e, _ - 1)),
        [G, M] = i.useState(+!!R),
        [V, W] = i.useState(!1),
        U = i.useMemo(
            () =>
                D.slice(0, G + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [D, G]
        ),
        B = G >= D.length ? 3 : D[L(G)].slideId,
        F = 3 === B;
    (0, S.l)((e) => e.onUpdateCanCloseModal)(F);
    let q = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        H = i.useRef(null),
        Y = (e) => {
            (W(!1), M(L(e)));
        },
        J = i.useRef(Y);
    (i.useEffect(() => {
        J.current = Y;
    }),
        i.useEffect(() => {
            (null == O ? void 0 : O.id) != null && J.current(3);
        }, [null == O ? void 0 : O.id]));
    let K = () => {
            U && (2 === B ? b() : F ? E() : Y(G + 1));
        },
        Q = () => {
            Y(G - 1);
        },
        $ = A.intl.string(A.t.PDTjLC);
    return (
        2 === B && ($ = x ? A.intl.string(A.t.e5VEcH) : A.intl.string(A.t['60lJ0N'])),
        (0, r.jsxs)(c.Y0X, {
            transitionState: h,
            'aria-labelledby': N,
            size: c.CgR.DYNAMIC,
            parentComponent: 'ScheduleEventModal',
            children: [
                !q && F ? (0, r.jsx)(X, { modal: H.current }) : null,
                (0, r.jsxs)(c.hzk, {
                    className: k.content,
                    scrollerRef: H,
                    children: [
                        !F &&
                            (0, r.jsx)(m.Z, {
                                steps: D.map((e) => e.label),
                                stepIndex: G,
                                onClick: (e) => {
                                    e < G ? Q() : e > G && K();
                                }
                            }),
                        (0, r.jsxs)(c.MyZ, {
                            activeSlide: B,
                            width: 440,
                            onSlideReady: (e) => {
                                W(e === B);
                            },
                            children: [
                                (0, r.jsx)(c.Mi4, {
                                    id: 0,
                                    children: (0, r.jsx)(I.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: v.entity,
                                        isSlideReady: V,
                                        onChange: j
                                    })
                                }),
                                (0, r.jsx)(c.Mi4, {
                                    id: 1,
                                    children: (0, r.jsx)(P.Z, {
                                        guildEvent: n,
                                        guildEventId: l,
                                        guildId: t,
                                        editBroadcastInfoData: u,
                                        onChange: j,
                                        error: p,
                                        validationErrorMessage: v.schedule,
                                        isSlideReady: V
                                    })
                                }),
                                (0, r.jsx)(c.Mi4, {
                                    id: 2,
                                    children: (0, r.jsx)(Z.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: l,
                                        error: p
                                    })
                                }),
                                (0, r.jsx)(c.Mi4, {
                                    id: 3,
                                    children: (0, r.jsx)(w.Z, {
                                        onClose: E,
                                        event: O
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !F &&
                    (0, r.jsxs)(c.mzw, {
                        className: k.footer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: k.inline,
                                children: [
                                    (0, r.jsx)(c.zxk, {
                                        variant: 'secondary',
                                        text: A.intl.string(A.t['ETE/oK']),
                                        onClick: E
                                    }),
                                    (0, r.jsx)('div', {
                                        'data-button-hoisted-classname-wrapper': !0,
                                        className: k.button,
                                        children: (0, r.jsx)(c.zxk, {
                                            variant: 'primary',
                                            text: $,
                                            onClick: K,
                                            disabled: !U,
                                            loading: f
                                        })
                                    })
                                ]
                            }),
                            0 !== B &&
                                (0, r.jsx)(o.zx, {
                                    look: o.zx.Looks.LINK,
                                    size: o.zx.Sizes.MIN,
                                    onClick: Q,
                                    color: o.zx.Colors.LINK,
                                    children: A.intl.string(A.t['13/7kZ'])
                                })
                        ]
                    })
            ]
        })
    );
}
function W(e) {
    let { guildId: t, guildScheduledEventId: l, transitionState: a, onClose: o } = e,
        d = (0, s.e7)([f.Z], () => f.Z.getGuild(t)),
        x = (0, s.e7)([y.ZP], () => y.ZP.getGuildScheduledEvent(l), [l]),
        m = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t), [t]),
        g = (0, N.j$)(x, m),
        [p, S] = i.useState(g),
        [I] = i.useState((0, N.Ql)(x)),
        [Z, P] = i.useState(null),
        w = (e) => {
            var t;
            let n = (0, E.so)(e),
                l = null != (t = e.channel_id) ? t : null == m ? void 0 : m.id;
            (null != l &&
                u.ZP.createInvite(
                    l,
                    {
                        max_age: G.value,
                        max_uses: M.value
                    },
                    R.t4x.GUILD_EVENTS
                ),
                n ? P(e) : o());
        },
        k = (0, v.Z)(d, null == x ? void 0 : x.id, p),
        [z, { loading: X, error: W }] = (0, j.Z)(async () => {
            if (null != Z) return;
            let e = { broadcastToDirectoryChannels: k.broadcastToDirectoryChannels };
            if (I && null != l) return (await b.Z.saveEvent(l, p, t, e), o());
            let n = await b.Z.createGuildEvent(p, t, e);
            return (w(n.body), n);
        }),
        U = i.useMemo(() => (0, D.Z)(p, I), [p, I]);
    return (0, r.jsx)(V, {
        guildId: t,
        guildEvent: p,
        guildEventId: l,
        editBroadcastInfoData: k,
        isEdit: I,
        formErrors: U,
        transitionState: a,
        loading: X,
        error: W,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let l = (0, C.xC)(e.entityType),
                    [r] = (0, O.SU)(t, l);
                ((e.channelId = null != (n = null == r ? void 0 : r.id) ? n : null), e.entityType !== _.WX.EXTERNAL && p.entityType === _.WX.EXTERNAL && (e.entityMetadata = null));
            }
            S((t) => L({}, t, e));
        },
        onSave: () => {
            null != p.recurrenceRule && I && (0, T.BP)(x, p)
                ? (0, c.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, l;
                          return (0, r.jsxs)(
                              e,
                              ((n = L({}, t)),
                              (l = l =
                                  {
                                      header: A.intl.string(A.t.BW1Qoq),
                                      confirmText: A.intl.string(A.t.e5VEcH),
                                      cancelText: A.intl.string(A.t.oEAioK),
                                      onConfirm: z,
                                      children: [
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-md/normal',
                                              children: A.intl.string(A.t.aNCYam)
                                          }),
                                          (0, r.jsx)('br', {}),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-md/normal',
                                              children: A.intl.format(A.t.RWBa5e, {})
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
                : z();
        },
        onClose: o,
        createdEvent: Z
    });
}
