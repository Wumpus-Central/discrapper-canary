(n.d(t, { default: () => W }), n(388685));
var r,
    l = n(255367),
    i = n(73800),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    x = n(96698),
    m = n(313201),
    g = n(433775),
    v = n(984933),
    h = n(430824),
    f = n(971130),
    p = n(981888),
    j = n(924301),
    y = n(482241),
    b = n(951539),
    E = n(545165),
    O = n(236373),
    N = n(230900),
    C = n(854698),
    T = n(334877),
    S = n(785468),
    I = n(377329),
    Z = n(311166),
    P = n(744782),
    w = n(129526),
    D = n(765305),
    _ = n(981631),
    R = n(388032),
    A = n(365545);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: k, INVITE_OPTIONS_UNLIMITED: M } = f.ZP;
var L = (((r = L || {})[(r.ENTITY = 0)] = 'ENTITY'), (r[(r.SETTINGS = 1)] = 'SETTINGS'), (r[(r.PREVIEW = 2)] = 'PREVIEW'), (r[(r.SUCCESS = 3)] = 'SUCCESS'), r);
function X(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.h);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let r = e.getBoundingClientRect();
            (n(
                {
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: r.left - 100,
                            y: r.top - 100
                        },
                        maxValue: {
                            x: r.left + 100,
                            y: r.top + 100
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
                                x: r.right - 100,
                                y: r.top - 100
                            },
                            maxValue: {
                                x: r.right + 100,
                                y: r.top + 100
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
    let { guildId: t, guildEvent: n, guildEventId: r, editBroadcastInfoData: c, isEdit: d, formErrors: g, transitionState: v, loading: h, error: f, onChange: p, onSave: y, onClose: b, createdEvent: E } = e,
        O = (0, m.Dt)(),
        N = i.useRef(n),
        C = !(0, a.isEqual)(N.current, n),
        w = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: R.intl.string(R.t['56QlKS']),
                    valid: null == g.entity,
                    userErrorMessage: g.entity
                },
                {
                    slideId: 1,
                    label: R.intl.string(R.t['w5/ntb']),
                    valid: null == g.schedule && null == g.topic && (!d || C),
                    userErrorMessage: g.schedule
                },
                {
                    slideId: 2,
                    label: R.intl.string(R.t['8aJzT0']),
                    valid: !0
                }
            ],
            [g, d, C]
        ),
        D = Object.keys(L).length,
        _ = (0, j.xt)(n),
        G = (e) => Math.max(0, Math.min(e, D - 1)),
        [k, M] = i.useState(+!!_),
        [V, W] = i.useState(!1),
        z = i.useMemo(
            () =>
                w
                    .slice(0, k + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [w, k]
        ),
        U = k >= w.length ? 3 : w[G(k)].slideId,
        B = 3 === U;
    (0, T.l)((e) => e.onUpdateCanCloseModal)(B);
    let F = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        q = i.useRef(null),
        H = (e) => {
            (W(!1), M(G(e)));
        },
        Y = i.useRef(H);
    (i.useEffect(() => {
        Y.current = H;
    }),
        i.useEffect(() => {
            (null == E ? void 0 : E.id) != null && Y.current(3);
        }, [null == E ? void 0 : E.id]));
    let J = () => {
            z && (2 === U ? y() : B ? b() : H(k + 1));
        },
        K = () => {
            H(k - 1);
        },
        Q = R.intl.string(R.t.PDTjLC);
    return (
        2 === U && (Q = d ? R.intl.string(R.t.e5VEcH) : R.intl.string(R.t['60lJ0N'])),
        (0, l.jsxs)(o.Y0X, {
            transitionState: v,
            'aria-labelledby': O,
            size: o.CgR.DYNAMIC,
            parentComponent: 'ScheduleEventModal',
            'data-migration-pending': !0,
            children: [
                !F && B ? (0, l.jsx)(X, { modal: q.current }) : null,
                (0, l.jsxs)(o.hzk, {
                    className: A.content,
                    scrollerRef: q,
                    'data-migration-pending': !0,
                    children: [
                        !B &&
                            (0, l.jsx)(x.Z, {
                                steps: w.map((e) => e.label),
                                stepIndex: k,
                                onClick: (e) => {
                                    e < k ? K() : e > k && J();
                                }
                            }),
                        (0, l.jsxs)(o.MyZ, {
                            activeSlide: U,
                            width: 440,
                            onSlideReady: (e) => {
                                W(e === U);
                            },
                            children: [
                                (0, l.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, l.jsx)(S.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: g.entity,
                                        isSlideReady: V,
                                        onChange: p
                                    })
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, l.jsx)(Z.Z, {
                                        guildEvent: n,
                                        guildEventId: r,
                                        guildId: t,
                                        editBroadcastInfoData: c,
                                        onChange: p,
                                        error: f,
                                        validationErrorMessage: g.schedule,
                                        isSlideReady: V
                                    })
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 2,
                                    children: (0, l.jsx)(I.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        guildEventId: r,
                                        error: f
                                    })
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 3,
                                    children: (0, l.jsx)(P.Z, {
                                        onClose: b,
                                        event: E
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !B &&
                    (0, l.jsxs)(o.mzw, {
                        className: A.footer,
                        'data-migration-pending': !0,
                        children: [
                            (0, l.jsxs)('div', {
                                className: A.inline,
                                children: [
                                    (0, l.jsx)(o.zxk, {
                                        variant: 'secondary',
                                        text: R.intl.string(R.t['ETE/oK']),
                                        onClick: b
                                    }),
                                    (0, l.jsx)('div', {
                                        'data-button-hoisted-classname-wrapper': !0,
                                        className: A.button,
                                        children: (0, l.jsx)(o.zxk, {
                                            variant: 'primary',
                                            text: Q,
                                            onClick: J,
                                            disabled: !z,
                                            loading: h
                                        })
                                    })
                                ]
                            }),
                            0 !== U &&
                                (0, l.jsx)('div', {
                                    className: A.textButtonWrapper,
                                    children: (0, l.jsx)(o.Avr, {
                                        variant: 'secondary',
                                        size: 'sm',
                                        onClick: K,
                                        text: R.intl.string(R.t['13/7kZ'])
                                    })
                                })
                        ]
                    })
            ]
        })
    );
}
function W(e) {
    let { guildId: t, guildScheduledEventId: r, transitionState: a, onClose: u } = e,
        d = (0, s.e7)([h.Z], () => h.Z.getGuild(t)),
        x = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]),
        m = (0, s.e7)([v.ZP], () => v.ZP.getDefaultChannel(t), [t]),
        f = (0, O.j$)(x, m),
        [T, S] = i.useState(f),
        [I] = i.useState((0, O.Ql)(x)),
        [Z, P] = i.useState(null),
        A = (e) => {
            var t;
            let n = (0, b.so)(e),
                r = null != (t = e.channel_id) ? t : null == m ? void 0 : m.id;
            (null != r &&
                c.ZP.createInvite(
                    r,
                    {
                        max_age: k.value,
                        max_uses: M.value
                    },
                    _.t4x.GUILD_EVENTS
                ),
                n ? P(e) : u());
        },
        L = (0, g.Z)(d, null == x ? void 0 : x.id, T),
        [X, { loading: W, error: z }] = (0, p.Z)(async () => {
            if (null != Z) return;
            let e = { broadcastToDirectoryChannels: L.broadcastToDirectoryChannels };
            if (I && null != r) return (await y.Z.saveEvent(r, T, t, e), u());
            let n = await y.Z.createGuildEvent(T, t, e);
            return (A(n.body), n);
        }),
        U = i.useMemo(() => (0, w.Z)(T, I), [T, I]);
    return (0, l.jsx)(V, {
        guildId: t,
        guildEvent: T,
        guildEventId: r,
        editBroadcastInfoData: L,
        isEdit: I,
        formErrors: U,
        transitionState: a,
        loading: W,
        error: z,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let r = (0, N.xC)(e.entityType),
                    [l] = (0, E.SU)(t, r);
                ((e.channelId = null != (n = null == l ? void 0 : l.id) ? n : null), e.entityType !== D.WX.EXTERNAL && T.entityType === D.WX.EXTERNAL && (e.entityMetadata = null));
            }
            S((t) => G({}, t, e));
        },
        onSave: () => {
            null != T.recurrenceRule && I && (0, C.BP)(x, T)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, r;
                          return (0, l.jsxs)(
                              e,
                              ((n = G({}, t)),
                              (r = r =
                                  {
                                      header: R.intl.string(R.t.BW1Qoq),
                                      confirmText: R.intl.string(R.t.e5VEcH),
                                      cancelText: R.intl.string(R.t.oEAioK),
                                      onConfirm: X,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: R.intl.string(R.t.aNCYam)
                                          }),
                                          (0, l.jsx)('br', {}),
                                          (0, l.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: R.intl.format(R.t.RWBa5e, {})
                                          })
                                      ]
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              n)
                          );
                      };
                  })
                : X();
        },
        onClose: u,
        createdEvent: Z
    });
}
