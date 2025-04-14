n.d(t, { default: () => G }), n(388685);
var r,
    l = n(200651),
    i = n(192379),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(607070),
    d = n(745510),
    m = n(96698),
    h = n(313201),
    x = n(433775),
    g = n(984933),
    p = n(430824),
    f = n(971130),
    v = n(981888),
    b = n(924301),
    j = n(482241),
    y = n(951539),
    N = n(545165),
    O = n(236373),
    E = n(230900),
    S = n(854698),
    C = n(334877),
    P = n(785468),
    I = n(377329),
    T = n(311166),
    w = n(744782),
    W = n(129526),
    Z = n(765305),
    k = n(981631),
    D = n(388032),
    R = n(365545);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let { INVITE_OPTIONS_7_DAYS: A, INVITE_OPTIONS_UNLIMITED: z } = f.ZP;
var L = (((r = L || {})[(r.ENTITY = 0)] = 'ENTITY'), (r[(r.SETTINGS = 1)] = 'SETTINGS'), (r[(r.PREVIEW = 2)] = 'PREVIEW'), (r[(r.SUCCESS = 3)] = 'SUCCESS'), r);
function U(e) {
    let { modal: t } = e,
        { createMultipleConfetti: n } = i.useContext(d.h);
    return (
        i.useEffect(() => {
            let e = null == t ? void 0 : t.getScrollerNode();
            if (null == e) return;
            let r = e.getBoundingClientRect();
            n(
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
                );
        }, [n, t]),
        null
    );
}
function M(e) {
    let { guildId: t, guildEvent: n, guildEventId: r, editBroadcastInfoData: c, isEdit: d, formErrors: x, transitionState: g, loading: p, error: f, onChange: v, onSave: j, onClose: y, createdEvent: N } = e,
        O = (0, h.Dt)(),
        E = i.useRef(n),
        S = !(0, a.isEqual)(E.current, n),
        W = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.NW.string(D.t['56QlKS']),
                    valid: null == x.entity,
                    userErrorMessage: x.entity
                },
                {
                    slideId: 1,
                    label: D.NW.string(D.t['w5/ntb']),
                    valid: null == x.schedule && null == x.topic && (!d || S),
                    userErrorMessage: x.schedule
                },
                {
                    slideId: 2,
                    label: D.NW.string(D.t['8aJzT0']),
                    valid: !0
                }
            ],
            [x, d, S]
        ),
        Z = Object.keys(L).length,
        k = (0, b.xt)(n),
        _ = (e) => Math.max(0, Math.min(e, Z - 1)),
        [A, z] = i.useState(+!!k),
        [M, G] = i.useState(!1),
        V = i.useMemo(
            () =>
                W.slice(0, A + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [W, A]
        ),
        F = A >= W.length ? 3 : W[_(A)].slideId,
        X = 3 === F;
    (0, C.l)((e) => e.onUpdateCanCloseModal)(X);
    let B = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        Y = i.useRef(null),
        q = (e) => {
            G(!1), z(_(e));
        },
        H = i.useRef(q);
    i.useEffect(() => {
        H.current = q;
    }),
        i.useEffect(() => {
            (null == N ? void 0 : N.id) != null && H.current(3);
        }, [null == N ? void 0 : N.id]);
    let J = () => {
            V && (2 === F ? j() : X ? y() : q(A + 1));
        },
        K = () => {
            q(A - 1);
        },
        Q = D.NW.string(D.t.PDTjLC);
    return (
        2 === F && (Q = d ? D.NW.string(D.t.e5VEcH) : D.NW.string(D.t['60lJ0N'])),
        (0, l.jsxs)(o.Y0X, {
            transitionState: g,
            'aria-labelledby': O,
            size: o.CgR.DYNAMIC,
            children: [
                !B && X ? (0, l.jsx)(U, { modal: Y.current }) : null,
                (0, l.jsxs)(o.hzk, {
                    className: R.content,
                    scrollerRef: Y,
                    children: [
                        !X &&
                            (0, l.jsx)(m.Z, {
                                steps: W.map((e) => e.label),
                                stepIndex: A,
                                onClick: (e) => {
                                    e < A ? K() : e > A && J();
                                }
                            }),
                        (0, l.jsxs)(o.MyZ, {
                            activeSlide: F,
                            width: 440,
                            onSlideReady: (e) => {
                                G(e === F);
                            },
                            children: [
                                (0, l.jsx)(o.Mi4, {
                                    id: 0,
                                    children: (0, l.jsx)(P.Z, {
                                        guildId: t,
                                        guildEvent: n,
                                        validationErrorMessage: x.entity,
                                        isSlideReady: M,
                                        onChange: v
                                    })
                                }),
                                (0, l.jsx)(o.Mi4, {
                                    id: 1,
                                    children: (0, l.jsx)(T.Z, {
                                        guildEvent: n,
                                        guildEventId: r,
                                        guildId: t,
                                        editBroadcastInfoData: c,
                                        onChange: v,
                                        error: f,
                                        validationErrorMessage: x.schedule,
                                        isSlideReady: M
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
                                    children: (0, l.jsx)(w.Z, {
                                        onClose: y,
                                        event: N
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !X &&
                    (0, l.jsxs)(o.mzw, {
                        className: R.footer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: R.inline,
                                children: [
                                    (0, l.jsx)(o.zxk, {
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: y,
                                        children: D.NW.string(D.t['ETE/oK'])
                                    }),
                                    (0, l.jsx)(o.zxk, {
                                        onClick: J,
                                        disabled: !V,
                                        className: R.button,
                                        submitting: p,
                                        children: Q
                                    })
                                ]
                            }),
                            0 !== F &&
                                (0, l.jsx)(o.zxk, {
                                    look: o.zxk.Looks.LINK,
                                    size: o.zxk.Sizes.MIN,
                                    onClick: K,
                                    color: o.zxk.Colors.LINK,
                                    children: D.NW.string(D.t['13/7kZ'])
                                })
                        ]
                    })
            ]
        })
    );
}
function G(e) {
    let { guildId: t, guildScheduledEventId: r, transitionState: a, onClose: u } = e,
        d = (0, s.e7)([p.Z], () => p.Z.getGuild(t)),
        m = (0, s.e7)([b.ZP], () => b.ZP.getGuildScheduledEvent(r), [r]),
        h = (0, s.e7)([g.ZP], () => g.ZP.getDefaultChannel(t), [t]),
        f = (0, O.j$)(m, h),
        [C, P] = i.useState(f),
        [I] = i.useState((0, O.Ql)(m)),
        [T, w] = i.useState(null),
        R = (e) => {
            var t;
            let n = (0, y.so)(e),
                r = null != (t = e.channel_id) ? t : null == h ? void 0 : h.id;
            null != r &&
                c.ZP.createInvite(
                    r,
                    {
                        max_age: A.value,
                        max_uses: z.value
                    },
                    k.t4x.GUILD_EVENTS
                ),
                n ? w(e) : u();
        },
        L = (0, x.Z)(d, null == m ? void 0 : m.id, C),
        [U, { loading: G, error: V }] = (0, v.Z)(async () => {
            if (null != T) return;
            let e = { broadcastToDirectoryChannels: L.broadcastToDirectoryChannels };
            if (I && null != r) return await j.Z.saveEvent(r, C, t, e), u();
            let n = await j.Z.createGuildEvent(C, t, e);
            return R(n.body), n;
        }),
        F = i.useMemo(() => (0, W.Z)(C, I), [C, I]);
    return (0, l.jsx)(M, {
        guildId: t,
        guildEvent: C,
        guildEventId: r,
        editBroadcastInfoData: L,
        isEdit: I,
        formErrors: F,
        transitionState: a,
        loading: G,
        error: V,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let r = (0, E.xC)(e.entityType),
                    [l] = (0, N.SU)(t, r);
                (e.channelId = null != (n = null == l ? void 0 : l.id) ? n : null), e.entityType !== Z.WX.EXTERNAL && C.entityType === Z.WX.EXTERNAL && (e.entityMetadata = null);
            }
            P((t) => _({}, t, e));
        },
        onSave: () => {
            null != C.recurrenceRule && I && (0, S.BP)(m, C)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, r;
                          return (0, l.jsxs)(
                              e,
                              ((n = _({}, t)),
                              (r = r =
                                  {
                                      header: D.NW.string(D.t.BW1Qoq),
                                      confirmText: D.NW.string(D.t.e5VEcH),
                                      cancelText: D.NW.string(D.t.oEAioK),
                                      onConfirm: U,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: D.NW.string(D.t.aNCYam)
                                          }),
                                          (0, l.jsx)('br', {}),
                                          (0, l.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: D.NW.format(D.t.RWBa5e, {})
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
                : U();
        },
        onClose: u,
        createdEvent: T
    });
}
