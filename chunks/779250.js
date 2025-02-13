t.d(n, { default: () => V }), t(47120);
var l,
    i = t(200651),
    r = t(192379),
    s = t(392711),
    a = t(442837),
    o = t(481060),
    d = t(447543),
    c = t(607070),
    u = t(745510),
    x = t(96698),
    h = t(313201),
    m = t(433775),
    v = t(984933),
    g = t(430824),
    j = t(971130),
    N = t(981888),
    p = t(924301),
    f = t(482241),
    C = t(951539),
    E = t(545165),
    I = t(236373),
    S = t(230900),
    T = t(854698),
    Z = t(334877),
    y = t(785468),
    b = t(377329),
    k = t(311166),
    _ = t(744782),
    R = t(129526),
    z = t(765305),
    A = t(981631),
    D = t(388032),
    P = t(325790);
let { INVITE_OPTIONS_7_DAYS: L, INVITE_OPTIONS_UNLIMITED: M } = j.ZP;
var U = (((l = U || {})[(l.ENTITY = 0)] = 'ENTITY'), (l[(l.SETTINGS = 1)] = 'SETTINGS'), (l[(l.PREVIEW = 2)] = 'PREVIEW'), (l[(l.SUCCESS = 3)] = 'SUCCESS'), l);
function G(e) {
    let { modal: n } = e,
        { createMultipleConfetti: t } = r.useContext(u.h);
    return (
        r.useEffect(() => {
            let e = null == n ? void 0 : n.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            t(
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
                t(
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
        }, [t, n]),
        null
    );
}
function w(e) {
    let { guildId: n, guildEvent: t, guildEventId: l, editBroadcastInfoData: d, isEdit: u, formErrors: m, transitionState: v, loading: g, error: j, onChange: N, onSave: f, onClose: C, createdEvent: E } = e,
        I = (0, h.Dt)(),
        S = r.useRef(t),
        T = !(0, s.isEqual)(S.current, t),
        R = r.useMemo(
            () => [
                {
                    slideId: 0,
                    label: D.intl.string(D.t['56QlKS']),
                    valid: null == m.entity,
                    userErrorMessage: m.entity
                },
                {
                    slideId: 1,
                    label: D.intl.string(D.t['w5/ntb']),
                    valid: null == m.schedule && null == m.topic && (!u || T),
                    userErrorMessage: m.schedule
                },
                {
                    slideId: 2,
                    label: D.intl.string(D.t['8aJzT0']),
                    valid: !0
                }
            ],
            [m, u, T]
        ),
        z = Object.keys(U).length,
        A = (0, p.xt)(t),
        L = (e) => Math.max(0, Math.min(e, z - 1)),
        [M, w] = r.useState(A ? 1 : 0),
        [V, F] = r.useState(!1),
        W = r.useMemo(
            () =>
                R.slice(0, M + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [R, M]
        ),
        O = M >= R.length ? 3 : R[L(M)].slideId,
        B = 3 === O;
    (0, Z.l)((e) => e.onUpdateCanCloseModal)(B);
    let X = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        q = r.useRef(null),
        Y = (e) => {
            F(!1), w(L(e));
        },
        H = r.useRef(Y);
    r.useEffect(() => {
        H.current = Y;
    }),
        r.useEffect(() => {
            (null == E ? void 0 : E.id) != null && H.current(3);
        }, [null == E ? void 0 : E.id]);
    let J = () => {
            W && (2 === O ? f() : B ? C() : Y(M + 1));
        },
        K = () => {
            Y(M - 1);
        },
        Q = D.intl.string(D.t.PDTjLC);
    return (
        2 === O && (Q = u ? D.intl.string(D.t.e5VEcH) : D.intl.string(D.t['60lJ0N'])),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(o.Y0X, {
                transitionState: v,
                'aria-labelledby': I,
                size: o.CgR.DYNAMIC,
                children: [
                    !X && B ? (0, i.jsx)(G, { modal: q.current }) : null,
                    (0, i.jsxs)(o.hzk, {
                        className: P.content,
                        scrollerRef: q,
                        children: [
                            !B &&
                                (0, i.jsx)(x.Z, {
                                    steps: R.map((e) => e.label),
                                    stepIndex: M,
                                    onClick: (e) => {
                                        e < M ? K() : e > M && J();
                                    }
                                }),
                            (0, i.jsxs)(o.MyZ, {
                                activeSlide: O,
                                width: 440,
                                onSlideReady: (e) => {
                                    F(e === O);
                                },
                                children: [
                                    (0, i.jsx)(o.Mi4, {
                                        id: 0,
                                        children: (0, i.jsx)(y.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            validationErrorMessage: m.entity,
                                            isSlideReady: V,
                                            onChange: N
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 1,
                                        children: (0, i.jsx)(k.Z, {
                                            guildEvent: t,
                                            guildEventId: l,
                                            guildId: n,
                                            editBroadcastInfoData: d,
                                            onChange: N,
                                            error: j,
                                            validationErrorMessage: m.schedule,
                                            isSlideReady: V
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 2,
                                        children: (0, i.jsx)(b.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            guildEventId: l,
                                            error: j
                                        })
                                    }),
                                    (0, i.jsx)(o.Mi4, {
                                        id: 3,
                                        children: (0, i.jsx)(_.Z, {
                                            onClose: C,
                                            event: E
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !B &&
                        (0, i.jsxs)(o.mzw, {
                            className: P.footer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: P.inline,
                                    children: [
                                        (0, i.jsx)(o.zxk, {
                                            color: o.zxk.Colors.PRIMARY,
                                            onClick: C,
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
                                0 !== O &&
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
    let { guildId: n, guildScheduledEventId: l, transitionState: s, onClose: c } = e,
        u = (0, a.e7)([g.Z], () => g.Z.getGuild(n)),
        x = (0, a.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(l), [l]),
        h = (0, a.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
        j = (0, I.j$)(x, h),
        [Z, y] = r.useState(j),
        [b] = r.useState((0, I.Ql)(x)),
        [k, _] = r.useState(null),
        P = (e) => {
            var n;
            let t = (0, C.so)(e),
                l = null !== (n = e.channel_id) && void 0 !== n ? n : null == h ? void 0 : h.id;
            null != l &&
                d.Z.createInvite(
                    l,
                    {
                        max_age: L.value,
                        max_uses: M.value
                    },
                    A.t4x.GUILD_EVENTS
                ),
                t ? _(e) : c();
        },
        U = (0, m.Z)(u, null == x ? void 0 : x.id, Z),
        [G, { loading: V, error: F }] = (0, N.Z)(async () => {
            if (null != k) return;
            let e = { broadcastToDirectoryChannels: U.broadcastToDirectoryChannels };
            if (b && null != l) return await f.Z.saveEvent(l, Z, n, e), c();
            let t = await f.Z.createGuildEvent(Z, n, e);
            return P(t.body), t;
        }),
        W = r.useMemo(() => (0, R.Z)(Z, b), [Z, b]);
    return (0, i.jsx)(w, {
        guildId: n,
        guildEvent: Z,
        guildEventId: l,
        editBroadcastInfoData: U,
        isEdit: b,
        formErrors: W,
        transitionState: s,
        loading: V,
        error: F,
        onChange: (e) => {
            if (null != e.entityType) {
                var t;
                let l = (0, S.xC)(e.entityType),
                    [i] = (0, E.SU)(n, l);
                (e.channelId = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null), e.entityType !== z.WX.EXTERNAL && Z.entityType === z.WX.EXTERNAL && (e.entityMetadata = null);
            }
            y((n) => ({
                ...n,
                ...e
            }));
        },
        onSave: () => {
            null != Z.recurrenceRule && b && (0, T.BP)(x, Z)
                ? (0, o.ZDy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
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
