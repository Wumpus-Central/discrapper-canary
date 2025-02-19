n.d(t, { default: () => G }), n(47120);
var r,
    l = n(200651),
    i = n(192379),
    a = n(392711),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    d = n(607070),
    u = n(745510),
    m = n(96698),
    x = n(313201),
    g = n(433775),
    h = n(984933),
    v = n(430824),
    f = n(971130),
    p = n(981888),
    j = n(924301),
    N = n(482241),
    b = n(951539),
    y = n(545165),
    O = n(236373),
    E = n(230900),
    C = n(854698),
    I = n(334877),
    S = n(785468),
    T = n(377329),
    P = n(311166),
    W = n(744782),
    w = n(129526),
    Z = n(765305),
    k = n(981631),
    _ = n(388032),
    D = n(92087);
function R(e) {
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
        { createMultipleConfetti: n } = i.useContext(u.h);
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
    let { guildId: t, guildEvent: n, guildEventId: r, editBroadcastInfoData: c, isEdit: u, formErrors: g, transitionState: h, loading: v, error: f, onChange: p, onSave: N, onClose: b, createdEvent: y } = e,
        O = (0, x.Dt)(),
        E = i.useRef(n),
        C = !(0, a.isEqual)(E.current, n),
        w = i.useMemo(
            () => [
                {
                    slideId: 0,
                    label: _.NW.string(_.t['56QlKS']),
                    valid: null == g.entity,
                    userErrorMessage: g.entity
                },
                {
                    slideId: 1,
                    label: _.NW.string(_.t['w5/ntb']),
                    valid: null == g.schedule && null == g.topic && (!u || C),
                    userErrorMessage: g.schedule
                },
                {
                    slideId: 2,
                    label: _.NW.string(_.t['8aJzT0']),
                    valid: !0
                }
            ],
            [g, u, C]
        ),
        Z = Object.keys(L).length,
        k = (0, j.xt)(n),
        R = (e) => Math.max(0, Math.min(e, Z - 1)),
        [A, z] = i.useState(+!!k),
        [M, G] = i.useState(!1),
        V = i.useMemo(
            () =>
                w
                    .slice(0, A + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [w, A]
        ),
        X = A >= w.length ? 3 : w[R(A)].slideId,
        F = 3 === X;
    (0, I.l)((e) => e.onUpdateCanCloseModal)(F);
    let B = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        Y = i.useRef(null),
        q = (e) => {
            G(!1), z(R(e));
        },
        H = i.useRef(q);
    i.useEffect(() => {
        H.current = q;
    }),
        i.useEffect(() => {
            (null == y ? void 0 : y.id) != null && H.current(3);
        }, [null == y ? void 0 : y.id]);
    let J = () => {
            V && (2 === X ? N() : F ? b() : q(A + 1));
        },
        K = () => {
            q(A - 1);
        },
        Q = _.NW.string(_.t.PDTjLC);
    return (
        2 === X && (Q = u ? _.NW.string(_.t.e5VEcH) : _.NW.string(_.t['60lJ0N'])),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(o.Y0X, {
                transitionState: h,
                'aria-labelledby': O,
                size: o.CgR.DYNAMIC,
                children: [
                    !B && F ? (0, l.jsx)(U, { modal: Y.current }) : null,
                    (0, l.jsxs)(o.hzk, {
                        className: D.content,
                        scrollerRef: Y,
                        children: [
                            !F &&
                                (0, l.jsx)(m.Z, {
                                    steps: w.map((e) => e.label),
                                    stepIndex: A,
                                    onClick: (e) => {
                                        e < A ? K() : e > A && J();
                                    }
                                }),
                            (0, l.jsxs)(o.MyZ, {
                                activeSlide: X,
                                width: 440,
                                onSlideReady: (e) => {
                                    G(e === X);
                                },
                                children: [
                                    (0, l.jsx)(o.Mi4, {
                                        id: 0,
                                        children: (0, l.jsx)(S.Z, {
                                            guildId: t,
                                            guildEvent: n,
                                            validationErrorMessage: g.entity,
                                            isSlideReady: M,
                                            onChange: p
                                        })
                                    }),
                                    (0, l.jsx)(o.Mi4, {
                                        id: 1,
                                        children: (0, l.jsx)(P.Z, {
                                            guildEvent: n,
                                            guildEventId: r,
                                            guildId: t,
                                            editBroadcastInfoData: c,
                                            onChange: p,
                                            error: f,
                                            validationErrorMessage: g.schedule,
                                            isSlideReady: M
                                        })
                                    }),
                                    (0, l.jsx)(o.Mi4, {
                                        id: 2,
                                        children: (0, l.jsx)(T.Z, {
                                            guildId: t,
                                            guildEvent: n,
                                            guildEventId: r,
                                            error: f
                                        })
                                    }),
                                    (0, l.jsx)(o.Mi4, {
                                        id: 3,
                                        children: (0, l.jsx)(W.Z, {
                                            onClose: b,
                                            event: y
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !F &&
                        (0, l.jsxs)(o.mzw, {
                            className: D.footer,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: D.inline,
                                    children: [
                                        (0, l.jsx)(o.zxk, {
                                            color: o.zxk.Colors.PRIMARY,
                                            onClick: b,
                                            children: _.NW.string(_.t['ETE/oK'])
                                        }),
                                        (0, l.jsx)(o.zxk, {
                                            onClick: J,
                                            disabled: !V,
                                            className: D.button,
                                            submitting: v,
                                            children: Q
                                        })
                                    ]
                                }),
                                0 !== X &&
                                    (0, l.jsx)(o.zxk, {
                                        look: o.zxk.Looks.LINK,
                                        size: o.zxk.Sizes.MIN,
                                        onClick: K,
                                        color: o.zxk.Colors.LINK,
                                        children: _.NW.string(_.t['13/7kZ'])
                                    })
                            ]
                        })
                ]
            })
        })
    );
}
function G(e) {
    let { guildId: t, guildScheduledEventId: r, transitionState: a, onClose: d } = e,
        u = (0, s.e7)([v.Z], () => v.Z.getGuild(t)),
        m = (0, s.e7)([j.ZP], () => j.ZP.getGuildScheduledEvent(r), [r]),
        x = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(t), [t]),
        f = (0, O.j$)(m, x),
        [I, S] = i.useState(f),
        [T] = i.useState((0, O.Ql)(m)),
        [P, W] = i.useState(null),
        D = (e) => {
            var t;
            let n = (0, b.so)(e),
                r = null !== (t = e.channel_id) && void 0 !== t ? t : null == x ? void 0 : x.id;
            null != r &&
                c.Z.createInvite(
                    r,
                    {
                        max_age: A.value,
                        max_uses: z.value
                    },
                    k.t4x.GUILD_EVENTS
                ),
                n ? W(e) : d();
        },
        L = (0, g.Z)(u, null == m ? void 0 : m.id, I),
        [U, { loading: G, error: V }] = (0, p.Z)(async () => {
            if (null != P) return;
            let e = { broadcastToDirectoryChannels: L.broadcastToDirectoryChannels };
            if (T && null != r) return await N.Z.saveEvent(r, I, t, e), d();
            let n = await N.Z.createGuildEvent(I, t, e);
            return D(n.body), n;
        }),
        X = i.useMemo(() => (0, w.Z)(I, T), [I, T]);
    return (0, l.jsx)(M, {
        guildId: t,
        guildEvent: I,
        guildEventId: r,
        editBroadcastInfoData: L,
        isEdit: T,
        formErrors: X,
        transitionState: a,
        loading: G,
        error: V,
        onChange: (e) => {
            if (null != e.entityType) {
                var n;
                let r = (0, E.xC)(e.entityType),
                    [l] = (0, y.SU)(t, r);
                (e.channelId = null !== (n = null == l ? void 0 : l.id) && void 0 !== n ? n : null), e.entityType !== Z.WX.EXTERNAL && I.entityType === Z.WX.EXTERNAL && (e.entityMetadata = null);
            }
            S((t) => R({}, t, e));
        },
        onSave: () => {
            null != I.recurrenceRule && T && (0, C.BP)(m, I)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                      return (t) => {
                          var n, r;
                          return (0, l.jsxs)(
                              e,
                              ((n = R({}, t)),
                              (r = r =
                                  {
                                      header: _.NW.string(_.t.BW1Qoq),
                                      confirmText: _.NW.string(_.t.e5VEcH),
                                      cancelText: _.NW.string(_.t.oEAioK),
                                      onConfirm: U,
                                      children: [
                                          (0, l.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: _.NW.string(_.t.aNCYam)
                                          }),
                                          (0, l.jsx)('br', {}),
                                          (0, l.jsx)(o.Text, {
                                              variant: 'text-md/normal',
                                              children: _.NW.format(_.t.RWBa5e, {})
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
        onClose: d,
        createdEvent: P
    });
}
